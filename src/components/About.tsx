import {
  Flex,
  HStack,
  Image,
  VStack,
  Text,
  useColorMode,
  Heading,
  Link,
} from '@chakra-ui/react';
import React from 'react';
import PageLayout from './PageLayout';
import me from '../img/me.png';

function About() {
  const { colorMode } = useColorMode();
  return (
    <PageLayout>
      <Flex minH="600px" mx="auto" maxW="1200px">
        <HStack
          height="100%"
          minW="20%"
          borderRight="2px solid"
          borderColor="gray.200"
        >
          <VStack mb="auto" mr="2rem">
            <Image
              src={me}
              boxSize="200px"
              borderRadius="full"
              objectFit="cover"
            />
            <Text
              fontSize="1.42rem"
              color={colorMode === 'dark' ? 'gray.400' : ''}
            >
              Matthew Crosby
            </Text>
            <Text
              fontSize="1.2rem"
              fontWeight="100"
              color={colorMode === 'dark' ? 'gray.400' : 'gray.700'}
            >
              Full Stack Developer
            </Text>
          </VStack>
        </HStack>
        <Flex flexGrow="1" flexDir="column" ml="2rem">
          <Text
            maxW="800px"
            fontSize="1.2rem"
            fontFamily="Inter"
            color={colorMode === 'dark' ? 'gray.400' : '#737373"'}
          >
            I'm a United States based full-stack engineer with a deep passion
            for programming, creative-thinking, and problem solving. These days
            I'm predomintaley working with React / TypeScript on the front end
            and Express / Node.JS on the backend. When I'm not hunched over in
            front of my computer I'm likely hunched over my guitar instead!
            <br />
            <br />
            In pursuit of consistent development in my craft, I'm continously
            working on various full-stack projects in order to hone my skills
            and integerate learned technologies into my workflow. Currently, I'm
            working on a full-stack e-commerce application which utilizes
            GraphQL, Prisma, Typescript and more! You can check it out{' '}
            <Link color="blue.500">here</Link> or check out all of my projects
            <Link color="blue.500"> here</Link>.
          </Text>
        </Flex>
      </Flex>
    </PageLayout>
  );
}

export default About;
