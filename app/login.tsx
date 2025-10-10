import { Box, Button, ButtonText, LoginHero, VStack } from '@/components'
import { LoginScreenProvider } from '@/contexts'
import { Trans } from '@lingui/react/macro'
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
