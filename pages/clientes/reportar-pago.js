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
import React from "react";
import { BsPerson } from "react-icons/bs";
import { MdTag } from "react-icons/md";
import Confetti from "../../components/Confetti";

import MenuClientes from "../../components/MenuClientes";

export default function ReportarPago() {
  const finalRef = React.useRef(null);

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
          <VStack spacing={{ base: 4, md: 8, lg: 20 }}>
            <Heading
              fontSize={{
                base: "4xl",
                md: "5xl",
              }}
            >
              Reportar Pago
            </Heading>

            <Stack
              spacing={{ base: 4, md: 8, lg: 20 }}
              direction={{ base: "column", md: "row" }}
            >
              <MenuClientes />
              <Box
                rounded={"lg"}
                bg={useColorModeValue("white", "gray.700")}
                boxShadow={"lg"}
                p={8}
              >
                <Stack spacing={4}>
                  <HStack>
                    <Box>
                      <FormControl id="contrato" isRequired>
                        <FormLabel>Contrato</FormLabel>
                        <InputGroup borderColor="#E0E1E7">
                          <InputLeftElement
                            pointerEvents="none"
                            children={<MdTag color="gray.800" />}
                            ref={finalRef}
                          />
                          <Input type="number" size="md" />
                        </InputGroup>
                      </FormControl>
                    </Box>
                    <Box>
                      <FormControl id="ci_rif" isRequired>
                        <FormLabel htmlFor="ci_rif">Cédula/RIF</FormLabel>
                        <InputGroup borderColor="#E0E1E7">
                          <InputLeftElement
                            pointerEvents="none"
                            children={<BsPerson color="gray.800" />}
                          />
                          <Input type="text" size="md" id="ci_rif" />
                        </InputGroup>
                      </FormControl>
                    </Box>
                  </HStack>

                  <Stack spacing={10} pt={2}>
                    <Button
                      loadingText="Submitting"
                      size="lg"
                      bg={"blue.400"}
                      color={"white"}
                      _hover={{
                        bg: "blue.500",
                      }}
                    >
                      Consultar
                    </Button>
                  </Stack>
                </Stack>
              </Box>
            </Stack>
          </VStack>
        </Box>
      </Box>
    </Flex>
  );
}
