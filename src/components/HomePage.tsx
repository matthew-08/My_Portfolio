import { Flex, Heading } from '@chakra-ui/react';
import React from 'react';

function HomePage() {
  return (
    <Flex as="main" width="100%" justifyContent="center">
      <Flex align="center" maxW="600px">
        <Heading>Hello! 🤘</Heading>
      </Flex>
    </Flex>
  );
}

export default HomePage;
