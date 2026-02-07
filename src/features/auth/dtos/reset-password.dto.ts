import { z } from 'zod'

export const ResetPasswordDtoSchema = z
	.object({
		email: z.string().email('Некоректний email'),
		code: z.string().length(6, 'Код має бути 6 символів'),
		newPassword: z.string().min(6, 'Мінімум 6 символів'),
		confirmPassword: z.string().min(6, 'Мінімум 6 символів'),
	})
	.refine(data => data.newPassword === data.confirmPassword, {
		message: 'Паролі не співпадають',
		path: ['confirmPassword'],
	})

export type ResetPasswordDto = z.infer<typeof ResetPasswordDtoSchema>
