import { ApiEndpoints, apiClient } from '@/lib'
import { UserOnboardRequest } from './shared.types'

export function userOnboard(onboardRequest: UserOnboardRequest) {
  return apiClient.post(ApiEndpoints.USER_ONBOARD, onboardRequest)
}
