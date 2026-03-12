"use server";

import { LoginFormSchema } from "@/definitions/auth";
import { SHA512 } from "crypto-js";
import { cookies } from "next/headers";
import setCookieParser from "set-cookie-parser";
import { redirect } from "next/navigation";
import { flattenError } from "zod";
import { secureFetch } from "@/lib/secure-fetch";
import { API } from "@/constants/api";

export type FormState =
  | {
      success?: boolean | undefined;
      errors?: {
        email?: string[] | undefined;
        password?: string[] | undefined;
      };
      message?: string | undefined;
    }
  | undefined;

export async function login(
  prevState: unknown,
  formData: FormData,
): Promise<FormState> {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  const ValidatedFormData = LoginFormSchema.safeParse({
    email,
    password,
  });

  if (!ValidatedFormData.success) {
    const errors = flattenError(ValidatedFormData.error);
    return { errors: errors.fieldErrors };
  }

  const payload = {
    accountid: ValidatedFormData.data.email,
    password: SHA512(ValidatedFormData.data.password).toString(),
  };

  let res;

  try {
    res = await secureFetch(API.LOGIN, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
      skipCookies: true,
    });
  } catch (error) {
    return { message: "Something went wrong." };
  }

  if (!res.ok) {
    const errorData = await res.json();
    return { message: errorData.message || "Something went wrong." };
  }

  const setCookie = res.headers.get("set-cookie");
  const cookieStore = await cookies();

  if (setCookie) {
    const parsedCookies = setCookieParser.parse(setCookie, {
      map: false,
    });

    const data = (await res.json()).result?.[0];
    const mfa = data?.enterprises?.[0]?.multiFactorAuthentication;
    const showAuthenticator = data?.showAuthenticator;

    if (mfa && (!!mfa.email || !!mfa.sms || !!mfa.authenticatorApp)) {
      cookieStore.set({
        name: "MFA-JSESSIONID",
        value: parsedCookies[0]?.value,
        httpOnly: true,
        path: "/",
        secure: false,
        sameSite: "lax",
        maxAge: 300,
      });

      cookieStore.set({
        name: "MFA",
        value: JSON.stringify({ mfa, showAuthenticator }),
        httpOnly: true,
        path: "/",
        secure: false,
        sameSite: "lax",
        maxAge: 300,
      })

      redirect("/auth/login/mfa");
    }

    parsedCookies.forEach((c) => {
      cookieStore.set({
        name: c.name,
        value: c.value,
        httpOnly: true,
        path: "/",
        secure: false,
        sameSite: "strict",
        maxAge: c.maxAge || 1800,
      });
    });
  }

  redirect("/");
}

export async function signout() {
  const cookieStore = await cookies();

  cookieStore.delete("JSESSIONID");

  redirect("/auth/login");
}
