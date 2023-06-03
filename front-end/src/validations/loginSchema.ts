import z from 'zod'

export const loginSchema = z.object({
    email: z.string().email().nonempty(),
    password: z.string().min(6, 'The password must have at least 6 characters').nonempty(),
})