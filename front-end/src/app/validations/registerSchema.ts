import z from 'zod'

export const registerSchema = z.object({
    name: z.string().min(3, "The password must have at least 6 characters").nonempty(),
    email: z.string().email().nonempty().toLowerCase(),
    password: z.string().min(6, 'The password must have at least 6 characters').nonempty(),
})