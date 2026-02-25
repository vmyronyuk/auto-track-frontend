import { getClientAuthToken } from "./getClientAuthToken"

export function getAuthHeader(): Record<string, string> {
  const token = getClientAuthToken()
  if (!token) return {}

  return {
    Authorization: token.startsWith('Bearer ')
      ? token
      : `Bearer ${token}`,
  }
}