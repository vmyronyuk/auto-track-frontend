import z from 'zod'

export const GetCarDtoSchema = z.object({
	id: z.union([z.string(), z.number()]),
	brand: z.string(),
	model: z.string(),
	year: z.number(),
	mileage: z.number(),
	price: z.number(),
	imageUrl: z.string().url().optional().nullable(),
	description: z.string().optional().nullable(),
})

export const GetCarsDtoSchema = z.array(GetCarDtoSchema)

export type GetCarDto = z.infer<typeof GetCarDtoSchema>
export type GetCarsDto = z.infer<typeof GetCarsDtoSchema>
