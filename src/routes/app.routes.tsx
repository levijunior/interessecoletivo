import { Platform } from 'react-native'
import { useTheme, Icon } from 'native-base'
import {
  createBottomTabNavigator,
  BottomTabNavigationProp,
} from '@react-navigation/bottom-tabs'

import { MaterialCommunityIcons } from '@expo/vector-icons'

import { Details, Home } from '@screens'
import { StatusBar } from 'expo-status-bar'

type AppRoutes = {
  home: undefined
  details: undefined
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
          name="details"
          component={Details}
          options={{ tabBarButton: () => null }}
        />
      </Navigator>
    </>
  )
}
