'use server'

import { authHeader } from '@/src/lib/authToken'
import { requireApiBase } from '@/src/lib/requireApiBase'
import { cookies } from 'next/headers'
import { GetCarsDto, GetCarsDtoSchema } from '../dtos/get-car.dto'

export async function getAllCarsAction(
	token?: string | null,
): Promise<GetCarsDto> {
	const cookieStore = await cookies()
	const tokenFromCookie = cookieStore.get('auth_token')?.value ?? null
	const authToken = token ?? tokenFromCookie

	const res = await fetch(`${requireApiBase()}/cars`, {
		method: 'GET',
		headers: {
			...authHeader(authToken),
		},
		cache: 'no-store',
	})

	if (res.status === 404) {
		return []
	}

	if (!res.ok) {
		const text = await res.text()
		throw new Error(text || 'Failed to fetch cars')
	}

	const data = await res.json()
	return GetCarsDtoSchema.parse(data)
}
