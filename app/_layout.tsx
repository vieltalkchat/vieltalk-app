import { GluestackUIProvider } from '@/components'
import '@/global.css'
import { I18nProvider } from '@/locale'
import { useGlobalStore } from '@/store'
import { Stack } from 'expo-router'
import * as SplashScreen from 'expo-splash-screen'
import { StatusBar } from 'expo-status-bar'
import { useEffect } from 'react'
import 'react-native-reanimated'

SplashScreen.preventAutoHideAsync()

export default function RootLayout() {
  const isLoggedIn = useGlobalStore((state) => state.isLoggedIn)

  useEffect(() => {
    SplashScreen.hide()
  }, [])

  return (
    <GluestackUIProvider mode="light">
      <I18nProvider>
        <Stack>
          <Stack.Protected guard={isLoggedIn}>
            <Stack.Screen name="(protected)" />
          </Stack.Protected>
          <Stack.Protected guard={!isLoggedIn}>
            <Stack.Screen name="login" />
          </Stack.Protected>
        </Stack>
      </I18nProvider>
      <StatusBar style="auto" />
    </GluestackUIProvider>
  )
}
