import NextLink from "next/link";
import { Stack, Link } from "@chakra-ui/react";
export default function MenuClientes() {
  return (
    <Stack
      align="center"
      justify="space-around"
      direction={{ base: "row", md: "column" }}
    >
      <NextLink href="/clientes/consulta-saldo" passHref>
        <Link>Consulta de saldo</Link>
      </NextLink>
      <NextLink href="/clientes/reportar-pago" passHref>
        <Link>Reportar Pago</Link>
      </NextLink>
      <NextLink href="/clientes/uso-datos" passHref>
        <Link>Uso de datos</Link>
      </NextLink>
      <NextLink href="/clientes/zona-wifi" passHref>
        <Link>Zona WiFi</Link>
      </NextLink>
      <NextLink href="/clientes/speedtest" passHref>
        <Link>Test de velocidad</Link>
      </NextLink>
    </Stack>
  );
}
