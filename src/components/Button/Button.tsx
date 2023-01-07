import { Button as ButtonNativeBase, IButtonProps, Text } from 'native-base'

type Props = IButtonProps & {
  title: string
  variant?: 'solid' | 'outline'
}

export function Button({ title, variant = 'solid', ...rest }: Props) {
  return (
    <ButtonNativeBase
      w="full"
      h={12}
      bg={variant === 'outline' ? 'transparent' : 'orange.400'}
      borderWidth={variant === 'outline' ? 2 : 0}
      borderColor="orange.400"
      rounded="sm"
      _pressed={{
        bg: variant === 'outline' ? 'white' : 'orange.100',
        opacity: variant === 'outline' ? '0.7' : '1',
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
