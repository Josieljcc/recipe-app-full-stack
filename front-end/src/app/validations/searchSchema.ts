import z from 'zod'

export const searchSchema = z.object({
    search: z.string().min(3, 'The search must have at least 3 characters').nonempty(),
})