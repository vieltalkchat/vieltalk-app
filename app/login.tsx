import { LoginScreenProvider } from '@/contexts'
import { Stack } from 'expo-router'

export default function LoginScreen() {
  return (
    <>
      <Stack.Screen options={{ headerTransparent: true }} />
      <LoginScreenProvider></LoginScreenProvider>
    </>
  )
}
