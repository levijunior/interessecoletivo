import { Box } from 'native-base'
import { NavigationContainer, DefaultTheme } from '@react-navigation/native'

import { AuthRoutes } from './auth.routes'

export function Routes() {
  const theme = DefaultTheme

  return (
    <Box flex={1} bgColor="white" safeArea>
      <NavigationContainer theme={theme}>
        <AuthRoutes />
      </NavigationContainer>
    </Box>
  )
}
