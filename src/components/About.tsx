import {
  Flex,
  HStack,
  Image,
  useColorMode,
  Link,
  Text,
  useMediaQuery,
} from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';
import PageLayout from './PageLayout';
import me from '../img/me.png';

function About() {
  const { colorMode } = useColorMode();
  const [isSmalerThan1200] = useMediaQuery('(max-width:1200px)');
  return (
    <PageLayout>
      <Flex
        minH="600px"
        mx="auto"
        maxW="1200px"
        flexDir={isSmalerThan1200 ? 'column' : 'row'}
        alignItems={isSmalerThan1200 ? 'center' : ''}
      >
        <HStack
          height="100%"
          minW="20%"
          borderRight={isSmalerThan1200 ? '0' : '2px solid'}
          borderBottom={isSmalerThan1200 ? '2px solid' : '0'}
          mb={isSmalerThan1200 ? '2rem' : '0'}
          borderColor="gray.200"
        >
          <Flex
            mb="auto"
            mr={isSmalerThan1200 ? '0' : '2rem'}
            flexDir="column"
            align="center"
            textAlign="center"
          >
            <Image
              src={me}
              boxSize="200px"
              borderRadius="full"
              objectFit="cover"
            />
            <Text
              fontSize="1.42rem"
              color={colorMode === 'dark' ? 'gray.400' : ''}
              textAlign="center"
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
          </Flex>
        </HStack>
        <Flex flexGrow="1" flexDir="column" ml="2rem">
          <Text
            maxW="800px"
            fontSize="1.2rem"
            fontFamily="Inter"
            color={colorMode === 'dark' ? 'gray.400' : '#737373"'}
          >
            I'm a United States based full-stack engineer with a deep passion
            for programming, creative thinking, and problem solving. These days
            I'm predomintaley working with React / TypeScript on the front end
            and Express / Node.JS on the backend. When I'm not hunched over in
            front of my computer I'm likely hunched over my guitar instead!
            <br />
            <br />
            In pursuit of consistent development of my craft, I'm continously
            working on various full-stack projects in order to hone my skills
            and integerate learned technologies into my workflow. Currently, I'm
            working on a full-stack e-commerce application which utilizes
            GraphQL, Prisma, TypeScript and more! You can check it out{' '}
            <Link
              color="blue.500"
              href="https://github.com/matthew-08/Shop_Frontend"
            >
              here
            </Link>{' '}
            or check out a list of my projects
            <Link to="/projects" color="blue.500" as={NavLink}>
              {' '}
              here{' '}
            </Link>
            .
            <br />
            <br />
            Outside of progamming I love language learning (currently focusing
            on Vietnamese!), education, and jazz guitar. I'm an avid member of
            <Link
              color="blue.500"
              href="https://www.theodinproject.com/dashboard"
            >
              {' '}
              The Odin Project{' '}
            </Link>{' '}
            community and try to spend time every day offering assistance to
            budding software developers in the community's Discord chat.
          </Text>
        </Flex>
      </Flex>
    </PageLayout>
  );
}

export default About;
