import { SunIcon, MoonIcon } from '@chakra-ui/icons';
import { Button, useColorMode, useMediaQuery } from '@chakra-ui/react';

function ToggleColorMode() {
  const [isSmallerThan700] = useMediaQuery('(max-width:700px)');
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Button
      background="none"
      onClick={() => toggleColorMode()}
      size="lg"
      ml={['0.5rem', '0.5rem', '0.5rem', '2rem']}
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
