import "server-only"
import * as z from 'zod'

export const LoginFormSchema = z.object({
    email: z.email({ error: 'Invalid Email.'}),
    password: z.string().min(1, { error: 'Password required.' })
})