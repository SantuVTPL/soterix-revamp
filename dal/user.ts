import { API } from '@/constants/api'
import { secureFetch } from '@/lib/secure-fetch'
import { cache } from 'react'
import 'server-only'

export const getUser = cache(async () => {
    try {
        const res = await secureFetch(API.USER)

        if (res.ok){
            const successRes = await res.json()
            return successRes.result?.[0]
        } else {
            const errRes = await res.json()
            console.log('====== ERROR ======', errRes)
            return null
        }
    } catch (error) {
        console.error("Login error:", error);
    }
})