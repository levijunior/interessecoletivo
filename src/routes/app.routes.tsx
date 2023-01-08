import { Platform } from 'react-native'
import { useTheme, Icon } from 'native-base'
import {
  createBottomTabNavigator,
  BottomTabNavigationProp,
} from '@react-navigation/bottom-tabs'

import { MaterialCommunityIcons } from '@expo/vector-icons'

import { Home } from '@screens/Home'
import { Profile } from '@screens/Profile'
import { StatusBar } from 'expo-status-bar'

type AppRoutes = {
  home: undefined
  exercise: undefined
  profile: undefined
  history: undefined
}

export type AppNavigatorRoutesProps = BottomTabNavigationProp<AppRoutes>

const { Navigator, Screen } = createBottomTabNavigator<AppRoutes>()

export function AppRoutes() {
  const { sizes, colors } = useTheme()

  const iconSize = 7

  return (
    <>
      <StatusBar style="dark" translucent backgroundColor={colors.gray[100]} />
      <Navigator
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarActiveTintColor: colors.orange[400],
          tabBarInactiveTintColor: colors.gray[800],
          tabBarStyle: {
            backgroundColor: 'white',
            borderTopWidth: 0,
            height: Platform.OS === 'android' ? 'auto' : 96,
            paddingBottom: sizes[6],
            paddingTop: sizes[6],
          },
        }}
      >
        <Screen
          name="home"
          component={Home}
          options={{
            tabBarIcon: ({ color, focused }) => (
              <Icon
                as={MaterialCommunityIcons}
                name={focused ? 'home' : 'home-outline'}
                color={color}
                size={iconSize}
              />
            ),
          }}
        />

        <Screen
          name="profile"
          component={Profile}
          options={{
            tabBarIcon: ({ color, focused }) => (
              <Icon
                as={MaterialCommunityIcons}
                name={focused ? 'account' : 'account-outline'}
                color={color}
                size={iconSize}
              />
            ),
          }}
        />
      </Navigator>
    </>
  )
}
