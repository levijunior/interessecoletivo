import { TouchableOpacity } from 'react-native'
import { Heading, HStack, Text, VStack, Icon } from 'native-base'
import { MaterialCommunityIcons } from '@expo/vector-icons'

import { UserPhoto } from './UserPhoto'

export function Header() {
  return (
    <HStack bg="gray.100" pt={8} pb={8} alignItems="center">
      <UserPhoto
        source={{ uri: 'https://github.com/levijunior.png' }}
        size={11}
        alt="Imagem do usuário"
        mr={4}
      />

      <VStack flex={1}>
        <Text color="black" fontSize="lg" fontFamily="500">
          Olá, Levi
        </Text>

        <Text color="gray.800" fontSize="sm" fontWeight={400}>
          Qual seu interesse?
        </Text>
      </VStack>

      <TouchableOpacity>
        <Icon
          as={MaterialCommunityIcons}
          name="bell-outline"
          color="gray.800"
          size={7}
        />
      </TouchableOpacity>
    </HStack>
  )
}
