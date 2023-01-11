import { HStack, Text } from 'native-base'
import { UserPhoto } from '@components/Header'

export function AvatarName() {
  return (
    <HStack mb={3} alignItems="center">
      <UserPhoto
        source={{
          uri: 'https://img.freepik.com/premium-vector/restaurant-logo-design-template_79169-56.jpg',
        }}
        size={10}
        alt="Imagem do usuário"
        mr={2}
      />
      <Text
        fontSize="xs"
        fontFamily={500}
        color="gray.800"
        numberOfLines={2}
        lineHeight="xs"
      >
        Kitchen Cafe & Resto
      </Text>
    </HStack>
  )
}
