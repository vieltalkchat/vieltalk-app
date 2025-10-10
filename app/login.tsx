import { GetStartedBtn } from '@/components/loginScreen/getStartedBtn'
import { LoginHero } from '@/components/loginScreen/loginHero'
import { VStack } from '@/components/ui/vstack'
import { LoginScreenProvider } from '@/contexts/loginScreen'
import { Stack } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function LoginScreen() {
  return (
    <>
      <Stack.Screen options={{ headerTransparent: true, title: '' }} />
      <LoginScreenProvider>
        <SafeAreaView className="flex-1">
          <VStack className="flex-1">
            <LoginHero />
            <GetStartedBtn />
          </VStack>
        </SafeAreaView>
      </LoginScreenProvider>
    </>
  )
}
