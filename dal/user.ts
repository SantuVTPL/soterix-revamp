import { API } from '@/constants/api'
import { secureFetch } from '@/lib/secure-fetch'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { cache } from 'react'
import 'server-only'

export const getUser = cache(async () => {
    try {
        const cookieStore = await cookies()

        console.log('=======', cookieStore.toString())

        const res = await secureFetch(API.USER)

        if (res.ok){
            const successRes = await res.json()
            return successRes.result?.[0]
        } else {
            const errRes = await res.json()
            console.log(errRes)
        }
    } catch (error) {
        console.error("Login error:", error);
    }

    redirect('/auth/login')
})