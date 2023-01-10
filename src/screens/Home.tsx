import { Header } from '@components/Header'
import { ProductCard } from '@components/ProductCard'
import { Center, FlatList, Icon, Text, VStack } from 'native-base'
import { MaterialCommunityIcons } from '@expo/vector-icons'

const MOCK_DATA = [
  {
    url: 'https://images.pexels.com/photos/14853728/pexels-photo-14853728.jpeg',
  },
  {
    url: 'https://images.pexels.com/photos/3892469/pexels-photo-3892469.jpeg',
  },
  {
    url: 'https://images.pexels.com/photos/2955819/pexels-photo-2955819.jpeg',
  },
]

export function Home() {
  return (
    <VStack flex={1} px={4}>
      <Header />

      <FlatList
        data={MOCK_DATA}
        keyExtractor={(item) => item.url}
        renderItem={({ item }) => <ProductCard data={item} />}
        showsVerticalScrollIndicator={false}
        _contentContainerStyle={{
          paddingBottom: 20,
        }}
        ListFooterComponent={() => (
          <Center pt={9}>
            <Icon
              as={MaterialCommunityIcons}
              name="check-all"
              color="gray.700"
              size={8}
              mb={2}
            />
            <Text>Todas as publicações foram visualizadas</Text>
          </Center>
        )}
      />
    </VStack>
  )
}
