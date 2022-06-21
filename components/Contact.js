import {
  Container,
  Flex,
  Box,
  Heading,
  Text,
  IconButton,
  Button,
  VStack,
  HStack,
  Stack,
  Wrap,
  WrapItem,
  FormControl,
  FormLabel,
  Input,
  Select,
  InputGroup,
  InputLeftElement,
  Textarea,
  useColorModeValue,
} from "@chakra-ui/react";

import {
  MdPhone,
  MdEmail,
  MdLocationOn,
  MdFacebook,
  MdOutlineEmail,
} from "react-icons/md";

import {
  BsWhatsapp,
  BsInstagram,
  BsPerson,
  BsTelephone,
  BsMailbox,
} from "react-icons/bs";

export default function Contact() {
  return (
    <Container maxW="full" mt={0} centerContent overflow="hidden">
      <Flex>
        <Box
          borderRadius="lg"
          shadow="md"
          borderWidth="5px"
          m={{ sm: 4, md: 16, lg: 10 }}
          p={{ sm: 5, md: 5, lg: 16 }}
        >
          <Box p={4}>
            <Wrap spacing={{ base: 20, sm: 3, md: 5, lg: 20 }}>
              <WrapItem alignItems={"center"}>
                <Box>
                  <Heading>Contáctanos</Heading>
                  <Text mt={{ sm: 3, md: 3, lg: 5 }}>
                    Rellene el siguiente formulario para ponerse en contacto
                  </Text>
                  <Box py={{ base: 5, sm: 5, md: 8, lg: 10 }}>
                    <VStack pl={0} spacing={3} alignItems="flex-start">
                      <Button
                        size="md"
                        height="48px"
                        width="200px"
                        variant="ghost"
                        _hover={{ border: "2px solid #1C6FEB" }}
                        leftIcon={<MdPhone color="#1970F1" size="20px" />}
                      >
                        +91-98888888888
                      </Button>
                      <Button
                        size="md"
                        height="48px"
                        width="200px"
                        variant="ghost"
                        _hover={{ border: "2px solid #1C6FEB" }}
                        leftIcon={<MdEmail color="#1970F1" size="20px" />}
                      >
                        hello@correo.com
                      </Button>
                      <Button
                        size="md"
                        height="48px"
                        width="200px"
                        variant="ghost"
                        _hover={{ border: "2px solid #1C6FEB" }}
                        leftIcon={<MdLocationOn color="#1970F1" size="20px" />}
                      >
                        Yaracuy, Venezuela
                      </Button>
                    </VStack>
                  </Box>
                  <HStack
                    mt={{ lg: 10, md: 10 }}
                    spacing={5}
                    px={5}
                    alignItems="flex-start"
                  >
                    <IconButton
                      aria-label="facebook"
                      variant="ghost"
                      size="lg"
                      isRound={true}
                      _hover={{ bg: "#0D74FF" }}
                      icon={<MdFacebook size="28px" />}
                    />
                    <IconButton
                      aria-label="github"
                      variant="ghost"
                      size="lg"
                      isRound={true}
                      _hover={{ bg: "#0D74FF" }}
                      icon={<BsWhatsapp size="28px" />}
                    />
                    <IconButton
                      aria-label="instagram"
                      variant="ghost"
                      size="lg"
                      isRound={true}
                      _hover={{ bg: "#0D74FF" }}
                      icon={<BsInstagram size="28px" />}
                    />
                  </HStack>
                </Box>
              </WrapItem>
              <WrapItem alignItems={"center"}>
                <Box borderRadius="lg">
                  <Box m={8}>
                    <VStack spacing={5}>
                      <Stack direction={"row"} spacing={4}>
                        <FormControl id="name">
                          <FormLabel>Nombre Completo</FormLabel>
                          <InputGroup borderColor="#E0E1E7">
                            <InputLeftElement
                              pointerEvents="none"
                              children={<BsPerson color="gray.800" />}
                            />
                            <Input type="text" size="md" />
                          </InputGroup>
                        </FormControl>

                        <FormControl id="name">
                          <FormLabel>Correo</FormLabel>
                          <InputGroup borderColor="#E0E1E7">
                            <InputLeftElement
                              pointerEvents="none"
                              children={<MdOutlineEmail color="gray.800" />}
                            />
                            <Input type="text" size="md" />
                          </InputGroup>
                        </FormControl>
                      </Stack>
                      <Stack direction={"row"} spacing={4}>
                        <FormControl id="telefono">
                          <FormLabel>Telefono</FormLabel>
                          <InputGroup borderColor="#E0E1E7">
                            <InputLeftElement
                              pointerEvents="none"
                              children={<BsTelephone color="gray.800" />}
                            />
                            <Input type="text" size="md" />
                          </InputGroup>
                        </FormControl>

                        <FormControl id="asunto">
                          <FormLabel>Asunto</FormLabel>
                          <InputGroup borderColor="#E0E1E7">
                            <InputLeftElement
                              pointerEvents="none"
                              children={<BsMailbox color="gray.800" />}
                            />

                            <Input type="text" size="md" />
                          </InputGroup>
                        </FormControl>
                      </Stack>
                      <FormControl id="Servicios">
                        <FormLabel>Servicios</FormLabel>
                        <InputGroup borderColor="#E0E1E7">
                          <Select
                            borderColor="#E0E1E7"
                            variant="outline"
                            placeholder="Seleccione"
                            size="md"
                          >
                            <option value="Ventas">Ventas</option>
                            <option value="Soporte">Soporte técnico</option>
                            <option value="Cobranzas">Cobranzas</option>
                            <option value="Administracion">
                              Administración
                            </option>
                            <option value="Otros">Otros</option>
                          </Select>
                        </InputGroup>
                      </FormControl>

                      <FormControl id="message">
                        <FormLabel>Mensaje</FormLabel>
                        <Textarea
                          borderColor="gray.300"
                          _hover={{
                            borderRadius: "gray.300",
                          }}
                        />
                      </FormControl>

                      <FormControl id="button" float="right">
                        <Button
                          variant="solid"
                          bg="#0D74FF"
                          color="white"
                          _hover={{}}
                        >
                          Enviar Message
                        </Button>
                      </FormControl>
                    </VStack>
                  </Box>
                </Box>
              </WrapItem>
            </Wrap>
          </Box>
        </Box>
      </Flex>
    </Container>
  );
}
