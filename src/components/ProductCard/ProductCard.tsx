import {
  Box,
  AspectRatio,
  Heading,
  Image,
  Text,
  FlatList,
  VStack,
} from 'native-base'

import {
  ActionButtons,
  CategoryBadge,
  ProgressBar,
} from '@components/ProductCard'

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

      <VStack py={5} px={5} rounded="lg" bgColor="white" mt="-10" mx={4}>
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
          mb={4}
        >
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus, ipsa!
          Neque distinctio saepe eos necessitatibus?
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

        <ActionButtons />
      </VStack>
    </Box>
  )
}
