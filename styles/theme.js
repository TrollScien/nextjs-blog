// 1. import `extendTheme` function
import { extendTheme } from "@chakra-ui/react";

// 2. Add your color mode config
const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
  color: {
    brand: {
      400: "#e95c0a",
    },
  },
};

// 3. extend the theme
const theme = extendTheme({ config });

export default theme;
