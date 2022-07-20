import {
  Box,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  Link,
  Stack,
  useColorModeValue,
  VStack,
  Text,
  Button,
  HStack,
  Select,
} from "@chakra-ui/react";

import Confetti from "../../components/Confetti";

import FormConsultar from "../../components/FormConsultar";

export default function ConsultaSaldo() {
  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.100", "gray.800")}
    >
      <Box
        borderRadius="lg"
        m={{ base: 5, md: 16, lg: 10 }}
        p={{ base: 5, lg: 16 }}
      >
        <Box>
          <VStack>
            <Heading
              pt={{ base: 20 }}
              pb={{ base: 4, md: 16, lg: 20 }}
              fontSize={{
                base: "4xl",
                md: "5xl",
              }}
            >
              Consulta de Saldo
            </Heading>
            <FormConsultar />
          </VStack>
        </Box>
      </Box>
    </Flex>
  );
}
