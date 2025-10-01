import { GluestackUIProvider } from '@/components'
import '@/global.css'
import { Stack } from 'expo-router'
import * as SplashScreen from 'expo-splash-screen'
import { StatusBar } from 'expo-status-bar'
import { useEffect } from 'react'
import 'react-native-reanimated'

SplashScreen.preventAutoHideAsync()

export default function RootLayout() {
  // TODO: handle auth
  const isLoggedIn = false

  useEffect(() => {
    SplashScreen.hide()
  }, [])

  return (
    <GluestackUIProvider mode="light">
      <Stack>
        <Stack.Protected guard={isLoggedIn}>
          <Stack.Screen name="(protected)" />
        </Stack.Protected>
        <Stack.Protected guard={!isLoggedIn}>
          <Stack.Screen name="login" />
        </Stack.Protected>
      </Stack>
      <StatusBar style="auto" />
    </GluestackUIProvider>
  )
}
