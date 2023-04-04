import { Flex, VStack, Text } from '@chakra-ui/react';
import { Icon } from '@iconify/react';

function Footer() {
  return (
    <Flex mt="auto">
      <VStack m="auto" pt="1rem">
        <Icon
          icon="radix-icons:github-logo"
          width="2rem"
          color="gray"
          cursor="pointer"
        />
        <Text m="auto" textAlign="center">
          © Matthew Crosby 2023.
          <br />
          Made with Vite and ChakraUI
        </Text>
      </VStack>
    </Flex>
  );
}

export default Footer;
