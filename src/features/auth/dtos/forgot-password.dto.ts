import z from 'zod'

export const ForgotPasswordDtoSchema = z.object({
    email: z.string().email('Некоректний email'),
})

export type ForgotPasswordDto = z.infer<typeof ForgotPasswordDtoSchema>