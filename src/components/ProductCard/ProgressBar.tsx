import { HStack, Progress, Text } from 'native-base'

export function ProgressBar() {
  return (
    <>
      <HStack justifyContent="space-between">
        <Text fontWeight="bold" color="gray.800">
          755 interessados
        </Text>
        <Text>75,5%</Text>
      </HStack>
      <Progress
        _filledTrack={{
          bg: 'green.500',
        }}
        value={75.5}
        mt="1"
      />
    </>
  )
}
