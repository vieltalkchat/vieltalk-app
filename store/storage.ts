import { MMKV } from 'react-native-mmkv'
import { parse, stringify } from 'superjson'
import { StateStorage } from 'zustand/middleware'

/**
 * MMKV Instance. The fastest local storage for React Native. Support encryption.
 */
export const localStorage = new MMKV({
  id: 'local-storage',
  // TODO: need add custom encryption key
  encryptionKey: process.env.EXPO_PUBLIC_LOCAL_STORAGE_ENCRYPTION_KEY,
})

/**
 * Zustand storage to store persistance data
 */
export const zustandStorage: StateStorage = {
  getItem: (key: string) => {
    const val = localStorage.getString(key) || null
    if (!val) return null
    return parse(val)
  },
  setItem: (key: string, value: unknown) => localStorage.set(key, stringify(value)),
  removeItem: (key: string) => localStorage.delete(key),
}
