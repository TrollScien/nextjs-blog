import {
  Box,
  SimpleGrid,
  Icon,
  Text,
  Stack,
  Flex,
  Container,
  useColorModeValue,
} from "@chakra-ui/react";

import {
  IconConsultoria,
  IconInternet,
  IconRedes,
  IconRedundancia,
  IconServicios,
  IconTelefonia,
} from "./IconsFeatures";

const Feature = ({ title, text, icon }) => {
  return (
    <Stack p={5}>
      <Flex
        w={16}
        h={16}
        align={"center"}
        justify={"center"}
        color={"white"}
        rounded={"full"}
        mb={1}
      >
        {icon}
      </Flex>
      <Text fontWeight={600}>{title}</Text>
      <Text align={"justify"} color={useColorModeValue("gray.600", "gray.400")}>
        {text}
      </Text>
    </Stack>
  );
};

export default function Features() {
  return (
    <Container maxW="8xl" centerContent>
      <Box p={4} alignItems={"center"}>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
          <Feature
            icon={<IconInternet w={10} h={10} />}
            title={"INTERNET"}
            text={
              "Si la velocidad y la confiabilidad son importantes para ti, estás en el lugar correcto. Ofrecemos el internet más rápido, estable y accesible de la región."
            }
          />
          <Feature
            icon={<IconTelefonia w={10} h={10} />}
            title={"TELEFONÍA"}
            text={
              "Podemos ayudarte con cada aspecto de tus despliegues de telefonía digital. Disfruta los beneficios de la tecnología VoIP en tu casa u oficina."
            }
          />
          <Feature
            icon={<IconServicios w={10} h={10} />}
            title={"SERVICIOS EMPRESARIALES"}
            text={
              "Estamos en sintonía con los requerimientos de la pequeña, mediana y gran industria. Nos ajustamos a las necesidades de tu empresa."
            }
          />
          <Feature
            icon={<IconRedes w={10} h={10} />}
            title={"REDES PRIVADAS VIRTUALES (VPNS)"}
            text={
              "Manten tu información a salvo de ojos curiosos mientras viaja por internet. Podemos desplegar tuneles encriptados de cualquier nivel."
            }
          />
          <Feature
            icon={<IconRedundancia w={10} h={10} />}
            title={"REDUNDANCIA Y BALANCEO"}
            text={
              "Nos conectamos a más de un proveedor, lo que se traduce en una respuesta ante fallos que pocos pueden ofrecer. Nuestra red es altamente redundante."
            }
          />
          <Feature
            icon={<IconConsultoria w={10} h={10} />}
            title={"CONSULTORÍA DE REDES"}
            text={
              "Podemos asistirte en el despliegue o ampliación de tu red empresarial. Contáctanos para más información."
            }
          />
        </SimpleGrid>
      </Box>
    </Container>
  );
}
