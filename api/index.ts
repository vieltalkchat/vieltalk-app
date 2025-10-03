import axios, { AxiosResponse, CreateAxiosDefaults, InternalAxiosRequestConfig } from 'axios'
import CryptoJS from 'crypto-js'
import { RSA } from 'react-native-rsa-native'

async function requestInterceptor(config: InternalAxiosRequestConfig) {
  // TODO: encrypt request data
  // TODO: add token to request headers

  const body = config.data

  if (body) {
    const key = CryptoJS.lib.WordArray.random(32)
    const iv = CryptoJS.lib.WordArray.random(16)

    const encrypted = CryptoJS.AES.encrypt(JSON.stringify(body), key, {
      iv,
    })

    config.data = {
      data: encrypted.toString(),
      key: await RSA.encrypt(key.toString(), process.env.EXPO_PUBLIC_API_PUBLIC_KEY || ''),
      iv: await RSA.encrypt(iv.toString(), process.env.EXPO_PUBLIC_API_PUBLIC_KEY || ''),
    }
  }

  return config
}

function responseInterceptor(response: AxiosResponse) {
  // TODO: logging and debugging

  return response
}

function responseErrorInterceptor(error: any) {
  // TODO: refresh token
  // TODO: handle error

  return Promise.reject(error)
}

export function createApiClient(options?: CreateAxiosDefaults) {
  const instance = axios.create(options || { baseURL: process.env.EXPO_PUBLIC_API_BASE_URL })

  instance.interceptors.request.use(requestInterceptor)
  instance.interceptors.response.use(responseInterceptor, responseErrorInterceptor)

  return instance
}

export const apiClient = createApiClient()

export * from './shared.types'
export * from './user'
