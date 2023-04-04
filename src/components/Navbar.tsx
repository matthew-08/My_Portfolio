import React from 'react';
import { HStack, List, ListItem } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';
import { v4 as uuid } from 'uuid';
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
    optionName: 'Resume',
    link: '',
  },
];

function Navbar() {
  return (
    <HStack as="nav">
      <List>
        {navOptions.map((option) => {
          return (
            <ListItem key={uuid()} as={NavLink} to={option.link}>
              {option.optionName}
            </ListItem>
          );
        })}
      </List>
      <ToggleColorMode />
    </HStack>
  );
}

export default Navbar;
