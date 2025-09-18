import { GluestackUIProvider } from '@/components'
import '@/global.css'
import { Stack } from 'expo-router'
import * as SplashScreen from 'expo-splash-screen'
import { StatusBar } from 'expo-status-bar'
import { useEffect } from 'react'
import 'react-native-reanimated'

SplashScreen.preventAutoHideAsync()

export default function RootLayout() {
  useEffect(() => {
    SplashScreen.hide()
  }, [])

  return (
    <GluestackUIProvider mode="light">
      <Stack>
        <Stack.Screen name="homeScreen" options={{ title: 'Home' }} />
      </Stack>
      <StatusBar style="auto" />
    </GluestackUIProvider>
  )
}
