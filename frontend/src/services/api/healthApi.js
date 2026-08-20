import { apiRequest } from './apiClient.js'

export function getHealth() {
  return apiRequest('/health')
}