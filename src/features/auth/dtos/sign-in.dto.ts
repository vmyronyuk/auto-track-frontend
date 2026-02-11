import z from 'zod'

export const SignInDtoScema = z.object({
    email: z.email('Невірний email'),
    password: z
        .string()
        .min(6, 'Пароль має містити мінімум 6 символів')
        .max(256, 'Пароль має містити максимум 256 символів'),
})

export type SignInDto = z.infer<typeof SignInDtoScema>