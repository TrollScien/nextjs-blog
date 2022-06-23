import "../styles/global.css";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "../styles/theme";
import { DarkModeSwitch } from "../components/DarkModeSwitch";
export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
      {/* <DarkModeSwitch /> */}
    </ChakraProvider>
  );
}
