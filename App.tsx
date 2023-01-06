import { StatusBar } from 'expo-status-bar'
import { Text, View } from 'react-native'

import { useFonts } from 'expo-font'
import { Lora_500Medium } from '@expo-google-fonts/lora'
import { Montserrat_400Regular } from '@expo-google-fonts/montserrat'

export default function App() {
  const [fontsLoaded] = useFonts({ Lora_500Medium, Montserrat_400Regular })

  if (!fontsLoaded) return <View />

  return (
    <View>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  )
}
