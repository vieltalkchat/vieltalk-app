import axios, { AxiosResponse, CreateAxiosDefaults, InternalAxiosRequestConfig } from 'axios'
import Aes from 'react-native-aes-crypto'
import AesGcmCrypto from 'react-native-aes-gcm-crypto'
import { RSA } from 'react-native-rsa-native'

async function requestInterceptor(config: InternalAxiosRequestConfig) {
  // TODO: encrypt request data
  // TODO: add token to request headers

  const body = config.data

  if (body) {
    const key = await Aes.randomKey(32)

    const encrypted = await AesGcmCrypto.encrypt(JSON.stringify(body), true, key)

    config.data = {
      data: encrypted.content,
      key: await RSA.encrypt(key, process.env.EXPO_PUBLIC_API_PUBLIC_KEY || ''),
      iv: await RSA.encrypt(encrypted.iv, process.env.EXPO_PUBLIC_API_PUBLIC_KEY || ''),
      tag: await RSA.encrypt(encrypted.tag, process.env.EXPO_PUBLIC_API_PUBLIC_KEY || ''),
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
