import ReactCanvasConfetti from "react-canvas-confetti";
import { FormControl, Button } from "@chakra-ui/react";
const canvasStyles = {
  position: "fixed",
  pointerEvents: "none",
  width: "100%",
  height: "100%",
  top: 0,
  left: 0,
};

let animationInstance = null;

export default function Confetti({ placeholder }) {
  const makeShot = (particleRatio, opts) => {
    animationInstance &&
      animationInstance({
        ...opts,
        origin: { y: 0.7 },
        particleCount: Math.floor(200 * particleRatio),
      });
  };

  const fire = () => {
    makeShot(0.25, {
      spread: 26,
      startVelocity: 55,
    });

    makeShot(0.2, {
      spread: 60,
    });

    makeShot(0.35, {
      spread: 100,
      decay: 0.91,
      scalar: 0.8,
    });

    makeShot(0.1, {
      spread: 120,
      startVelocity: 25,
      decay: 0.92,
      scalar: 1.2,
    });

    makeShot(0.1, {
      spread: 120,
      startVelocity: 45,
    });
  };

  const getInstance = (instance) => {
    animationInstance = instance;
  };
  return (
    <FormControl id="button" float="right">
      <Button
        variant="solid"
        bg="secondary.500"
        color="white"
        type="submit"
        _hover={{}}
        onClick={fire}
      >
        {placeholder}
      </Button>
      <ReactCanvasConfetti refConfetti={getInstance} style={canvasStyles} />
    </FormControl>
  );
}
