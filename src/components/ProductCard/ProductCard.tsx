import { Box, Heading, Text, FlatList, VStack, Icon, HStack } from 'native-base'
import { MaterialCommunityIcons } from '@expo/vector-icons'

import { ActionButtons } from './ActionButtons'
import { AvatarName } from './AvatarName'
import { CategoryBadge } from './CategoryBadge'
import { ProductImage } from './ProductImage'
import { ProgressBar } from './ProgressBar'

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
      <ProductImage url={data.url} />

      <VStack py={5} px={5} rounded="lg" bgColor="white" mt="-10" mx={4}>
        <AvatarName />

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

        <ActionButtons />
      </VStack>
    </Box>
  )
}
