// 1. import `extendTheme` function
import { extendTheme } from "@chakra-ui/react";

// 2. Add your color mode config
const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
  color: {
    primary: {
      500: "#e95c0a",
    },
    secondary: {
      500: "#032d67",
    },
  },
};

// 3. extend the theme
const theme = extendTheme({ config });

export default theme;
