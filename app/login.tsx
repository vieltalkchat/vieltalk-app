import { Box, Button, ButtonText, VStack } from '@/components'
import { LoginScreenProvider } from '@/contexts'
import { Trans } from '@lingui/react/macro'
import { Stack } from 'expo-router'
import Animated from 'react-native-reanimated'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function LoginScreen() {
  return (
    <>
      <Stack.Screen options={{ headerTransparent: true, title: '' }} />
      <LoginScreenProvider>
        <SafeAreaView className="flex-1">
          <VStack className="flex-1">
            <Box className="relative flex-1">
              <Animated.View className="size-10 bg-primary-400"></Animated.View>
            </Box>
            <Box className="p-4">
              <Button size="xl">
                <ButtonText>
                  <Trans>Get Started</Trans>
                </ButtonText>
              </Button>
            </Box>
          </VStack>
        </SafeAreaView>
      </LoginScreenProvider>
    </>
  )
}
