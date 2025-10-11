import { Box } from '@/components/ui/box'
import { Text } from '@/components/ui/text'
import { Trans } from '@lingui/react/macro'

export default function HomeScreen() {
  return (
    <Box className="p-4">
      <Text className="text-2xl font-bold text-blue-400">
        <Trans>Home Screen of Vieltalk Chat</Trans>
      </Text>
    </Box>
  )
}
