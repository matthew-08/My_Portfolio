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
import { color } from 'framer-motion';
import PageLayout from './PageLayout';
import HomePageHeading from './HomePageHeading';
import TextLink from './TextLink';

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
            problem solving. <br />
            My current weapons of choice are anything and everything JavaScript,
            including React and TypeScript on the front-end and Node / Express
            on the backend.
            <br />
          </Text>
          <HStack pt="1rem" mt="1rem" spacing="3">
            <IconButton
              color={colorMode === 'dark' ? 'white' : '#404040'}
              as="a"
              href="https://github.com/matthew-08"
              aria-label="icon-button"
              size="lg"
              background="none"
              icon={<Icon icon="radix-icons:github-logo" width="3rem" />}
            />
            <IconButton
              mt="2rem"
              color={colorMode === 'dark' ? 'white' : '#404040'}
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
              color={colorMode === 'dark' ? 'white' : '#404040'}
              as="a"
              href="https://www.linkedin.com/in/matthewjcsby"
              aria-label="icon-button"
              size="lg"
              background="none"
              icon={<Icon icon="mdi:linkedin" width="3rem" />}
            />
          </HStack>
          <HomePageHeading title="Skills" />
          <HStack mt="2rem">
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
          <HomePageHeading title="Recent Projects" />
          <HStack mt="4rem">
            <Flex fontSize="1.2rem" flexDir="column">
              <TextLink
                link="https://github.com/matthew-08/ts_ppt_text/tree/main"
                text="TypeScript PowerPoint Generator"
              />
              <TextLink
                link="https://unrealshopnext.vercel.app/"
                text="Unreal"
              />
              <TextLink
                link="https://coupon-client.vercel.app/"
                text="SuperCoupon"
              />
            </Flex>
          </HStack>
        </VStack>
      </Flex>
    </PageLayout>
  );
}

export default HomePage;
