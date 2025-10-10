import { Asset } from 'expo-asset'
import { Image } from 'expo-image'
import { Box } from '../ui/box'
import { Heading } from '../ui/heading'
import { Text } from '../ui/text'
import { VStack } from '../ui/vstack'

export function LoginHero() {
  return (
    <>
      <Box className="relative flex-1">
        <Box className="absolute left-1/2 top-1/2 size-[650px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-outline-200"></Box>
        <Box className="absolute left-1/2 top-1/2 size-[450px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-outline-300"></Box>
        <Box className="absolute left-1/2 top-1/2 size-[250px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-dashed border-outline-400">
          <Image
            source={Asset.fromModule(require('@/assets/images/icon.png'))}
            style={{ width: 150, height: 150 }}
            contentFit="contain"
          />
          {/* <Box className="size-20 bg-red-500"></Box> */}
        </Box>
      </Box>
      <VStack className="p-4" space="xs">
        <Heading size="xl" className="text-center">
          Welcome to VielTalk
        </Heading>
        <Text className="text-center text-sm">Built for connection, not collection.</Text>
      </VStack>
    </>
  )
}
