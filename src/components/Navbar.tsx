import React from 'react';
import { HStack, List, ListItem, useColorMode } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';
import { v4 as uuid } from 'uuid';
import { mode } from '@chakra-ui/theme-tools';
import ToggleColorMode from './ToggleColorMode';

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
    optionName: 'Contact',
    link: '/contact',
  },
  {
    optionName: 'Resume',
    link: '',
  },
];

function Navbar() {
  const { colorMode } = useColorMode();
  return (
    <HStack
      as="nav"
      width="100%"
      align="center"
      padding="2rem"
      borderBottom="1px solid"
      borderColor="gray.400"
    >
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
      <ToggleColorMode />
    </HStack>
  );
}

export default Navbar;
