import { useState } from 'react'
import {
  Input as NativeBaseInput,
  IInputProps,
  FormControl,
  Icon,
  Pressable,
} from 'native-base'
import { MaterialIcons } from '@expo/vector-icons'

type Props = IInputProps & {
  errorMessage?: string | null
  inputIcon?: 'mail' | 'person' | 'lock'
  hasShowPassword?: boolean
}

export function Input({
  errorMessage = null,
  inputIcon,
  isInvalid,
  hasShowPassword,
  ...rest
}: Props) {
  const [show, setShow] = useState(false)
  const invalid = !!errorMessage || isInvalid
  return (
    <FormControl isInvalid={invalid} mb={4}>
      <NativeBaseInput
        bg="white"
        h={12}
        px={3}
        borderWidth={1}
        borderColor="gray.600"
        fontSize="md"
        color="black"
        fontFamily="body"
        placeholderTextColor="gray.600"
        isInvalid={invalid}
        type={show ? 'text' : 'password'}
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
              as={<MaterialIcons name={`${inputIcon}-outline`} />}
              size={5}
              ml={3}
              color="muted.400"
            />
          ) : undefined
        }
        InputRightElement={
          hasShowPassword ? (
            <Pressable onPress={() => setShow(!show)}>
              <Icon
                as={
                  <MaterialIcons
                    name={show ? 'visibility' : 'visibility-off'}
                  />
                }
                size={5}
                mr={3}
                color="muted.400"
              />
            </Pressable>
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
