import {
  Box,
  chakra,
  Container,
  Link,
  Stack,
  Text,
  useColorModeValue,
  VisuallyHidden,
} from "@chakra-ui/react";
import { FaInstagram, FaFacebook, FaWhatsapp } from "react-icons/fa";
import Logo from "../components/svg/Logo";

const SocialButton = ({ children, label, href, hover }) => {
  return (
    <chakra.button
      bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
      rounded={"full"}
      w={8}
      h={8}
      cursor={"pointer"}
      as={"a"}
      href={href}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: hover,
        color: "white",
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export default function SmallCentered() {
  return (
    <Box
      bg={useColorModeValue("gray.50", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
    >
      <Container
        as={Stack}
        maxW={"6xl"}
        py={4}
        spacing={4}
        justify={"center"}
        align={"center"}
      >
        <Logo width="255" height="90" />

        <Stack direction={"row"} spacing={6}>
          <Link href={"#"}>Inicio</Link>
          <Link href={"#"}>Precios</Link>
          <Link href={"#"}>Contacto</Link>
          <Link href={"#"}>Zona de Clientes</Link>
        </Stack>
      </Container>

      <Box
        borderTopWidth={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.700")}
      >
        <Container
          as={Stack}
          maxW={"6xl"}
          py={4}
          direction={{ base: "column", md: "row" }}
          spacing={4}
          justify={{ base: "center", md: "space-between" }}
          align={{ base: "center", md: "center" }}
        >
          <Text>
            Todos los derechos reservados. © 2022 Comunicaciones Galup, C.A.
            <br />
            RIF: J-29384802-4
            <br />
            CONATEL: Habilitación N° HGTS-00574
          </Text>
          <Stack direction={"row"} spacing={6}>
            <SocialButton label={"Facebook"} href={"#"} hover={"#3b5998"}>
              <FaFacebook />
            </SocialButton>
            <SocialButton label={"Whatsapp"} href={"#"} hover={"#25D366"}>
              <FaWhatsapp />
            </SocialButton>
            <SocialButton label={"Instagram"} href={"#"} hover={"#833AB4"}>
              <FaInstagram />
            </SocialButton>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}
