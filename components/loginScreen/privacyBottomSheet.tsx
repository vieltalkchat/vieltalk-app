import { useLoginScreenContext } from '@/contexts/loginScreen'
import { BottomSheetFooter, BottomSheetModal, BottomSheetModalProvider, BottomSheetView } from '@gorhom/bottom-sheet'
import { Bell, Eye, Shield, Users } from 'lucide-react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { Box } from '../ui/box'
import { Button, ButtonText } from '../ui/button'
import { Card } from '../ui/card'
import { Heading } from '../ui/heading'
import { HStack } from '../ui/hstack'
import { Icon } from '../ui/icon'
import { Text } from '../ui/text'
import { VStack } from '../ui/vstack'

export function PrivacyBottomSheet() {
  const { privacyBottomSheetRef } = useLoginScreenContext()
  const safeAreaInsets = useSafeAreaInsets()

  return (
    <BottomSheetModalProvider>
      <BottomSheetModal
        ref={privacyBottomSheetRef}
        enableDynamicSizing={false}
        snapPoints={['70%']}
        footerComponent={(props) => (
          <BottomSheetFooter {...props} bottomInset={safeAreaInsets.bottom}>
            <Box className="p-4">
              <Button size="xl" onPress={() => privacyBottomSheetRef.current?.close()}>
                <ButtonText>Accept and Continue</ButtonText>
              </Button>
            </Box>
          </BottomSheetFooter>
        )}
      >
        <BottomSheetView>
          <VStack className="px-4">
            <Heading className="text-center">Privacy & Permissions</Heading>
            <Text className="text-center">Your privacy matters. Choose what you share.</Text>
            <VStack className="mt-4" space="lg">
              <Card variant="outline">
                <HStack space="lg" className="items-start">
                  <Box className="rounded-full bg-primary-100 p-4">
                    <Icon as={Shield} className="text-primary-400" size="xl" />
                  </Box>
                  <VStack className="items-start">
                    <Heading size="sm">Essential Functionality</Heading>
                    <Text size="sm">Choose what you share.</Text>
                    <Button variant="link">
                      <ButtonText>Learn More</ButtonText>
                    </Button>
                  </VStack>
                </HStack>
              </Card>
              <Card variant="outline">
                <HStack space="lg" className="items-start">
                  <Box className="rounded-full bg-background-100 p-4">
                    <Icon as={Eye} size="xl" />
                  </Box>
                  <VStack className="items-start">
                    <Heading size="sm">Lorem ipsum</Heading>
                    <Text size="sm">Lorem ipsum dolor sit amet.</Text>
                    <Button variant="link">
                      <ButtonText>Learn More</ButtonText>
                    </Button>
                  </VStack>
                </HStack>
              </Card>
              <Card variant="outline">
                <HStack space="lg" className="items-start">
                  <Box className="rounded-full bg-background-100 p-4">
                    <Icon as={Bell} size="xl" />
                  </Box>
                  <VStack className="items-start">
                    <Heading size="sm">Lorem ipsum</Heading>
                    <Text size="sm">Lorem ipsum dolor sit amet.</Text>
                    <Button variant="link">
                      <ButtonText>Learn More</ButtonText>
                    </Button>
                  </VStack>
                </HStack>
              </Card>
              <Card variant="outline">
                <HStack space="lg" className="items-start">
                  <Box className="rounded-full bg-background-100 p-4">
                    <Icon as={Users} size="xl" />
                  </Box>
                  <VStack className="items-start">
                    <Heading size="sm">Lorem ipsum</Heading>
                    <Text size="sm">Lorem ipsum dolor sit amet.</Text>
                    <Button variant="link">
                      <ButtonText>Learn More</ButtonText>
                    </Button>
                  </VStack>
                </HStack>
              </Card>
            </VStack>
          </VStack>
        </BottomSheetView>
      </BottomSheetModal>
    </BottomSheetModalProvider>
  )
}
