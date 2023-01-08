import { useNavigation } from '@react-navigation/native'
import {
  VStack,
  Image,
  Heading,
  ScrollView,
  Box,
  Text,
  Center,
} from 'native-base'

import { AuthNavigatorRoutesProps } from '@routes/auth.routes'

import CoverImg from '@assets/signin-cover-photo.png'
import { Input } from '@components/Input'
import { Button } from '@components/Button'

export function SignIn() {
  const navigation = useNavigation<AuthNavigatorRoutesProps>()

  return (
    <Box flex={1}>
      <VStack flex={1} bgColor="white">
        <ScrollView>
          <Image
            w="full"
            h={72}
            source={CoverImg}
            alt="Nome do exercício"
            mb={3}
            resizeMode="cover"
          />
          <Box rounded={10} mt="-10" py={5} px={8} bgColor="white">
            <Center mb={8}>
              <Heading
                fontFamily="heading"
                fontWeight="semibold"
                fontSize="3xl"
                mt="4"
              >
                Interesse Coletivo
              </Heading>
              <Text color="black" fontWeight={300} fontSize="sm" mt={1}>
                Lorem ipsum dolor sit amet
              </Text>
            </Center>

            <Input
              placeholder="E-mail"
              keyboardType="email-address"
              autoCapitalize="none"
              inputIcon="mail"
            />
            <Input placeholder="Senha" hasShowPassword />

            <Button title="Acessar" mt={1} />

            <Center mt={24}>
              <Text color="black" fontSize="sm" mb={3} fontFamily="body">
                Ainda não tem acesso?
              </Text>

              <Button
                title="Criar Conta"
                variant="outline"
                onPress={() => navigation.navigate('signUp')}
              />
            </Center>
          </Box>
        </ScrollView>
      </VStack>
    </Box>
  )
}
