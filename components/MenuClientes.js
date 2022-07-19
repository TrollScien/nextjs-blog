import NextLink from "next/link";
import {
  Box,
  Center,
  Stack,
  Link,
  useColorModeValue,
  List,
  ListItem,
} from "@chakra-ui/react";

export default function MenuClientes() {
  return (
    <Center py={6}>
      <Box
        w={"full"}
        bg={useColorModeValue("white", "gray.900")}
        boxShadow={"md"}
        rounded={"lg"}
        p={6}
        textAlign={"start"}
      >
        <Stack justify="space-around" direction={{ base: "row", md: "column" }}>
          <List spacing={3}>
            <ListItem>
              <NextLink href="/clientes/consulta-saldo" passHref>
                <Link>Consulta de saldo</Link>
              </NextLink>
            </ListItem>
            <ListItem>
              <NextLink href="/clientes/reportar-pago" passHref>
                <Link>Reportar Pago</Link>
              </NextLink>
            </ListItem>
            <ListItem>
              <NextLink href="/clientes/uso-datos" passHref>
                <Link>Uso de datos</Link>
              </NextLink>
            </ListItem>
            <ListItem>
              <NextLink href="/clientes/zona-wifi" passHref>
                <Link>Zona WiFi</Link>
              </NextLink>
            </ListItem>
            <ListItem>
              <NextLink href="/clientes/speedtest" passHref>
                <Link>Test de velocidad</Link>
              </NextLink>
            </ListItem>
          </List>
        </Stack>
      </Box>
    </Center>
  );
}
