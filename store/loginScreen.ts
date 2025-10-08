import { createStore } from 'zustand'

interface LoginScreenState {
  isLoading: boolean
  setIsLoading: (isLoading: boolean) => void
}

export function createLoginScreenStore() {
  return createStore<LoginScreenState>()((set) => ({
    isLoading: false,
    setIsLoading: (isLoading: boolean) => set({ isLoading }),
  }))
}

export type LoginScreenStore = ReturnType<typeof createLoginScreenStore>
