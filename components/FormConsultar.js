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
import { BsPerson } from "react-icons/bs";
import { MdTag } from "react-icons/md";
import MenuClientes from "./MenuClientes";
import { Form, Formik, Field } from "formik";
import Confetti from "./Confetti";
import * as Yup from "yup";

import confetti from "canvas-confetti";

/* A validation schema for the form. */
const ConsultarSchema = Yup.object().shape({
  contrato: Yup.number()
    .integer("El contrato debe ser un número entero")
    .moreThan(0, "El número de contrato es incorrecto")
    .required("El número de contrato es requerido"),
  rif_ci: Yup.number()
    .min(100000, "Debe ser mayor a 5 caracteres")
    .max(999999999, "El número de cédula o RIF es incorrecto")
    .required("El número de Cédula/RIF es requerido"),
});

export default function FormConsultar() {
  const toast = useToast();
  return (
    <Flex
      bg={useColorModeValue("gray.100", "gray.700")}
      align="center"
      justify="center"
      id="contact"
    >
      <Box borderRadius="lg">
        <Box>
          <VStack spacing={{ base: 4, md: 8, lg: 20 }}>
            <Stack
              spacing={{ base: 4, md: 8, lg: 20 }}
              direction={{ base: "column", md: "row" }}
            >
              <MenuClientes />
              <Box
                bg={useColorModeValue("white", "gray.600")}
                borderRadius="lg"
                p={10}
                color={useColorModeValue("gray.700", "whiteAlpha.900")}
                shadow="base"
              >
                <Formik
                  initialValues={{
                    contrato: "",
                    tipo: "",
                    rif_ci: "",
                  }}
                  validationSchema={ConsultarSchema}
                  onSubmit={(values, actions) => {
                    setTimeout(() => {
                      // alert(JSON.stringify(values, null, 2));
                      actions.setSubmitting(false);
                      confetti({
                        particleCount: 150,
                        spread: 180,
                      });

                      toast({
                        title: "Felicidades.",
                        description: "No tiene deuda pendiente.",
                        status: "success",
                        duration: 5000,
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
                          <Field name="contrato" type="number">
                            {({ field, form }) => (
                              <FormControl
                                isRequired
                                isInvalid={
                                  form.errors.contrato && form.touched.contrato
                                }
                              >
                                <FormLabel>Contrato</FormLabel>
                                <InputGroup borderColor="#E0E1E7">
                                  <InputLeftElement
                                    pointerEvents="none"
                                    children={<MdTag color="gray.800" />}
                                  />
                                  <Input {...field} type="number" size="md" />
                                </InputGroup>

                                <FormErrorMessage>
                                  {form.errors.contrato}
                                </FormErrorMessage>
                              </FormControl>
                            )}
                          </Field>

                          <Field name="rif_ci" type="number">
                            {({ field, form }) => (
                              <FormControl
                                isRequired
                                isInvalid={
                                  form.errors.rif_ci && form.touched.rif_ci
                                }
                              >
                                <FormLabel>Cédula/RIF</FormLabel>
                                <InputGroup borderColor="#E0E1E7">
                                  <InputLeftElement
                                    pointerEvents="none"
                                    children={<BsPerson color="gray.800" />}
                                  />
                                  <Input
                                    {...field}
                                    type="number"
                                    size="md"
                                    id="rif_ci"
                                  />
                                </InputGroup>

                                <FormErrorMessage>
                                  {form.errors.rif_ci}
                                </FormErrorMessage>
                              </FormControl>
                            )}
                          </Field>
                        </Stack>

                        <FormControl id="button" float="right">
                          {/* <Confetti placeholder={"Consultar"} /> */}
                          <Button
                            type="submit"
                            isLoading={props.isSubmitting}
                            loadingText="Consultando..."
                          >
                            Consultar
                          </Button>
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
