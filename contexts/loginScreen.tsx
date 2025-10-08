import { LoginScreenStore, createLoginScreenStore } from '@/store'
import { createContext, useContext, useRef } from 'react'

interface LoginScreenContextValue {
  stateStore: LoginScreenStore
}

const LoginScreenContext = createContext<LoginScreenContextValue | undefined>(undefined)

export function LoginScreenProvider({ children }: { children?: React.ReactNode }) {
  const store = useRef(createLoginScreenStore()).current

  return <LoginScreenContext value={{ stateStore: store }}>{children}</LoginScreenContext>
}

export function useLoginScreenContext() {
  const context = useContext(LoginScreenContext)

  if (!context) {
    throw new Error('useLoginScreenContext must be used within a LoginScreenProvider')
  }

  return context
}
