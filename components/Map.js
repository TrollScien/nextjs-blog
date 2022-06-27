import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  AspectRatio,
  Button,
  Tooltip,
  Text,
  IconButton,
} from "@chakra-ui/react";
import { MdLocationPin } from "react-icons/md";
export default function BasicUsage() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Tooltip
        label={"San Felipe, Yaracuy. Venezuela"}
        closeOnClick={false}
        hasArrow
      >
        <IconButton
          aria-label="mapa"
          variant="ghost"
          size="lg"
          fontSize="3xl"
          icon={<MdLocationPin />}
          _hover={{
            bg: "red.500",
            color: "white",
          }}
          isRound
          onClick={onOpen}
        />
      </Tooltip>

      <Modal isOpen={isOpen} onClose={onClose} size={"2xl"}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Nuestra ubicación</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>
              Avenida 7 entre calles 12 y 13. CC Carafa, Planta Baja, San Felipe
              3201, Yaracuy
            </Text>
            <AspectRatio ratio={16 / 9}>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3925.0330464375415!2d-68.73984668449478!3d10.339240492619055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e80cf4a23b6501d%3A0xa37187318988990a!2sComunicaciones%20Galup%2C%20C.A.!5e0!3m2!1ses!2sve!4v1656091068739!5m2!1ses!2sve"></iframe>
            </AspectRatio>
          </ModalBody>

          <ModalFooter>
            <Button variant="ghost" mr={3} onClick={onClose}>
              Cerrar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
