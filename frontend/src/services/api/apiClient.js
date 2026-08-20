const DEFAULT_API_URL = 'http://localhost:8080/api'

function getBaseUrl() {
  return (import.meta.env.VITE_API_URL || DEFAULT_API_URL).replace(/\/+$/, '')
}

export class ApiError extends Error {
  constructor(message, status, body) {
    super(message)
    this.name = 'ApiError'
    this.status = status
    this.body = body
  }
}

export async function apiRequest(path, options = {}) {
  const normalizedPath = path.startsWith('/') ? path : `/${path}`
  const response = await fetch(`${getBaseUrl()}${normalizedPath}`, {
    ...options,
    headers: {
      Accept: 'application/json',
      ...options.headers,
    },
  })

  const contentType = response.headers.get('content-type') || ''
  const body = response.status === 204
    ? null
    : contentType.includes('application/json')
      ? await response.json()
      : await response.text()

  if (!response.ok) {
    const message = typeof body === 'object' && body?.message
      ? body.message
      : `Request failed with status ${response.status}`
    throw new ApiError(message, response.status, body)
  }

  return body
}