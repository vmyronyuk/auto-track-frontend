'use server'

import { authHeader } from '@/src/lib/authToken'
import { requireApiBase } from '@/src/lib/requireApiBase'
import { cookies } from 'next/headers'
import { CreateCarDto, CreateCarDtoScema } from "../dtos/create-car.dto"

export async function CreateCarAction(
    data: CreateCarDto,
    token?: string | null,
) {
    const cookieStore = await cookies()
    const tokenFromCookie = cookieStore.get('auth_token')?.value ?? null
    const authToken = token ?? tokenFromCookie

    const res = await fetch(`${requireApiBase()}/cars`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            ...authHeader(authToken),
        },
        body: JSON.stringify(data),
        cache: 'no-store',
    })

    if (!res.ok) {
        const text = await res.text()
        throw new Error(text || 'Failed to create cars')
    }
    
	return { ok: res.ok, status: res.status }
}
