import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
  colors: {
    // gray: {
    //   "900": "#181B23",
    //   "800": "#1F2029",
    //   "700": "#353646",
    //   "600": "#4B4d63",
    //   "500": "#616480",
    //   "400": "#797d9a",
    //   "300": "#9699b0",
    //   "200": "#b3b5c6",
    //   "100": "#d1d2dc",
    //   "50": "#EEEEF2",
    // }
    blue: {
      "900": "#01497C",
      "700": "#014F86"
    }
  },
  fonts: {
    body: 'Roboto',
    heading: 'Poppins',
    mono: 'Roboto',
  },
  styles: {
    global: {
      body: {
        background: 'blue.900',
        color: 'gray.50',
      },
    }
  }
})