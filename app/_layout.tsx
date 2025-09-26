import { GluestackUIProvider } from '@/components'
import '@/global.css'
import { ROUTES, ScreenType } from '@/lib/routes'
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

  const { protectedRoutes, publicRoutes } = ROUTES.reduce<{
    protectedRoutes: ScreenType[]
    publicRoutes: ScreenType[]
  }>(
    (p, c) => {
      const { isProtected, ...rest } = c
      if (isProtected) {
        p.protectedRoutes.push(rest)
      } else {
        p.publicRoutes.push(rest)
      }
      return p
    },
    { protectedRoutes: [], publicRoutes: [] },
  )

  return (
    <GluestackUIProvider mode="light">
      <Stack>
        <Stack.Protected guard={isLoggedIn}>
          {protectedRoutes.map((route, i) => (
            <Stack.Screen key={i} {...route} />
          ))}
        </Stack.Protected>
        {publicRoutes.map((route, i) => (
          <Stack.Screen key={i} {...route} />
        ))}
      </Stack>
      <StatusBar style="auto" />
    </GluestackUIProvider>
  )
}
