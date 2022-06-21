import { useColorMode, IconButton } from "@chakra-ui/react";
import { Icon } from "@chakra-ui/react";
import { BsSun, BsMoonStarsFill } from "react-icons/bs";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";

export const DarkModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";
  return (
    <IconButton
      position="fixed"
      top={4}
      right={4}
      icon={isDark ? <SunIcon /> : <Icon as={BsMoonStarsFill} />}
      aria-label="Toggle Theme"
      colorScheme="green"
      onClick={toggleColorMode}
    />
  );
};
