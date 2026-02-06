import z from 'zod'

export const SignUpDtoScema = z.object({
	fullName: z.string().min(1, "Вкажіть ім'я"),
	email: z.email('Невірний email'),
	password: z
		.string()
		.min(6, 'Пароль має містити мінімум 6 символів')
		.max(256, 'Пароль має містити максимум 256 символів'),
})

export type SignUpDto = z.infer<typeof SignUpDtoScema>
