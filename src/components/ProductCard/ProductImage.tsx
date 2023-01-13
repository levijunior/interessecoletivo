import { AspectRatio, IImageProps, Image } from 'native-base'

type Props = {
  url: string
  imageProps?: IImageProps
}

export function ProductImage({ url, imageProps }: Props) {
  return (
    <AspectRatio w="100%" ratio={4 / 4} bgColor="gray.100">
      <Image
        w="full"
        source={{
          uri: url,
        }}
        alt="Product Image"
        resizeMode="cover"
        roundedTop="lg"
        roundedBottom={0}
        {...imageProps}
      />
    </AspectRatio>
  )
}
