'use server'

type SignInResponse = {
	accessToken: string
}

import { requireApiBase } from '@/src/lib/requireApiBase'
import { SignInDto } from '../dtos/sign-in.dto'

export async function signInAction(data: SignInDto) {
	const res = await fetch(`${requireApiBase()}/auth/login`, {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(data),
		cache: 'no-store',
	})

	if (!res.ok) {
		const text = await res.text()
		throw new Error(text || 'Sign-in failed')
	}

	const result = (await res.json()) as Partial<SignInResponse>

	if (!result.accessToken || typeof result.accessToken !== 'string') {
		throw new Error('Sign-in response does not contain accessToken')
	}

	return { accessToken: result.accessToken }
}