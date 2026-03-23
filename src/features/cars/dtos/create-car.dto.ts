import z from 'zod'

export const CreateCarDtoScema = z.object({
	brand: z.string().min(1, 'Вкажіть марку'),
	model: z.string().min(1, 'Вкажіть модель'),
	year: z
		.number({ error: 'Вкажіть рік випуску' })
		.int('Рік має бути цілим числом')
		.min(1986, 'Некоректний рік'),
	mileage: z
		.number({ error: 'Вкажіть пробіг' })
		.int('Пробіг має бути цілим числом')
		.min(0, 'Пробіг не може бути відʼємним'),
	price: z
		.number({ error: 'Вкажіть ціну' })
		.min(0, 'Ціна не може бути відʼємною'),
	imageUrl: z.string().optional(),
	description: z
		.string()
		.trim()
		.min(1, 'Опис не може бути порожнім')
		.optional(),
})

export type CreateCarDto = z.infer<typeof CreateCarDtoScema>
