import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
} from "@chakra-ui/react";
import {
  HamburgerIcon,
  CloseIcon,
  AddIcon,
  MoonIcon,
  SunIcon,
} from "@chakra-ui/icons";

const Links = [
  "Inicio",
  "Sobre nosotros",
  "Precios",
  "Preguntas Frecuentes",
  "Contacto",
];

const NavLink = ({ children }) => (
  <Link
    px={2}
    py={1}
    rounded={"md"}
    _hover={{
      textDecoration: "none",
      bg: useColorModeValue("gray.200", "gray.700"),
    }}
    href={"#"}
  >
    {children}
  </Link>
);

export default function withAction() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={"center"}>
            <Box>Logo</Box>
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
            >
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </HStack>
          </HStack>
          <Flex alignItems={"center"}>
            <Menu isLazy>
              <MenuButton
                as={Button}
                rounded={"full"}
                cursor={"pointer"}
                variant={"ghost"}
                minW={0}
                display={{ md: "inline-flex" }}
                fontSize={"sm"}
                fontWeight={600}
                color={"white"}
                bg={"pink.400"}
                _hover={{
                  bg: "pink.300",
                }}
              >
                Zona de clientes
              </MenuButton>
              <MenuList>
                <MenuItem>
                  <Link href="/clientes/consulta-saldo">Consulta de saldo</Link>
                </MenuItem>
                <MenuItem>
                  <Link href="/clientes/reportar-pago">Reportar pago</Link>
                </MenuItem>
                <MenuItem>
                  <Link href="/clientes/uso-datos">Uso de datos</Link>
                </MenuItem>
                <MenuItem>
                  <Link href="/clientes/zona-wifi">Zona WiFi Interlup</Link>
                </MenuItem>
                <MenuItem>
                  <Link href="/clientes/speedtest">Speedtest</Link>
                </MenuItem>
              </MenuList>
            </Menu>
            <Button
              fontSize={"sm"}
              fontWeight={400}
              variant={"link"}
              href={"#"}
              onClick={toggleColorMode}
            >
              {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
            </Button>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}
