import { Trans } from '@lingui/react/macro'
import { Box } from '../ui/box'
import { Button, ButtonText } from '../ui/button'

export function GetStartedBtn() {
  return (
    <Box className="p-4">
      <Button size="xl">
        <ButtonText>
          <Trans>Get Started</Trans>
        </ButtonText>
      </Button>
    </Box>
  )
}
