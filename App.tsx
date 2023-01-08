import { View } from 'react-native'
import { NativeBaseProvider } from 'native-base'

import { THEME } from './src/theme'

import { useFonts } from 'expo-font'
import { Lora_500Medium, Lora_600SemiBold } from '@expo-google-fonts/lora'
import {
  Montserrat_400Regular,
  Montserrat_500Medium,
} from '@expo-google-fonts/montserrat'
import { Routes } from '@routes/index'

export default function App() {
  const [fontsLoaded] = useFonts({
    Lora_500Medium,
    Lora_600SemiBold,
    Montserrat_400Regular,
    Montserrat_500Medium,
  })

  if (!fontsLoaded) return <View />

  return (
    <NativeBaseProvider theme={THEME}>
      <Routes />
    </NativeBaseProvider>
  )
}
