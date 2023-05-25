import {
  Flex,
  Heading,
  useColorMode,
  Text,
  VStack,
  HStack,
  IconButton,
} from '@chakra-ui/react';
import { Icon } from '@iconify/react';
import { EmailIcon } from '@chakra-ui/icons';
import { Link } from 'react-router-dom';
import PageLayout from './PageLayout';

const mailto = 'mailto:matthewjcrosby1@gmail.com';

function HomePage() {
  const { colorMode } = useColorMode();
  return (
    <PageLayout>
      <Flex align="center" maxW="800px" height="100%">
        <VStack align="flex-start">
          <Heading
            fontFamily="Inter"
            color={colorMode === 'dark' ? 'white' : '#404040'}
          >
            Matthew Crosby
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
              as="a"
              href="https://github.com/matthew-08"
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
              onClick={(e) => {
                e.preventDefault();
                window.location.href = mailto;
              }}
              icon={<EmailIcon boxSize="3rem" />}
            />
            <IconButton
              as="a"
              href="https://www.linkedin.com/in/matthewjcsby"
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
              >
                TypeScript, JavaScript, React, Redux, ChakraUI, NodeJS, Express,
                Jest, PostgreSQL, Redis, Firebase, Prisma, SQL, GraphQL,
                HTML/CSS, Git, Webpack, AWS
              </Text>
            </Flex>
          </HStack>
        </VStack>
      </Flex>
    </PageLayout>
  );
}

export default HomePage;
