import { Box, Text } from '@/components'
import { Button, ButtonText } from '@/components/ui/button'
import { HStack } from '@/components/ui/hstack'
import { AppLanguage, useGlobalStore } from '@/store'
import { Trans } from '@lingui/react/macro'

export default function LoginScreen() {
  const setPreferredLanguage = useGlobalStore((state) => state.setPreferredLanguage)

  return (
    <Box className="p-4">
      <Text className="text-2xl font-bold text-blue-400">
        <Trans>Login Screen of Vieltalk Chat</Trans>
      </Text>
      <HStack className="mt-4" space="md">
        <Button onPress={() => setPreferredLanguage(AppLanguage.EN)}>
          <ButtonText>English</ButtonText>
        </Button>
        <Button onPress={() => setPreferredLanguage(AppLanguage.KM)}>
          <ButtonText>Khmer</ButtonText>
        </Button>
      </HStack>
    </Box>
  )
}
