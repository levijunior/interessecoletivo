import { useNavigation } from '@react-navigation/native'
import { Box, IconButton, Pressable, VStack } from 'native-base'
import { ProductImage } from '@components/ProductCard/ProductImage'
import { AvatarName } from '@components/ProductCard'
import { Header } from '@components/Header'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { AppNavigatorRoutesProps } from '@routes/app.routes'
import { Button } from '@components/Button'

export function Details() {
  const navigation = useNavigation()

  return (
    <VStack flex={1}>
      <Box px={4}>
        <Header />
      </Box>
      <Box position="relative">
        <IconButton
          onPress={() => navigation.goBack()}
          _icon={{
            as: MaterialCommunityIcons,
            name: 'chevron-left',
            size: 8,
            color: 'black',
          }}
          size={12}
          m={4}
          position="absolute"
          zIndex={1}
          bgColor="white"
          rounded="full"
          opacity={0.75}
          _pressed={{ opacity: 1 }}
        />
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
