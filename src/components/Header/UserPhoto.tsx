import { IImageProps, Avatar } from 'native-base'

type Props = IImageProps & {
  size: number
}

export function UserPhoto({ size, ...rest }: Props) {
  return (
    <Avatar
      w={size}
      h={size}
      rounded="full"
      borderWidth={1}
      borderColor="gray.400"
      {...rest}
    />
  )
}
