import {
  Input as NativeBaseInput,
  IInputProps,
  FormControl,
  Icon,
} from 'native-base'
import { MaterialIcons } from '@expo/vector-icons'

type Props = IInputProps & {
  errorMessage?: string | null
  inputIcon?: 'person'
}

export function Input({
  errorMessage = null,
  inputIcon,
  isInvalid,
  ...rest
}: Props) {
  const invalid = !!errorMessage || isInvalid

  return (
    <FormControl isInvalid={invalid} mb={4}>
      <NativeBaseInput
        bg="white"
        h={12}
        px={4}
        borderWidth={1}
        borderColor="gray.600"
        fontSize="md"
        color="black"
        fontFamily="body"
        placeholderTextColor="gray.600"
        isInvalid={invalid}
        _invalid={{
          borderColor: 'red.500',
        }}
        _focus={{
          bgColor: 'white',
          borderColor: 'orange.400',
        }}
        InputLeftElement={
          inputIcon ? (
            <Icon
              as={<MaterialIcons name={inputIcon} />}
              size={5}
              ml="2"
              color="muted.400"
            />
          ) : undefined
        }
        {...rest}
      />

      <FormControl.ErrorMessage _text={{ color: 'red.500' }}>
        {errorMessage}
      </FormControl.ErrorMessage>
    </FormControl>
  )
}
