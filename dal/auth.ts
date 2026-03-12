import { API } from '@/constants/api';
import { secureFetch } from '@/lib/secure-fetch';
import { cookies } from 'next/headers';
import { cache } from 'react';
import 'server-only'

export const getAuthenticatorQR = cache(async () => {
    let res;
    const cookieStore = await cookies()
    const mfaJSession = cookieStore.get('MFA-JSESSIONID')?.value

    res = await secureFetch(API.AUTHQR, {
        skipCookies: true,
        headers: {
            Cookie: `JSESSIONID=d9afc8a48cf33fc1a413891bec5d80f0; Max-Age=1800; Expires=Wed, 11 Mar 2026 20:25:51 GMT; Path=/v-apiserver; HttpOnly; SameSite=Strict`
        },
        cache: 'no-store'
    })
    // console.log(await res.json())
    if (!res.ok) {
        throw new Error("Failed to load QR.")
    }

    const buffer = await res.arrayBuffer()
    const contentType = res.headers.get('content-type')

    return { buffer, contentType }
})