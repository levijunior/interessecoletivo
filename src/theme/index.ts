import { extendTheme } from 'native-base'

export const THEME = extendTheme({
  colors: {
    white: '#FFF',
    gray: {
      100: '#F2F3F4',
      400: '#E1E2E3',
      600: '#B3B4BA',
      800: '#636773',
    },
    black: '#000',
    orange: {
      100: '#FFB945',
      400: '#FF8527',
    },
    blue: {
      100: '#85CAE4',
      400: '#009EBA',
      800: '#003046',
    },
    green: {
      550: '#329F5B',
      650: '#0C8346',
    },
  },
  fonts: {
    heading: 'Lora_600SemiBold',
    body: 'Montserrat_400Regular',
    500: 'Montserrat_500Medium',
  },
  sizes: {
    11: 44,
    25: 100,
    30: 120,
  },
  fontSizes: {},
})
