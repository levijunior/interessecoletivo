import { Badge, Pressable, Text } from 'native-base'

// TODO: BE dependency: type for category
export function CategoryBadge({ category }: { category: any }) {
  return (
    <Pressable key={category} mr={3}>
      <Badge
        variant="solid"
        alignSelf="center"
        rounded="full"
        py={1}
        px={3}
        bgColor="blue.400"
      >
        <Text color="white" fontSize="xs" fontFamily={500}>
          {category}
        </Text>
      </Badge>
    </Pressable>
  )
}
