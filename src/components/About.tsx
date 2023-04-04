import { Flex, HStack, Image, VStack } from '@chakra-ui/react';
import React from 'react';
import PageLayout from './PageLayout';
import me from '../img/me.png';

function About() {
  return (
    <PageLayout>
      <Flex minH="600px" mx="auto">
        <HStack
          height="100%"
          minW="20%"
          borderRight="2px solid"
          borderColor="gray.200"
        >
          <VStack>
            <Image
              src={me}
              boxSize="200px"
              borderRadius="full"
              objectFit="cover"
            />
          </VStack>
        </HStack>
        <HStack flexGrow="1" />
      </Flex>
    </PageLayout>
  );
}

export default About;
