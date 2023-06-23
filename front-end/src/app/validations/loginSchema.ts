import z from 'zod'

export const loginSchema = z.object({
    email: z.string().email().nonempty().toLowerCase(),
    password: z.string().min(8, 'The password must have at least 8 characters').nonempty(),
})