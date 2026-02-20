import 'server-only'

import { cookies } from "next/headers";

type SecureFetchOptions = RequestInit & {
  skipCookies?: boolean;
};

export async function secureFetch(
  input: RequestInfo | URL,
  options: SecureFetchOptions = {}
) {
  const { skipCookies, headers, ...rest } = options;

  const cookieStore = await cookies();

  const mergedHeaders = new Headers(headers || {});

  if (!skipCookies) {
    const cookieString = cookieStore.toString();
    if (cookieString) {
      mergedHeaders.set("Cookie", cookieString);
    }
  }

  return fetch(input, {
    ...rest,
    headers: mergedHeaders,
  });
}