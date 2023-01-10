import { MaterialCommunityIcons } from '@expo/vector-icons'
import { HStack, Box, IconButton } from 'native-base'
import { Button } from '@components/Button'

export function ActionButtons() {
  return (
    <HStack mt={6}>
      <Box flex={1}>
        <Button title="Saber mais" />
      </Box>
      <IconButton
        _icon={{
          as: MaterialCommunityIcons,
          name: 'plus-thick',
          color: 'orange.400',
        }}
        variant="outline"
        onPress={() => null}
        borderWidth={2}
        borderColor="orange.400"
        w={12}
        ml={3}
      />
    </HStack>
  )
}
