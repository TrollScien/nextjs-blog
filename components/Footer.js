import { ReactNode } from "react";
import Image from "next/image";
import {
  Box,
  Container,
  Link,
  SimpleGrid,
  Stack,
  Spacer,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

import Logo from "./svg/Logo";

const ListHeader = ({ children }) => {
  return (
    <Text fontWeight={"500"} fontSize={"lg"} mb={2}>
      {children}
    </Text>
  );
};

export default function LargeWithLogoLeft() {
  return (
    <Box
      bg={useColorModeValue("gray.50", "gray.800")}
      color={useColorModeValue("gray.700", "gray.200")}
    >
      <Container as={Stack} maxW={"6xl"} py={10}>
        <SimpleGrid
          templateColumns={{ sm: "1fr 1fr", md: "2fr 1fr 1fr 1fr 1fr" }}
          spacing={8}
        >
          <Stack spacing={6}>
            <Box>
              <Logo
                color={useColorModeValue("gray.700", "white")}
                width="255"
                height="90"
              />
            </Box>
            <Text fontSize={"sm"}>
              Todos los derechos reservados. © 2022 Comunicaciones Galup, C.A.{" "}
              <br />
              RIF: J-29384802-4
            </Text>
          </Stack>
          <Spacer />
          <Stack align={"center"}>
            <ListHeader>INICIO</ListHeader>
            <Link href={"#"}>Precios</Link>
            <Link href={"#"}>Términos de uso</Link>
            <Link href={"#"}>¿Por qué preferirnos?</Link>
            <Link href={"#"}>Preguntas Frecuentes</Link>
          </Stack>
          <Stack align={"center"}>
            <ListHeader>Contáctanos</ListHeader>
            <Link href={"#"}>Contacto</Link>
            <Link href={"#"}>Facebook</Link>
            <Link href={"#"}>Whatsapp</Link>
            <Link href={"#"}>Instagram</Link>
          </Stack>
          <Stack align={"center"}>
            <ListHeader>ZONA DE CLIENTES</ListHeader>
            <Link href={"#"}>Consulta de Saldo</Link>
            <Link href={"#"}>Reportar Pago</Link>
            <Link href={"#"}>Uso de Datos</Link>
            <Link href={"#"}>Zona WiFi Interlup</Link>
            <Link href={"#"}>Speedtest</Link>
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
  );
}
