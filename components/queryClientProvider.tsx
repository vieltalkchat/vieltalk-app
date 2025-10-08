import {
  QueryClientProvider as DefaultQueryClientProvider,
  focusManager,
  onlineManager,
  QueryClient,
} from '@tanstack/react-query'
import * as Network from 'expo-network'
import { useEffect } from 'react'
import { AppState, AppStateStatus, Platform } from 'react-native'

onlineManager.setEventListener((setOnline) => {
  const eventSubscription = Network.addNetworkStateListener((state) => {
    setOnline(!!state.isConnected)
  })
  return eventSubscription.remove
})

function onAppStateChange(status: AppStateStatus) {
  if (Platform.OS !== 'web') {
    focusManager.setFocused(status === 'active')
  }
}

const queryClient = new QueryClient()

export function QueryClientProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const subscription = AppState.addEventListener('change', onAppStateChange)

    return () => subscription.remove()
  }, [])

  return <DefaultQueryClientProvider client={queryClient}>{children}</DefaultQueryClientProvider>
}
