import {
  Box,
  Stack,
  HStack,
  Heading,
  Text,
  VStack,
  useColorModeValue,
  List,
  ListItem,
  ListIcon,
  Button,
  Switch,
  FormLabel,
} from "@chakra-ui/react";
import { FaCheckCircle } from "react-icons/fa";
import { useState } from "react";

function PriceWrapper({ children }) {
  return (
    <Box
      mb={4}
      shadow="base"
      borderWidth="1px"
      alignSelf={{ base: "center", lg: "flex-start" }}
      borderColor={useColorModeValue("gray.200", "gray.500")}
      borderRadius={"xl"}
    >
      {children}
    </Box>
  );
}
function Pricing({ typeService }) {
  return (
    <>
      <PricingHogar service={typeService} />
      <PricingEmprendedor service={typeService} />
      <PricingCorporativo service={typeService} />
    </>
  );
}

function PricingHogar({ service }) {
  return (
    <PriceWrapper>
      <Box py={4} px={12}>
        <Text fontWeight="500" fontSize="2xl" textTransform={"uppercase"}>
          {service === "fibra" ? "Hogar Fibra" : "Hogar Wireless"}
        </Text>
        <HStack justifyContent="center">
          <Text fontSize="3xl" color="gray.500">
            Desde
          </Text>
          <Text fontSize="3xl" fontWeight="600">
            $
          </Text>
          <Text fontSize="5xl" fontWeight="900">
            34.99
          </Text>
        </HStack>
      </Box>
      <VStack
        bg={useColorModeValue("gray.50", "gray.700")}
        py={4}
        borderBottomRadius={"xl"}
      >
        <List spacing={3} textAlign="start" px={12}>
          <ListItem fontWeight="semibold">
            <ListIcon as={FaCheckCircle} color="green.500" />
            Desde {service === "fibra" ? "100Mbps" : "15Mbps"} De Velocidad
          </ListItem>
          <ListItem>
            <ListIcon as={FaCheckCircle} color="green.500" />
            Consumo Ilimitado*
          </ListItem>
          <ListItem>
            <ListIcon as={FaCheckCircle} color="green.500" />
            5x8 Soporte telefónico
          </ListItem>
          <ListItem>
            <ListIcon as={FaCheckCircle} color="green.500" />
            IPv4 / IPv6
          </ListItem>
        </List>
        <Box w="80%" pt={7}>
          <Button w="full" colorScheme="red" variant="outline">
            Start trial
          </Button>
        </Box>
      </VStack>
    </PriceWrapper>
  );
}

function PricingEmprendedor({ service }) {
  return (
    <PriceWrapper>
      <Box position="relative">
        <Box
          position="absolute"
          top="-16px"
          left="50%"
          style={{ transform: "translate(-50%)" }}
        >
          <Text
            textTransform="uppercase"
            bg={useColorModeValue("red.300", "red.700")}
            px={3}
            py={1}
            color={useColorModeValue("gray.900", "gray.300")}
            fontSize="sm"
            fontWeight="600"
            rounded="xl"
          >
            Más Popular
          </Text>
        </Box>
        <Box py={4} px={12}>
          <Text fontWeight="500" fontSize="2xl" textTransform={"uppercase"}>
            {service === "fibra" ? "Emprendedor Fibra" : "Emprendedor Wireless"}
          </Text>
          <HStack justifyContent="center">
            <Text fontSize="3xl" color="gray.500">
              Desde
            </Text>
            <Text fontSize="3xl" fontWeight="600">
              $
            </Text>
            <Text fontSize="5xl" fontWeight="900">
              54.99
            </Text>
          </HStack>
        </Box>
        <VStack
          bg={useColorModeValue("gray.50", "gray.700")}
          py={4}
          borderBottomRadius={"xl"}
        >
          <List spacing={3} textAlign="start" px={12}>
            <ListItem fontWeight="semibold">
              <ListIcon as={FaCheckCircle} color="green.500" />
              Desde {service === "fibra" ? "50Mbps" : "20Mbps"} De Velocidad
            </ListItem>
            <ListItem>
              <ListIcon as={FaCheckCircle} color="green.500" />
              Consumo Ilimitado*
            </ListItem>
            <ListItem>
              <ListIcon as={FaCheckCircle} color="green.500" />
              5x8 Soporte telefónico
            </ListItem>
            <ListItem>
              <ListIcon as={FaCheckCircle} color="green.500" />
              IPv4 / IPv6
            </ListItem>
            <ListItem>
              <ListIcon as={FaCheckCircle} color="green.500" />
              Internet simétrico.
            </ListItem>
          </List>
          <Box w="80%" pt={7}>
            <Button w="full" colorScheme="red">
              Start trial
            </Button>
          </Box>
        </VStack>
      </Box>
    </PriceWrapper>
  );
}

function PricingCorporativo({ service }) {
  return (
    <PriceWrapper>
      <Box py={4} px={12}>
        <Text fontWeight="500" fontSize="2xl" textTransform={"uppercase"}>
          {service === "fibra" ? "Corporativo Fibra" : "Corporativo Wireless"}
        </Text>
        <HStack justifyContent="center">
          <Text fontSize="5xl" fontWeight="600">
            A consultar
          </Text>
        </HStack>
      </Box>
      <VStack
        bg={useColorModeValue("gray.50", "gray.700")}
        py={4}
        borderBottomRadius={"xl"}
      >
        <List spacing={3} textAlign="start" px={12}>
          <ListItem fontWeight="semibold">
            <ListIcon as={FaCheckCircle} color="green.500" />
            Desde 20Mbps Velocidad
          </ListItem>
          <ListItem>
            <ListIcon as={FaCheckCircle} color="green.500" />
            Direccionamiento IP Público
          </ListItem>
          <ListItem>
            <ListIcon as={FaCheckCircle} color="green.500" />
            Soporte 24 x 7
          </ListItem>
          <ListItem>
            <ListIcon as={FaCheckCircle} color="green.500" />
            Internet simétrico.
          </ListItem>
        </List>
        <Box w="80%" pt={7}>
          <Button w="full" colorScheme="red" variant="outline">
            Start trial
          </Button>
        </Box>
      </VStack>
    </PriceWrapper>
  );
}

export default function ThreeTierPricing() {
  const [checked, setChecked] = useState(true);
  const handleChange = () => {
    setChecked(!checked);
  };
  return (
    <Box py={12}>
      <VStack spacing={2} textAlign="center">
        <Heading as="h1" fontSize="4xl">
          Planes que se adaptan a sus necesidades
        </Heading>
        <Text fontSize="lg" color={"gray.500"}>
          Tenemos planes tanto de fibra óptica como inalámbricos
        </Text>
        <FormLabel>
          {checked ? "Planes Fibra Óptica" : "Planes Inalámbricos"}
        </FormLabel>
        <Switch size="lg" isChecked={checked} onChange={handleChange} />
      </VStack>
      <Stack
        direction={{ base: "column", md: "row" }}
        textAlign="center"
        justify="center"
        spacing={{ base: 4, lg: 10 }}
        py={10}
      >
        {checked ? (
          <Pricing typeService={"fibra"} />
        ) : (
          <Pricing typeService={"wireless"} />
        )}
      </Stack>
    </Box>
  );
}
