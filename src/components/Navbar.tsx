import {
  HStack,
  List,
  ListItem,
  useColorMode,
  useMediaQuery,
} from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';
import { v4 as uuid } from 'uuid';
import ToggleColorMode from './ToggleColorMode';
import MobileMenu from './MobileMenu';

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
    link: 'https://drive.google.com/file/d/1VX6icKR_T4u5IUoZV1vXI45uOVppAlHz/view?usp=sharing',
  },
];

function Navbar() {
  const [isSmallerThan700] = useMediaQuery('(max-width: 700px)');
  const { colorMode } = useColorMode();
  return (
    <HStack
      as="nav"
      width="100%"
      align="center"
      padding={isSmallerThan700 ? '1rem' : '2rem'}
      borderBottom="1px solid"
      borderColor="gray.400"
      ml="2rem"
    >
      {isSmallerThan700 ? (
        <MobileMenu />
      ) : (
        <HStack gap="1rem" as={List} spacing="2rem" ml="auto" mr="auto">
          {navOptions.map((option) => {
            return (
              <ListItem
                key={uuid()}
                color={colorMode === 'dark' ? 'white' : 'gray.700'}
                as={NavLink}
                to={option.link}
                fontSize="2xl"
              >
                {option.optionName}
              </ListItem>
            );
          })}
        </HStack>
      )}
      <ToggleColorMode />
    </HStack>
  );
}

export default Navbar;
