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
  useColorModeValue,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";
import Image from "next/image";
import Layout from "../components/layout";

function FaqsServicio() {
  return (
    <Accordion allowToggle>
      {FAQS_ITEMS_SERVICIO.map((faqItem) => (
        <AccordionItem key={faqItem.title}>
          <h2>
            <AccordionButton _expanded={{ bg: "blue.400", color: "white" }}>
              <Box flex="1" textAlign="left">
                {faqItem.title}
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel textAlign={"justify"} pb={4}>
            {faqItem.content}
          </AccordionPanel>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
function FaqsInstalacion() {
  return (
    <Accordion allowToggle>
      {FAQS_ITEMS_INSTALACION.map((faqItem) => (
        <AccordionItem key={faqItem.title}>
          <h2>
            <AccordionButton _expanded={{ bg: "blue.400", color: "white" }}>
              <Box flex="1" textAlign="left">
                {faqItem.title}
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel textAlign={"justify"} pb={4}>
            {faqItem.content}
          </AccordionPanel>
        </AccordionItem>
      ))}
      <AccordionItem>
        <h2>
          <AccordionButton _expanded={{ bg: "blue.400", color: "white" }}>
            <Box flex="1" textAlign="left">
              ¿Cómo puedo obtener las coordenadas de mi ubicación?
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel textAlign={"justify"} pb={4}>
          <UnorderedList>
            <ListItem>
              Ingrese a{" "}
              <a target="_blank" href="https://www.google.co.ve/maps">
                google maps
              </a>
            </ListItem>
            <ListItem>
              Ubica en el mapa el sitio donde quieres instalar el servicio
            </ListItem>
            <ListItem>
              Puedes dar click en el recuadro ubicado en la parte inferior
              izquierda para seleccionar la vista de satélite y facilitar la
              búsqueda
            </ListItem>
            <ListItem>
              Haz click en la ubicación para obtener la siguiente información,
              como se muestra en la imagen: <br />
              <Image width={700} height={400} src={"/images/coor1.png"} />
            </ListItem>
            <ListItem>
              Al presionar click derecho en el puntero de la ubicación
              seleccionada, se mostrarán las siguientes opciones: <br />
              <Image width={700} height={400} src={"/images/coor2.png"} />
            </ListItem>
            <ListItem>
              Haz click en las coordenadas para copiarlas al portapapeles
            </ListItem>
          </UnorderedList>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
}
function FaqsHogar() {
  return (
    <Accordion allowToggle>
      {FAQS_ITEMS_HOGAR.map((faqItem) => (
        <AccordionItem key={faqItem.title}>
          <h2>
            <AccordionButton _expanded={{ bg: "blue.400", color: "white" }}>
              <Box flex="1" textAlign="left">
                {faqItem.title}
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel textAlign={"justify"} pb={4}>
            {faqItem.content}
          </AccordionPanel>
        </AccordionItem>
      ))}
      <AccordionItem>
        <h2>
          <AccordionButton _expanded={{ bg: "blue.400", color: "white" }}>
            <Box flex="1" textAlign="left">
              ¿Cuál es el período de facturación?
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel textAlign={"justify"} pb={4}>
          Nuestro período de facturación es del primero del mes al último del
          mes, las facturas se generan el día 20 y tiene un máximo de 10 días
          para realizar el pago.
          <br />
          <br />
          Todos nuestros servicios son prepagados. Si desea más información por
          favor contáctenos a{" "}
          <Image
            width={150}
            height={14}
            src="/images/pagos_residencial.png"
            alt="pagos_sr arroba(@) galup.com.ve"
          />
        </AccordionPanel>
      </AccordionItem>

      <AccordionItem>
        <h2>
          <AccordionButton _expanded={{ bg: "blue.400", color: "white" }}>
            <Box flex="1" textAlign="left">
              ¿Cuántas películas puedo ver/descargar en un mes?
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel textAlign={"justify"} pb={4}>
          Ver series o películas en Netflix consume aproximadamente 1 GB por
          hora cuando se usa la definición de video estándar y hasta 3 GB por
          hora para el video en HD. La descarga y el streaming consumen
          cantidades similares de datos.
          <br />
          <br />
          Si desea conocer más sobre esto puede visitar{" "}
          <a
            target="_blank"
            href="https://help.netflix.com/es/node/87#:~:text=Ver%20series%20o%20pel%C3%ADculas%20en,consumen%20cantidades%20similares%20de%20datos."
          >
            ¿Cómo controlo la cantidad de datos que usa Netflix?
          </a>
        </AccordionPanel>
      </AccordionItem>

      <AccordionItem>
        <h2>
          <AccordionButton _expanded={{ bg: "blue.400", color: "white" }}>
            <Box flex="1" textAlign="left">
              ¿Qué debo hacer si tengo problemas con el internet?
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel textAlign={"justify"} pb={4}>
          Puede contactarnos a trav&eacute;s del teléfono 0254-6001400 o a{" "}
          <Image
            width={200}
            height={15}
            src="/images/soporte_residencial.png"
            alt="soporteresidencial arroba(@) galup.com.ve"
          />
          <br />
          <br />
          Cualquier incidencia técnica que requiera la visita de un técnico de
          la Empresa al domicilio del cliente, por causas no imputables a
          Comunicaciones Galup será facturada independientemente.
        </AccordionPanel>
      </AccordionItem>

      <AccordionItem>
        <h2>
          <AccordionButton _expanded={{ bg: "blue.400", color: "white" }}>
            <Box flex="1" textAlign="left">
              ¿Cómo puedo controlar mi consumo?
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel textAlign={"justify"} pb={4}>
          <UnorderedList>
            <ListItem>
              <b>
                Cambie su clave de WiFi regularme y evite compartirla con
                terceros. Además de los graves fallos de seguridad que eso
                implica, éstos podrían consumir todos sus megas disponibles y
                reducir notablemente su experiencia de navegación.
              </b>
            </ListItem>
            <ListItem>
              Si usa Windows 10 configure su conexión como de Uso Medido.{" "}
              <a href="https://support.microsoft.com/es-ve/help/4028458/windows-metered-connections-in-windows-10">
                Instrucciones aqui.
              </a>
            </ListItem>
            <ListItem>
              Si usa Youtube para escuchar música cambie la calidad de video por
              una menor o busque canciones "Solo Audio".
            </ListItem>
            <ListItem>
              Si utiliza programas de Torrent cierre el Software después de
              descargar su archivo.
            </ListItem>
            <ListItem>
              Apague su computador cuando no lo esté utilizando.
            </ListItem>
          </UnorderedList>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
}
function FaqsEmprendedor() {
  return (
    <Accordion allowToggle>
      {FAQS_ITEMS_EMPRENDEDOR.map((faqItem) => (
        <AccordionItem key={faqItem.title}>
          <h2>
            <AccordionButton _expanded={{ bg: "blue.400", color: "white" }}>
              <Box flex="1" textAlign="left">
                {faqItem.title}
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel textAlign={"justify"} pb={4}>
            {faqItem.content}
          </AccordionPanel>
        </AccordionItem>
      ))}
      <AccordionItem>
        <h2>
          <AccordionButton _expanded={{ bg: "blue.400", color: "white" }}>
            <Box flex="1" textAlign="left">
              ¿La velocidad será reducida al superar la cuota de mi plan?
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel textAlign={"justify"} pb={4}>
          La velocidad de navegación es reducida con la finalidad de evitar la
          sobresaturación de la red; de tal forma, que todos los usuarios puedan
          disfrutar del servicio con una velocidad promedio estable y de
          calidad. La velocidad bajará por: <br /> <br />
          <UnorderedList>
            <ListItem>
              El tipo de plan, dado que si bien puedes navegar ilimitadamente,
              una vez que consumas tu cuota de navegación incluida en tu plan,
              comenzarás a navegar a una velocidad menor. Recuerda, esto sucede
              sólo si llegas a dicha cuota.
            </ListItem>
          </UnorderedList>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
}

export default function Faqs() {
  return (
    <Layout>
      <Box bg={useColorModeValue("gray.100", "gray.700")} pt={230}>
        <Container maxW={"8xl"}>
          <Stack direction={"column"} spacing="24px">
            <Box p={4} alignItems={"center"}>
              <Stack p={4} spacing={0} align={"center"}>
                <Heading>Preguntas Frecuentes</Heading>
              </Stack>
              <Tabs size="sm" isFitted align="center" isLazy>
                <TabList>
                  <Tab>Servicio</Tab>
                  <Tab>Instalación</Tab>
                  <Tab>Plan Hogar</Tab>
                  <Tab>Plan Emprendedor</Tab>
                </TabList>

                <TabPanels>
                  <TabPanel>
                    <FaqsServicio />
                  </TabPanel>
                  <TabPanel>
                    <FaqsInstalacion />
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
      </Box>
    </Layout>
  );
}

const FAQS_ITEMS_SERVICIO = [
  {
    title: "¿El servicio ofrecido es Internet Satelital?",
    content: `No. Muchos de nuestros servicios son entregados vía inalámbrica (también podemos conectarte a través de Fibra Óptica), con antenas transmisoras y receptoras, no utilizamos satélites, sólo conexiones terrestres.`,
  },
  {
    title: "¿Cuánto cuesta cada plan?",
    content: `El costo mensual del internet se determina en función del tipo de plan que desees contratar (Residencial, Emprendedor o Corporativo). Cada plan cuenta con características diferentes según tus necesidades. Visita la sección Internet o contáctanos para mayor información.`,
  },
  {
    title: "¿Cuántos dispositivos puedo conectar al internet?",
    content: `Puedes conectar todos los que quieras. Pero ten presente que a mayor cantidad de equipos conectados, la velocidad para cada uno de ellos se reducirá. Necesitarás contratar un plan de mayor capacidad o notarás lentitud en el internet.`,
  },
  {
    title: "¿Afecta la lluvia?",
    content: `No, la lluvia no hará caer su servicio, sin embargo las lluvias torrenciales pueden generar otro tipo de inconvenientes fuera de nuestro control.`,
  },
  {
    title: "¿Qué pasa si se va luz?",
    content: `Todos nuestros repetidores principales cuentan con distintos medios de generación de energía, entre los que destacan plantas eléctricas, paneles solares y/o UPS. Nuestra red está diseñada para permanecer activa con apagones de hasta más de 72 horas por lo que su servicio no debe verse afectado. Los repetidores en zonas residenciales pueden tener menor capacidad de generación.`,
  },
  {
    title: "Política de uso aceptable",
    content: `Si la cuota de tu plan es alcanzada antes del corte de facturación, podrás continuar haciendo uso del servicio de datos durante el resto del periodo de facturación, con una velocidad reducida, misma a la que podrás seguir navegando sin costo adicional. 
      Esta graduación en el ancho de banda utilizado para navegar no implica restricción o limitante alguna en el acceso a las diversas aplicaciones, servicios, contenidos o sitios Web que desees utilizar; por lo que podrás continuar navegando, utilizando tus aplicaciones, descargando contenidos y accediendo a los sitios en Internet de tu preferencia.`,
  },
  {
    title: "Condiciones de Uso",
    content: `La Empresa podrá suspender un servicio a su entera discreción y sin necesidad de notificación previa, si el mismo violase de cualquier forma nuestras políticas de uso aceptable.`,
  },
];

const FAQS_ITEMS_INSTALACION = [
  {
    title: "¿Cuánto cuesta la instalación?",
    content: `Cada instalación representa un reto diferente, por lo que en cada caso es necesario hacer una inspección técnica en el domicilio para determinar las características de la instalación y preparar un presupuesto acorde a los materiales y equipos requeridos. Si desea un presupuesto estimado según su ubicación por favor contáctanos.`,
  },
  {
    title: "¿Cuánto se demora una nueva instalación?",
    content: `El proceso de ventas, factibilidad e instalación varía entre el tipo de servicio contratado, pero regularme será entre 5 y 15 días hábiles.`,
  },
  {
    title: "¿Qué incluye la instalación?",
    content: `Toda instalación incluye una o más antenas receptoras (CPE), cableado, base y mástil de soporte (sólo si es necesario), y todos los materiales necesarios para la puesta en funcionamiento del servicio.`,
  },
  {
    title: "¿Los equipos son propios?",
    content: `No. Salvo cuando se indique lo contrario los equipos instalados en el domicilio pertenecen a la empresa.`,
  },
  {
    title: "¿Podemos pagar el Internet entre varios?",
    content: `No, cada contrato va afiliado a un único suscriptor.`,
  },
];

const FAQS_ITEMS_HOGAR = [
  {
    title: "¿El servicio residencial es ilimitado?",
    content: `Todos nuestros planes son de consumo ilimitado, sin embargo en aras de garantizar un uso apropiado de la red, al exceder la cuota de tráfico (carga y descarga) predefinida en un mismo período de facturación se aplicará una reducción a su velocidad de navegación hasta que culmine dicho período. La cuota de los planes Hogar es de 1.3TB/mes`,
  },
  {
    title: "¿Qué tán rápidos son los servicios residenciales?",
    content: `	Aunque la mayor parte del tiempo podrás disfrutar de toda la velocidad del plan, ésta no está garantizada. En servicios residenciales aplicamos el método Esfuerzo Razonable (Reasonable Effort).
  
      En horarios de alto tráfico o durante períodos especiales es normal sentir una ligera disminución en su velocidad de navegación.`,
  },
  {
    title: "¿Dónde puedo consultar mi cupo disponible?",
    content: `En nuestro sitio web, en la sección de "Uso de Datos" podrá consultar su cupo disponible, la información será actualizada cada 10 minutos.`,
  },
];

const FAQS_ITEMS_EMPRENDEDOR = [
  {
    title: "¿El plan Emprendedor es ilimitado?",
    content: `Sí, los planes emprendedores tienen consumo ilimitado. Sin embargo, en aras de garantizar un uso apropiado de la red, al exceder la cuota de tráfico (carga y descarga) predefinida en un mismo período de facturación se aplicará una reducción a su velocidad de navegación hasta que culmine dicho período.
      Los planes emprendedores traen una cuota de 2.0TeraBytes (pueden ser aproximadamente unas 900 películas en Netflix).`,
  },
  {
    title: "¿Qué garantía de velocidad tendré?",
    content: `Los planes emprendedores se prestan bajo la modalidad de Mejor Esfuerzo (Best Effort) por lo que durante las horas de alto tráfico podría presentarse una ligera disminución en la velocidad de su servicio.`,
  },
  {
    title: "¿Puedo compartir mi internet con el vecino?",
    content: `Dentro de los términos de uso de nuestro contrato, se establece lo siguiente: "El servicio será destinado únicamente para su uso en el domicilio particular del cliente y deberá ser utilizado en el lugar donde el equipo ha sido instalado".`,
  },
  {
    title: "¿Puedo Instalar internet emprendedor en una casa?",
    content: `Sí, puede instalar un servicio de tipo Emprendedor en su residencia.`,
  },
  {
    title: "¿Necesito un RIF o contrato de arrendamiento?",
    content: `Sí, el RIF vigente es un requisito obligatorio para poder contratar el servicio. Se aceptan RIF personales.`,
  },
  {
    title: "¿Incluye IP pública fija?",
    content: `No, los planes emprendedores no incluyen direccionamiento IP público, sin embargo puede solicitar la asignación de hasta 1 dirección IP pública por un cargo mensual adicional, dicha solicitud será sometida a revisión por nuestro Departamento técnico y administrativo.`,
  },
];
