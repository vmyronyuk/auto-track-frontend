const AUTH_TOKEN_STORAGE_KEY = 'auth_token'

function isBrowser() {
	return typeof window !== 'undefined'
}

export function getAuthToken(): string | null {
	if (!isBrowser()) return null
	try {
		return window.localStorage.getItem(AUTH_TOKEN_STORAGE_KEY)
	} catch {
		return null
	}
}

export function setAuthToken(token: string | null) {
	if (!isBrowser()) return
	try {
		if (!token) {
			window.localStorage.removeItem(AUTH_TOKEN_STORAGE_KEY)
			return
		}
		window.localStorage.setItem(AUTH_TOKEN_STORAGE_KEY, token)
	} catch {}
}

export function clearAuthToken() {
	setAuthToken(null)
}

export function extractAuthTokenFromHeaders(headers: Headers): string | null {
	const raw = headers.get('Authorization') ?? headers.get('authorization')
	if (!raw) return null
	const trimmed = raw.trim()
	if (!trimmed) return null
	if (trimmed.toLowerCase().startsWith('bearer ')) {
		return trimmed.slice(7).trim()
	}
	return trimmed
}

export function setAuthTokenFromResponse(res: Response): string | null {
	const token = extractAuthTokenFromHeaders(res.headers)
	if (token) setAuthToken(token)
	return token
}

export function authHeader(token?: string | null): Record<string, string> {
	const value = token ?? getAuthToken()
	if (!value) return {}
	return {
		Authorization: value.startsWith('Bearer ') ? value : `Bearer ${value}`,
	}
}
