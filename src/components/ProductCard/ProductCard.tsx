import {
  Box,
  AspectRatio,
  Center,
  Heading,
  HStack,
  Divider,
  Image,
  Text,
} from 'native-base'

// TODO: type for product data
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
      <Box py={5} px={3} rounded="lg" bgColor="white" mt="-10" mx={4}>
        <Center mb={5}>
          <Heading
            fontFamily="heading"
            fontWeight="semibold"
            fontSize="xl"
            numberOfLines={2}
            mb={3}
            textAlign="center"
          >
            Lorem ipsum dolor sit
          </Heading>
          <Text
            textAlign="center"
            fontSize="md"
            color="gray.800"
            fontFamily="body"
            numberOfLines={3}
            bgColor="red"
          >
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          </Text>
        </Center>
        <HStack justifyContent="center">
          <Text>1,3k Likes</Text>
          <Divider bg="gray.800" thickness="1" mx="4" orientation="vertical" />
          <Text>5k meta</Text>
        </HStack>
      </Box>
    </Box>
  )
}
