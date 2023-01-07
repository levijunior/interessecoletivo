import { useTheme, Box } from 'native-base'
import { NavigationContainer, DefaultTheme } from '@react-navigation/native'

import { AuthRoutes } from './auth.routes'

export function Routes() {
  const { colors } = useTheme()

  const theme = DefaultTheme

  return (
    <Box flex={1} bg="white" safeArea>
      <NavigationContainer theme={theme}>
        <AuthRoutes />
      </NavigationContainer>
    </Box>
  )
}
