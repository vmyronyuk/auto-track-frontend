'use server'

import { requireApiBase } from '@/src/lib/requireApiBase'
import { ResetPasswordDto } from '../dtos/reset-password.dto'

export async function resetPasswordAction(
	data: Pick<ResetPasswordDto, 'email' | 'code' | 'newPassword'>,
) {
	const res = await fetch(`${requireApiBase()}/auth/reset-password`, {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(data),
		cache: 'no-store',
	})

	if (!res.ok) {
		const text = await res.text()
		throw new Error(text || 'Reset password failed')
	}

	return { ok: res.ok, status: res.status }
}
