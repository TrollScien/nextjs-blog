import { Box, Center, Heading } from "@chakra-ui/react";
import Pricing from "../components/Pricing";
import Features from "../components/Features";

export default function Planes() {
  return (
    <Box pt={100}>
      <Pricing />
      <Box>
        <Center>
          <Heading>
            Aquí podría haber descripciones de los planes, de cada tipo
          </Heading>
        </Center>
      </Box>
      <Features />
    </Box>
  );
}
