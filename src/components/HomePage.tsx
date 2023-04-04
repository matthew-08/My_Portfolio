import {
  Flex,
  Heading,
  useColorMode,
  Text,
  VStack,
  HStack,
  IconButton,
} from '@chakra-ui/react';
import React from 'react';
import { Icon } from '@iconify/react';
import { EmailIcon } from '@chakra-ui/icons';

function HomePage() {
  const { colorMode } = useColorMode();
  return (
    <Flex as="main" width="100%" justifyContent="center">
      <Flex align="center" maxW="800px" mt="3rem" height="100%">
        <VStack align="flex-start">
          <Heading
            fontFamily="Inter"
            color={colorMode === 'dark' ? 'white' : '#404040'}
          >
            Hello! 🤘
            <br />
            I'm Matthew Crosby
          </Heading>
          <Text
            fontSize="1.2rem"
            color={colorMode === 'dark' ? 'gray.400' : ''}
          >
            I'm a full stack developer with a passion for creative thinking and
            problem solving. My current weapons of choice are anything and
            everything JavaScript, including React / TypeScript on the front-end
            and Node / Express on the backend.
            <br />
            <br />I embrace bugs!🪲 (just not the crawly ones)
          </Text>
          <HStack pt="1rem" mt="1rem" spacing="3">
            <IconButton
              aria-label="icon-button"
              size="lg"
              background="none"
              icon={<Icon icon="radix-icons:github-logo" width="3rem" />}
            />
            <IconButton
              mt="2rem"
              aria-label="icon-button"
              size="lg"
              background="none"
              icon={<EmailIcon boxSize="3rem" />}
            />
            <IconButton
              aria-label="icon-button"
              size="lg"
              background="none"
              icon={<Icon icon="mdi:linkedin" width="3rem" />}
            />
          </HStack>
          <Flex width="100%" borderBottom="1px solid" borderColor="gray.400">
            <Heading
              mt="1rem"
              mb="0.5rem"
              fontFamily="Inter"
              color={colorMode === 'dark' ? 'white' : '#404040'}
            >
              My Skillset:
            </Heading>
          </Flex>
          <HStack>
            <Flex>
              <Text
                display="inline-block"
                fontSize="1.2rem"
                color={colorMode === 'dark' ? 'gray.400' : ''}
                as="span"
              >
                TypeScript, JavaScript, React, Redux
              </Text>
            </Flex>
          </HStack>
        </VStack>
      </Flex>
    </Flex>
  );
}

export default HomePage;
