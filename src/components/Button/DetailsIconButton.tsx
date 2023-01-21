import { IconButton, IIconButtonProps } from 'native-base'
import { MaterialCommunityIcons } from '@expo/vector-icons'

type Props = IIconButtonProps & {
  iconName: string
  iconColor?: string
  onPress?: () => void
}

export function DetailsIconButton({
  iconName,
  onPress,
  iconColor = 'black',
  ...rest
}: Props) {
  return (
    <IconButton
      onPress={onPress}
      _icon={{
        as: MaterialCommunityIcons,
        name: iconName,
        size: 8,
        color: iconColor,
      }}
      size={12}
      m={4}
      position="absolute"
      zIndex={1}
      bgColor="white"
      rounded="full"
      opacity={90}
      shadow={0}
      _pressed={{ opacity: 100 }}
      {...rest}
    />
  )
}
