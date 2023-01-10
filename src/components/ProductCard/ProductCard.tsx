import {
  Box,
  AspectRatio,
  Center,
  Heading,
  HStack,
  Divider,
  Image,
  Text,
  FlatList,
  Badge,
  Pressable,
} from 'native-base'
import { TouchableOpacity } from 'react-native'
import { CategoryBadge } from './CategoryBadge'

// TODO: BE dependency: type for product data
export function ProductCard({ data }: { data: any }) {
  return (
    <Box
      bgColor="white"
      p={3}
      rounded="lg"
      borderWidth={1}
      borderColor="gray.400"
      mb={8}
    >
      <AspectRatio w="100%" ratio={4 / 4}>
        <Image
          w="full"
          source={{
            uri: data.url,
          }}
          alt="Product Image"
          resizeMode="cover"
          roundedTop="lg"
          roundedBottom={0}
        />
      </AspectRatio>
      <Box py={5} px={5} rounded="lg" bgColor="white" mt="-10" mx={4}>
        <Box mb={4}>
          <Heading
            fontFamily="heading"
            fontWeight="semibold"
            fontSize="xl"
            numberOfLines={2}
            mb={2}
          >
            Lorem ipsum dolor sit
          </Heading>
          <Text
            fontSize="sm"
            color="gray.800"
            fontFamily="body"
            numberOfLines={3}
            bgColor="red"
          >
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          </Text>
        </Box>
        <FlatList
          data={['Bares e restaurantes']}
          keyExtractor={(item) => item}
          renderItem={({ item }) => <CategoryBadge category={item} />}
          horizontal
          showsHorizontalScrollIndicator={false}
          mb={4}
        />
        <HStack>
          <Text>1,3k Likes</Text>
          <Divider bg="gray.800" thickness="1" mx="4" orientation="vertical" />
          <Text>5k meta</Text>
        </HStack>
      </Box>
    </Box>
  )
}
