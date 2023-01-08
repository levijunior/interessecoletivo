import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack'

import { SignIn, SignUp } from '@screens'
import { StatusBar } from 'expo-status-bar'

type AuthRoutes = {
  signIn: undefined
  signUp: undefined
}

export type AuthNavigatorRoutesProps = NativeStackNavigationProp<AuthRoutes>

const { Navigator, Screen } = createNativeStackNavigator<AuthRoutes>()

export function AuthRoutes() {
  return (
    <>
      <StatusBar style="light" translucent backgroundColor="black" />
      <Navigator screenOptions={{ headerShown: false }}>
        <Screen name="signIn" component={SignIn} />
        <Screen name="signUp" component={SignUp} />
      </Navigator>
    </>
  )
}
