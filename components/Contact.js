import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  Link,
  Stack,
  Textarea,
  Tooltip,
  useColorModeValue,
  VStack,
  Text,
  HStack,
  Wrap,
  WrapItem,
  FormErrorMessage,
  FormHelperText,
  Select,
} from "@chakra-ui/react";
import React from "react";
import {
  BsPerson,
  BsWhatsapp,
  BsInstagram,
  BsTelephone,
  BsMailbox,
  BsFacebook,
} from "react-icons/bs";
import { MdOutlineEmail, MdLocationPin, MdPhone } from "react-icons/md";
import Map from "./Map";
// import ReactCanvasConfetti from "react-canvas-confetti";
import Confetti from "./Confetti";
import { Form, Formik, Field } from "formik";
import * as Yup from "yup";

import confetti from "canvas-confetti";

/* A validation schema for the form. */
const ContactoSchema = Yup.object().shape({
  nombre: Yup.string()
    .min(3, "El nombre debe tener más de 3 caracteres")
    .max(50, "El nombre debe tener menos de 50 caracteres")
    .required("El nombre es requerido")
    .trim(),
  email: Yup.string()
    .email("Debe colocar un correo válido")
    .required("El correo es requerido"),
  telefono: Yup.string().required("El teléfono es requerido"),
  asunto: Yup.string().required("El asunto es requerido"),
  servicios: Yup.string().required("El servicio es requerido"),
  mensaje: Yup.string()
    .max(255, "El mensaje no puede superar los 255 caracteres")
    .required("El mensaje es requerido"),
});

export default function Contact() {
  const finalRef = React.useRef(null);

  return (
    <Flex
      bg={useColorModeValue("gray.100", "gray.700")}
      align="center"
      justify="center"
      id="contact"
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
              Contáctanos
            </Heading>

            <Stack
              spacing={{ base: 4, md: 8, lg: 20 }}
              direction={{ base: "column", md: "row" }}
            >
              <Stack
                align="center"
                justify="space-around"
                direction={{ base: "row", md: "column" }}
              >
                <Link href="#">
                  <IconButton
                    aria-label="Facebook"
                    variant="ghost"
                    size="lg"
                    fontSize="3xl"
                    icon={<BsFacebook />}
                    _hover={{ bg: "#3b5998", color: "white" }}
                    isRound
                  />
                </Link>

                <Link href="#">
                  <IconButton
                    aria-label="Whatsapp"
                    variant="ghost"
                    size="lg"
                    icon={<BsWhatsapp size="28px" />}
                    _hover={{ bg: "#25D366", color: "white" }}
                    isRound
                  />
                </Link>

                <Link href="#">
                  <IconButton
                    aria-label="Instagram"
                    variant="ghost"
                    size="lg"
                    icon={<BsInstagram size="28px" />}
                    _hover={{ bg: "#833AB4", color: "white" }}
                    isRound
                  />
                </Link>
                <Tooltip
                  label={"(0254) 600 14 00"}
                  closeOnClick={false}
                  hasArrow
                >
                  <Link href="#">
                    <IconButton
                      aria-label="Telefono"
                      variant="ghost"
                      size="lg"
                      icon={<MdPhone size="28px" />}
                      _hover={{
                        bg: "blue.500",
                        color: "white",
                      }}
                      isRound
                    />
                  </Link>
                </Tooltip>
                <Map />
              </Stack>

              <Box
                bg={useColorModeValue("white", "gray.600")}
                borderRadius="lg"
                p={8}
                color={useColorModeValue("gray.700", "whiteAlpha.900")}
                shadow="base"
              >
                <VStack spacing={5}>
                  <Stack direction={["column", "column", "row"]} spacing={4}>
                    <FormControl id="name" isRequired>
                      <FormLabel>Nombre Completo</FormLabel>
                      <InputGroup borderColor="#E0E1E7">
                        <InputLeftElement
                          pointerEvents="none"
                          children={<BsPerson color="gray.800" />}
                          ref={finalRef}
                        />
                        <Input type="text" size="md" />
                      </InputGroup>
                    </FormControl>

                    <FormControl id="emailForm" isRequired>
                      <FormLabel htmlFor="email">Correo</FormLabel>
                      <InputGroup borderColor="#E0E1E7">
                        <InputLeftElement
                          pointerEvents="none"
                          children={<MdOutlineEmail color="gray.800" />}
                        />
                        <Input type="email" size="md" id="email" />
                      </InputGroup>
                    </FormControl>
                  </Stack>
                  <Stack direction={["column", "column", "row"]} spacing={4}>
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

                    <FormControl id="asunto" isRequired>
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
                  <FormControl id="Servicios" isRequired>
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
                        <option value="Administracion">Administración</option>
                        <option value="Otros">Otros</option>
                      </Select>
                    </InputGroup>
                  </FormControl>

                  <FormControl id="mensaje" isRequired>
                    <FormLabel>Mensaje</FormLabel>
                    <Textarea
                      borderColor="gray.300"
                      _hover={{
                        borderRadius: "gray.300",
                      }}
                    />
                  </FormControl>

                  <FormControl id="button" float="right">
                    <Confetti placeholder={"Enviar Mensaje"} />
                  </FormControl>
                </VStack>
              </Box>
            </Stack>
          </VStack>
        </Box>
      </Box>
    </Flex>
  );
}
