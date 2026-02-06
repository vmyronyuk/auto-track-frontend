'use server'

import { requireApiBase } from '@/src/lib/requireApiBase'
import { SignUpDto } from '../dtos/sign-up.dto'

export async function signUpAction(data: SignUpDto) {
	const res = await fetch(`${requireApiBase()}/auth/register`, {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(data),
		cache: 'no-store',
	})

	if (!res.ok) {
		const text = await res.text()
		throw new Error(text || 'Sign-up failed')
	}

	return { ok: res.ok, status: res.status }
}
