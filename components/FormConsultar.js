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
import { BsPerson } from "react-icons/bs";
import { MdTag } from "react-icons/md";
import MenuClientes from "./MenuClientes";
import { Form, Formik, Field } from "formik";
import Confetti from "./Confetti";

export default function FormConsultar() {
  const publicar = (values) => {
    console.log(values.contrato);
    console.log(values.tipo);
    console.log(values.rif_ci);
  };
  function validateContrato(value) {
    let error;
    if (!value) {
      error = "El Contrato es requerido";
    } else if (value.length < 2) {
      error = "El Contrato es incorrecto😱";
    }
    return error;
  }
  function validateRifCi(value) {
    let error;
    if (!value) {
      error = "La Cédula/RIF es requerido";
    } else if (value.length < 5) {
      error = "La Cédula o RIF debe ser mayor a 5 caracteres😱";
    }
    return error;
  }
  function validateTipoCliente(value) {
    let error;
    if (!value) {
      error = "El tipo de identificación es requerido";
    }
    return error;
  }

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
            <Stack
              spacing={{ base: 4, md: 8, lg: 20 }}
              direction={{ base: "column", md: "row" }}
            >
              <MenuClientes />
              <Box
                bg={useColorModeValue("white", "gray.600")}
                borderRadius="lg"
                p={8}
                color={useColorModeValue("gray.700", "whiteAlpha.900")}
                shadow="base"
              >
                <Formik
                  initialValues={{
                    contrato: "",
                    tipo: "",
                    rif_ci: "",
                  }}
                  onSubmit={publicar}
                >
                  <VStack spacing={5}>
                    <Stack direction={["column", "column", "row"]} spacing={4}>
                      <Field
                        name="contrato"
                        validate={validateContrato}
                        type="number"
                      >
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
                              <Input {...field} type="text" size="md" />
                            </InputGroup>
                            <FormErrorMessage>
                              {form.errors.contrato}
                            </FormErrorMessage>
                          </FormControl>
                        )}
                      </Field>

                      <Field
                        name="tipo"
                        validate={validateTipoCliente}
                        as="select"
                      >
                        {({ field, form }) => (
                          <FormControl
                            isRequired
                            isInvalid={form.errors.tipo && form.touched.tipo}
                          >
                            <FormLabel>Tipo</FormLabel>
                            <InputGroup borderColor="#E0E1E7">
                              <Select
                                {...field}
                                borderColor="#E0E1E7"
                                variant="outline"
                                placeholder="Seleccione"
                                size="md"
                              >
                                <option value="V">V</option>
                                <option value="J">J</option>
                                <option value="E">E</option>
                                <option value="P">P</option>
                                <option value="G">G</option>
                              </Select>
                            </InputGroup>
                            <FormErrorMessage>
                              {form.errors.tipo}
                            </FormErrorMessage>
                          </FormControl>
                        )}
                      </Field>

                      <Field
                        name="rif_ci"
                        validate={validateRifCi}
                        type="number"
                      >
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
                                type="email"
                                size="md"
                                id="email"
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
                      <Confetti placeholder={"Enviar Mensaje"} />
                    </FormControl>
                  </VStack>
                </Formik>
              </Box>
            </Stack>
          </VStack>
        </Box>
      </Box>
    </Flex>
  );
}
