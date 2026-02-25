export const AUTH_TOKEN_STORAGE_KEY = 'auth_token'

export function getClientAuthToken(): string | null {
  if (typeof window === 'undefined') return null

  try {
    return window.localStorage.getItem(AUTH_TOKEN_STORAGE_KEY)
  } catch {
    return null
  }
}