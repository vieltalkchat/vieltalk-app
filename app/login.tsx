import { Box, Text } from '@/components'
import { Trans } from '@lingui/react/macro'

export default function LoginScreen() {
  return (
    <Box className="p-4">
      <Text className="text-2xl font-bold text-blue-400">
        <Trans>Login Screen of Vieltalk Chat</Trans>
      </Text>
    </Box>
  )
}
