import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Container,
  Stack,
  Heading,
} from "@chakra-ui/react";

function FaqsService() {
  return (
    <Accordion allowToggle>
      {FAQS_ITEMS_SERVICIO.map((faqItem) => (
        <AccordionItem>
          <h2>
            <AccordionButton _expanded={{ bg: "blue.400", color: "white" }}>
              <Box flex="1" textAlign="left">
                {faqItem.title}
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          {/* <AccordionPanel pb={4}>{faqItem.content}</AccordionPanel> */}
          <AccordionPanel pb={4}>{LOREM}</AccordionPanel>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
function FaqsInstallation() {
  return (
    <Accordion allowToggle>
      {FAQS_ITEMS_INSTALACION.map((faqItem) => (
        <AccordionItem>
          <h2>
            <AccordionButton _expanded={{ bg: "blue.400", color: "white" }}>
              <Box flex="1" textAlign="left">
                {faqItem.title}
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          {/* <AccordionPanel pb={4}>{faqItem.content}</AccordionPanel> */}
          <AccordionPanel pb={4}>{LOREM}</AccordionPanel>
        </AccordionItem>
      ))}
    </Accordion>
  );
}

function FaqsHogar() {
  return (
    <Accordion allowToggle>
      {FAQS_ITEMS_HOGAR.map((faqItem) => (
        <AccordionItem>
          <h2>
            <AccordionButton _expanded={{ bg: "blue.400", color: "white" }}>
              <Box flex="1" textAlign="left">
                {faqItem.title}
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          {/* <AccordionPanel pb={4}>{faqItem.content}</AccordionPanel> */}
          <AccordionPanel pb={4}>{LOREM}</AccordionPanel>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
function FaqsEmprendedor() {
  return (
    <Accordion allowToggle>
      {FAQS_ITEMS_EMPRENDEDOR.map((faqItem) => (
        <AccordionItem>
          <h2>
            <AccordionButton _expanded={{ bg: "blue.400", color: "white" }}>
              <Box flex="1" textAlign="left">
                {faqItem.title}
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          {/* <AccordionPanel pb={4}>{faqItem.content}</AccordionPanel> */}
          <AccordionPanel pb={4}>{LOREM}</AccordionPanel>
        </AccordionItem>
      ))}
    </Accordion>
  );
}

export default function Faqs() {
  return (
    <Container maxW={"8xl"}>
      <Stack direction={"column"} spacing="24px">
        <Box p={4} alignItems={"center"}>
          <Stack p={4} spacing={0} align={"center"}>
            <Heading>Preguntas Frecuentes</Heading>
          </Stack>
          <Tabs size="md" variant="enclosed" align="center">
            <TabList>
              <Tab>Servicio</Tab>
              <Tab>Instalaciones</Tab>
              <Tab>Plan Hogar</Tab>
              <Tab>Plan Emprendedor</Tab>
            </TabList>

            <TabPanels>
              <TabPanel>
                <FaqsService />
              </TabPanel>
              <TabPanel>
                <FaqsInstallation />
              </TabPanel>
              <TabPanel>
                <FaqsHogar />
              </TabPanel>
              <TabPanel>
                <FaqsEmprendedor />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
      </Stack>
    </Container>
  );
}

const LOREM =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

const FAQS_ITEMS_SERVICIO = [
  {
    title: "¿El servicio ofrecido es Internet Satelital?",
    content: LOREM,
  },
  {
    title: "¿Cuánto cuesta cada plan?",
    content: LOREM,
  },
  {
    title: "¿Cuántos dispositivos puedo conectar al internet?",
    content: LOREM,
  },
  {
    title: "¿Afecta la lluvia?",
  },
  {
    title: "¿Qué pasa si se va luz?",
  },
  {
    title: "Política de uso aceptable",
  },
  {
    title: "Condiciones de Uso",
  },
];

const FAQS_ITEMS_INSTALACION = [
  {
    title: "¿Cuánto cuesta la instalación?",
    content: LOREM,
  },
  {
    title: "¿Cuánto se demora una nueva instalación?",
    content: LOREM,
  },
  {
    title: "¿Qué incluye la instalación?",
  },
  {
    title: "¿Los equipos son propios?",
  },
  {
    title: "¿Podemos pagar el Internet entre varios?",
  },
  {
    title: "¿Cómo puedo obtener las coordenadas de mi ubicación?",
  },
];

const FAQS_ITEMS_HOGAR = [
  {
    title: "¿El servicio residencial es ilimitado?",
    content: LOREM,
  },
  {
    title: "¿Qué tán rápidos son los servicios residenciales?",
    content: LOREM,
  },
  {
    title: "¿Cuál es el período de facturación?",
    content: LOREM,
  },
  {
    title: "¿Dónde puedo consultar mi cupo disponible?",
  },
  {
    title: "¿Cuántas películas puedo ver/descargar en un mes?",
  },
  {
    title: "¿Qué debo hacer si tengo problemas con el internet?",
  },
  {
    title: "¿Cómo puedo controlar mi consumo?",
  },
];

const FAQS_ITEMS_EMPRENDEDOR = [
  {
    title: "¿El plan Emprendedor es ilimitado?",
    content: LOREM,
  },
  {
    title: "¿Qué garantía de velocidad tendré?",
    content: LOREM,
  },
  {
    title: "¿Puedo compartir mi internet con el vecino?",
    content: LOREM,
  },
  {
    title: "¿La velocidad será reducida al superar la cuota de mi plan?",
  },
  {
    title: "¿Puedo Instalar internet emprendedor en una casa?",
  },
  {
    title: "¿Necesito un RIF o contrato de arrendamiento?",
  },
  {
    title: "¿Incluye IP pública fija?",
  },
];
