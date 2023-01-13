import { useNavigation } from '@react-navigation/native'
import { Box, IconButton, Pressable, VStack } from 'native-base'
import { ProductImage } from '@components/ProductCard/ProductImage'
import { AvatarName } from '@components/ProductCard'
import { Header } from '@components/Header'
import { MaterialCommunityIcons } from '@expo/vector-icons'

export function Details() {
  const navigation = useNavigation()

  return (
    <VStack flex={1}>
      <Box px={4}>
        <Header />
      </Box>
      <Box position="relative">
        <Pressable
          m={4}
          position="absolute"
          zIndex={1}
          opacity={0.8}
          onPress={() => navigation.goBack()}
          size={12}
          bgColor="white"
          rounded="full"
        >
          <IconButton
            _icon={{
              as: MaterialCommunityIcons,
              name: 'chevron-left',
              size: 8,
              color: 'black',
            }}
            size={12}
          />
        </Pressable>
        <ProductImage
          url="https://images.pexels.com/photos/14853728/pexels-photo-14853728.jpeg"
          imageProps={{ roundedTop: 0 }}
        />
      </Box>
      <VStack py={5} px={5} rounded="lg" bgColor="white" mt="-10" mx={4}>
        <AvatarName />
      </VStack>
    </VStack>
  )
}
