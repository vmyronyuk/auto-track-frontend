const API_BASE = process.env.NEXT_PUBLIC_BACKEND_URL

export function requireApiBase() {
	if (!API_BASE) {
		throw new Error('BACKEND_URL is not set')
	}
	return API_BASE
}
