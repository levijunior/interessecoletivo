import { Text, View } from 'react-native'
import { Center, NativeBaseProvider } from 'native-base'

import { THEME } from './src/theme'

import { StatusBar } from 'expo-status-bar'

import { useFonts } from 'expo-font'
import { Lora_500Medium, Lora_600SemiBold } from '@expo-google-fonts/lora'
import { Montserrat_400Regular } from '@expo-google-fonts/montserrat'
import { Routes } from '@routes/index'

export default function App() {
  const [fontsLoaded] = useFonts({
    Lora_500Medium,
    Lora_600SemiBold,
    Montserrat_400Regular,
  })

  if (!fontsLoaded) return <View />

  return (
    <NativeBaseProvider theme={THEME}>
      <StatusBar style="light" translucent backgroundColor="black" />
      <Routes />
    </NativeBaseProvider>
  )
}
