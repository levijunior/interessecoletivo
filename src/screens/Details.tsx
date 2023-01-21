import { useNavigation } from '@react-navigation/native'
import {
  Box,
  Divider,
  FlatList,
  Heading,
  HStack,
  Icon,
  ScrollView,
  Text,
  VStack,
} from 'native-base'

// TODO: think on new folder structure for componet sharing. Sugest: Atomic Des
import { ProductImage } from '@components/ProductCard/ProductImage'
import { AvatarName, CategoryBadge, ProgressBar } from '@components/ProductCard'
import { Header } from '@components/Header'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { DetailsIconButton } from '@components/Button/DetailsIconButton'
import { Tabs } from '@components/Tabs'

export function Details() {
  const navigation = useNavigation()

  return (
    <VStack flex={1}>
      <Box px={4}>
        <Header />
      </Box>
      <ScrollView>
        <Box position="relative">
          <DetailsIconButton
            iconName="chevron-left"
            onPress={() => navigation.goBack()}
          />
          <DetailsIconButton
            iconName="share-variant-outline"
            right={0}
            iconColor="orange.400"
          />
          <ProductImage
            url="https://images.pexels.com/photos/14853728/pexels-photo-14853728.jpeg"
            imageProps={{ roundedTop: 0 }}
          />
        </Box>
        <VStack p={5} rounded="lg" bgColor="white" mt="-10" mx={4} mb={4}>
          <AvatarName />
          <Heading
            fontFamily="heading"
            fontWeight="semibold"
            fontSize="xl"
            mb={2}
          >
            Lorem ipsum dolor sit
          </Heading>
          <Text
            fontSize="sm"
            color="gray.800"
            fontFamily="body"
            bgColor="red"
            mb={4}
          >
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto
            fugit rem itaque, ipsam, amet asperiores dolore delectus tempora,
            sequi expedita quisquam. Culpa ea quas at fugit dignissimos earum
            repellendus asperiores.
          </Text>

          <FlatList
            data={['Bares e restaurantes']}
            keyExtractor={(item) => item}
            renderItem={({ item }) => <CategoryBadge category={item} />}
            horizontal
            showsHorizontalScrollIndicator={false}
            mb={4}
          />

          <ProgressBar />

          <HStack mt={2} alignItems="center">
            <Icon
              as={MaterialCommunityIcons}
              name="clock-outline"
              color="orange.400"
              size={4}
              mr={1}
            />
            <Text fontSize="xs">3 dias restantes</Text>
          </HStack>
        </VStack>

        <VStack p={5} rounded="lg" bgColor="white" mx={4} mb={4}>
          <Heading
            fontFamily="heading"
            fontWeight="semibold"
            fontSize="xl"
            mb={4}
          >
            Detalhes
          </Heading>
          <Divider mb={5} bg="gray.400" />
          <HStack mb={4}>
            <VStack flex={1}>
              <HStack alignItems="center">
                <Icon
                  as={MaterialCommunityIcons}
                  name="calendar-start"
                  color="orange.400"
                  size={4}
                  mr={1}
                />
                <Text fontSize="xs" color="gray.800">
                  Início
                </Text>
              </HStack>
              <Text fontSize="md" fontFamily={500}>
                00/00/000
              </Text>
            </VStack>
            <VStack flex={1}>
              <HStack alignItems="center">
                <Icon
                  as={MaterialCommunityIcons}
                  name="calendar-end"
                  color="orange.400"
                  size={4}
                  mr={1}
                />
                <Text fontSize="xs" color="gray.800">
                  Fim
                </Text>
              </HStack>
              <Text fontSize="md" fontFamily={500}>
                00/00/000
              </Text>
            </VStack>
          </HStack>

          <VStack>
            <HStack alignItems="center">
              <Icon
                as={MaterialCommunityIcons}
                name="map-marker-outline"
                color="orange.400"
                size={5}
                mr={1}
              />
              <Text fontSize="xs" color="gray.800">
                Endereço
              </Text>
            </HStack>
            <Text fontSize={16} fontFamily={500}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </Text>
          </VStack>
        </VStack>

        <VStack p={5} rounded="lg" bgColor="white" mx={4} mb={4}>
          <Tabs />
        </VStack>
      </ScrollView>
    </VStack>
  )
}
