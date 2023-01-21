import { Button as ButtonNativeBase, IButtonProps, Text } from 'native-base'

type Props = IButtonProps & {
  title: string
  variant?: 'solid' | 'outline'
  isFull?: boolean
}

export function Button({ title, variant = 'solid', isFull, ...rest }: Props) {
  return (
    <ButtonNativeBase
      w={isFull ? 'full' : undefined}
      h={12}
      bg={variant === 'outline' ? 'transparent' : 'orange.400'}
      borderWidth={2}
      borderColor="orange.400"
      rounded="sm"
      _pressed={{
        bg: variant === 'outline' ? 'white' : 'orange.100',
        opacity: variant === 'outline' ? 70 : 100,
      }}
      {...rest}
    >
      <Text
        color={variant === 'outline' ? 'orange.400' : 'white'}
        fontFamily="body"
        fontWeight="500"
        fontSize="md"
      >
        {title}
      </Text>
    </ButtonNativeBase>
  )
}
