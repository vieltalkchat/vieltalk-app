import { useLoginScreenContext } from '@/contexts/loginScreen'
import { Trans } from '@lingui/react/macro'
import { Box } from '../ui/box'
import { Button, ButtonText } from '../ui/button'

export function GetStartedBtn() {
  const { onGetStartedPress } = useLoginScreenContext()
  return (
    <Box className="p-4">
      <Button size="xl" onPress={onGetStartedPress}>
        <ButtonText>
          <Trans>Get Started</Trans>
        </ButtonText>
      </Button>
    </Box>
  )
}
