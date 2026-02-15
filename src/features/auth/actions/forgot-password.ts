'use server'

import { requireApiBase } from '@/src/lib/requireApiBase'
import { ForgotPasswordDto } from '../dtos/forgot-password.dto'

export async function forgotPasswordAction(data: ForgotPasswordDto,) {
    const res = await fetch(`${requireApiBase()}/auth/forgot-password`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
        cache: 'no-cache'
    })

    if (!res.ok) {
        const text = await res.text()
        throw new Error(text || 'Forgot-password failed')
    }

    return { ok: res.ok, status: res.status }
}
