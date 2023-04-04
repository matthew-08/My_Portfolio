import { SunIcon, MoonIcon } from '@chakra-ui/icons';
import { Button, useColorMode } from '@chakra-ui/react';
import React from 'react';

function ToggleColorMode() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Button ml="5rem" background="none" onClick={() => toggleColorMode()}>
      {colorMode === 'dark' ? (
        <MoonIcon boxSize={17} />
      ) : (
        <SunIcon boxSize={17} />
      )}
    </Button>
  );
}

export default ToggleColorMode;
