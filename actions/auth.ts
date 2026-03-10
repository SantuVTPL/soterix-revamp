"use server";

import { LoginFormSchema } from "@/definitions/auth";
import { SHA512 } from "crypto-js";
import { cookies } from "next/headers";
import setCookieParser from 'set-cookie-parser'
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
  data: FormData,
): Promise<FormState> {
  const email = data.get("email") as string;
  const password = data.get("password") as string;

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

  try {
    console.log(API.LOGIN)
    const res = await secureFetch(
      API.LOGIN,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
        skipCookies: true,
      },
    );

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
        
        parsedCookies.forEach((c) => {
          console.log(c)
            cookieStore.set({
              name: c.name,
              value: c.value,
              httpOnly: true,
              path: '/',
              secure: false,
              sameSite: 'strict',
              maxAge: c.maxAge || 1800
            })
        });
    }
    
  } catch (error) {
    return { message: "Something went wrong." }
  }

  redirect('/')
}

export async function signout() {
  const cookieStore = await cookies()

  cookieStore.delete('JSESSIONID')

  redirect('/auth/login')
}
