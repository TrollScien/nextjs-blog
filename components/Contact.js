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
  useToast,
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
const ContactSchema = Yup.object().shape({
  nombre: Yup.string()
    .min(3, "Debe tener más de 3 caracteres")
    .max(50, "Debe tener menos de 50 caracteres")
    .required("El nombre es requerido")
    .trim()
    .matches(/^[a-zA-Z ]+$/, "Nombre con caracteres inválidos"),
  email: Yup.string()
    .email("Debe colocar un correo válido")
    .required("El correo es requerido"),
  telefono: Yup.string()
    .matches(/^(\+?\d{1,3})?\s?[0-9-]{10,12}$/, {
      message: "Teléfono inválido",
      excludeEmptyString: false,
    })
    .max(15, "El teléfono es incorrecto"),
  asunto: Yup.string().required("El asunto es requerido"),
  servicios: Yup.string().required("El servicio es requerido"),
  mensaje: Yup.string()
    .max(255, "El mensaje no puede superar los 255 caracteres")
    .required("El mensaje es requerido"),
});

export default function Contact() {
  const toast = useToast();
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
                <Formik
                  initialValues={{
                    nombre: "",
                    email: "",
                    telefono: "",
                    asunto: "",
                    servicios: "",
                    mensaje: "",
                  }}
                  validationSchema={ContactSchema}
                  onSubmit={(values, actions) => {
                    setTimeout(() => {
                      /* Just a way to see the values of the form. */
                      alert(JSON.stringify(values, null, 2));
                      actions.setSubmitting(false);
                      // confetti({
                      //   particleCount: 150,
                      //   spread: 180,
                      // });
                      toast({
                        title: "Hemos recibido correctamente su mensaje.",
                        description:
                          "Nos pondremos en contacto con usted lo antes posible.",
                        status: "success",
                        duration: 9000,
                        isClosable: true,
                      });
                    }, 1000);
                  }}
                >
                  {(props) => (
                    <Form>
                      <VStack spacing={5}>
                        <Stack
                          direction={["column", "column", "row"]}
                          spacing={4}
                        >
                          <Field name="nombre" type="text">
                            {({ field, form }) => (
                              <FormControl
                                id="nombre"
                                isRequired
                                isInvalid={
                                  form.errors.nombre && form.touched.nombre
                                }
                              >
                                <FormLabel>Nombre Completo</FormLabel>
                                <InputGroup borderColor="#E0E1E7">
                                  <InputLeftElement
                                    pointerEvents="none"
                                    children={<BsPerson color="gray.800" />}
                                  />
                                  <Input {...field} type="text" size="md" />
                                </InputGroup>
                                <FormErrorMessage>
                                  {form.errors.nombre}
                                </FormErrorMessage>
                              </FormControl>
                            )}
                          </Field>
                          <Field name="email" type="email">
                            {({ field, form }) => (
                              <FormControl
                                id="email"
                                isRequired
                                isInvalid={
                                  form.errors.email && form.touched.email
                                }
                              >
                                <FormLabel htmlFor="email">Correo</FormLabel>
                                <InputGroup borderColor="#E0E1E7">
                                  <InputLeftElement
                                    pointerEvents="none"
                                    children={
                                      <MdOutlineEmail color="gray.800" />
                                    }
                                  />
                                  <Input
                                    {...field}
                                    type="email"
                                    size="md"
                                    id="email"
                                  />
                                </InputGroup>
                                <FormErrorMessage>
                                  {form.errors.email}
                                </FormErrorMessage>
                              </FormControl>
                            )}
                          </Field>
                        </Stack>
                        <Stack
                          direction={["column", "column", "row"]}
                          spacing={4}
                        >
                          <Field name="telefono" type="text">
                            {({ field, form }) => (
                              <FormControl
                                id="telefono"
                                isInvalid={
                                  form.errors.telefono && form.touched.telefono
                                }
                              >
                                <FormLabel>Telefono</FormLabel>
                                <InputGroup borderColor="#E0E1E7">
                                  <InputLeftElement
                                    pointerEvents="none"
                                    children={<BsTelephone color="gray.800" />}
                                  />
                                  <Input {...field} type="text" size="md" />
                                </InputGroup>
                                <FormHelperText>
                                  04121234567 ó +58 04121234567
                                </FormHelperText>
                                <FormErrorMessage>
                                  {form.errors.telefono}
                                </FormErrorMessage>
                              </FormControl>
                            )}
                          </Field>
                          <Field name="asunto" type="text">
                            {({ field, form }) => (
                              <FormControl
                                id="asunto"
                                isRequired
                                isInvalid={
                                  form.errors.asunto && form.touched.asunto
                                }
                              >
                                <FormLabel>Asunto</FormLabel>
                                <InputGroup borderColor="#E0E1E7">
                                  <InputLeftElement
                                    pointerEvents="none"
                                    children={<BsMailbox color="gray.800" />}
                                  />

                                  <Input {...field} type="text" size="md" />
                                </InputGroup>
                                <FormErrorMessage>
                                  {form.errors.asunto}
                                </FormErrorMessage>
                              </FormControl>
                            )}
                          </Field>
                        </Stack>
                        <Field name="servicios" type="text">
                          {({ field, form }) => (
                            <FormControl
                              id="servicios"
                              isRequired
                              isInvalid={
                                form.errors.servicios && form.touched.servicios
                              }
                            >
                              <FormLabel>Servicios</FormLabel>
                              <InputGroup borderColor="#E0E1E7">
                                <Select
                                  {...field}
                                  borderColor="#E0E1E7"
                                  variant="outline"
                                  placeholder="Seleccione"
                                  size="md"
                                >
                                  <option value="Ventas">Ventas</option>
                                  <option value="Soporte">
                                    Soporte técnico
                                  </option>
                                  <option value="Cobranzas">Cobranzas</option>
                                  <option value="Administracion">
                                    Administración
                                  </option>
                                  <option value="Otros">Otros</option>
                                </Select>
                              </InputGroup>
                              <FormErrorMessage>
                                {form.errors.servicios}
                              </FormErrorMessage>
                            </FormControl>
                          )}
                        </Field>
                        <Field name="mensaje" type="text">
                          {({ field, form }) => (
                            <FormControl
                              id="mensaje"
                              isRequired
                              isInvalid={
                                form.errors.mensaje && form.touched.mensaje
                              }
                            >
                              <FormLabel>Mensaje</FormLabel>
                              <Textarea
                                {...field}
                                borderColor="gray.300"
                                _hover={{
                                  borderRadius: "gray.300",
                                }}
                              />
                              <FormErrorMessage>
                                {form.errors.mensaje}
                              </FormErrorMessage>
                            </FormControl>
                          )}
                        </Field>

                        <FormControl id="button" float="right">
                          <Confetti placeholder={"Enviar Mensaje"} />
                        </FormControl>
                      </VStack>
                    </Form>
                  )}
                </Formik>
              </Box>
            </Stack>
          </VStack>
        </Box>
      </Box>
    </Flex>
  );
}
