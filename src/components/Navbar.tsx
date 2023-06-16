import {
  Flex,
  Heading,
  HStack,
  Image,
  List,
  ListItem,
  useColorMode,
  useMediaQuery,
} from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';
import { v4 as uuid } from 'uuid';
import ToggleColorMode from './ToggleColorMode';
import MobileMenu from './MobileMenu';
import logo from '../img/logo.svg';

const navOptions = [
  {
    optionName: 'Home',
    link: '/',
  },
  {
    optionName: 'About',
    link: '/about',
  },
  {
    optionName: 'Projects',
    link: '/projects',
  },
  {
    optionName: 'Resume',
    link: 'https://drive.google.com/file/d/12ld9PBQ0Or2vqe8Y4-S5BXrZQ5C7WnJy/view?usp=sharing',
  },
];

function Navbar() {
  const [isSmallerThan700] = useMediaQuery('(max-width: 700px)');
  const { colorMode } = useColorMode();
  return (
    <Flex
      as="nav"
      minW="100%"
      align="center"
      padding={isSmallerThan700 ? '1rem' : '0.5rem'}
      px={isSmallerThan700 ? '0.5rem' : '3.5rem'}
      borderBottom="1px solid"
      borderColor="gray.400"
      justify="space-between"
    >
      <Flex align="center" gap="0.5rem">
        <Heading
          fontFamily="Inter"
          fontSize="2.5rem"
          color={colorMode === 'light' ? '#404040' : 'white'}
        >
          MC
        </Heading>
        <Image
          src={logo}
          width="60px"
          filter={
            colorMode === 'dark'
              ? 'invert(100%) sepia(0%) saturate(7500%) hue-rotate(272deg) brightness(100%) contrast(104%)'
              : ''
          }
        />
      </Flex>
      {isSmallerThan700 ? (
        <MobileMenu />
      ) : (
        <HStack gap="1rem" as={List} spacing="2rem">
          {navOptions.map((option) => {
            return (
              <ListItem
                key={uuid()}
                color={colorMode === 'dark' ? 'white' : '#404040'}
                as={NavLink}
                to={option.link}
                fontSize="20px"
              >
                {option.optionName}
              </ListItem>
            );
          })}
        </HStack>
      )}
      <ToggleColorMode />
    </Flex>
  );
}

export default Navbar;
