import { SunIcon, MoonIcon } from '@chakra-ui/icons';
import { Button, useColorMode } from '@chakra-ui/react';

function ToggleColorMode() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Button
      ml="5rem"
      background="none"
      onClick={() => toggleColorMode()}
      size="lg"
    >
      {colorMode === 'dark' ? (
        <MoonIcon boxSize="2rem" />
      ) : (
        <SunIcon boxSize="2rem" />
      )}
    </Button>
  );
}

export default ToggleColorMode;
