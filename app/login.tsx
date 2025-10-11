import { GetStartedBtn } from '@/components/loginScreen/getStartedBtn'
import { LoginHero } from '@/components/loginScreen/loginHero'
import { PrivacyBottomSheet } from '@/components/loginScreen/privacyBottomSheet'
import { VStack } from '@/components/ui/vstack'
import { LoginScreenProvider } from '@/contexts/loginScreen'
import { Stack } from 'expo-router'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function LoginScreen() {
  return (
    <>
      <Stack.Screen options={{ headerTransparent: true, title: '' }} />
      <LoginScreenProvider>
        <GestureHandlerRootView className="flex-1">
          <SafeAreaView className="flex-1">
            <VStack className="flex-1">
              <LoginHero />
              <GetStartedBtn />
            </VStack>
          </SafeAreaView>
          <PrivacyBottomSheet />
        </GestureHandlerRootView>
      </LoginScreenProvider>
    </>
  )
}
