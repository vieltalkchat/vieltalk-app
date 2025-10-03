import { ApiEndpoints } from '@/lib'
import { apiClient } from '.'
import { UserOnboardRequest } from './shared.types'

export function userOnboard(onboardRequest: UserOnboardRequest) {
  return apiClient.post(ApiEndpoints.USER_ONBOARD, onboardRequest)
}
