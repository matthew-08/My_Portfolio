import { HamburgerIcon } from '@chakra-ui/icons';
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  Button,
  Flex,
  IconButton,
} from '@chakra-ui/react';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { v4 as uuid } from 'uuid';

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
function MobileMenu() {
  return (
    <Flex ml="auto">
      <Menu>
        <MenuButton as={IconButton} boxSize="50px" icon={<HamburgerIcon />} />
        <MenuList minWidth="300px" fontSize="2rem">
          {navOptions.map((option) => {
            return (
              <MenuItem as={NavLink} key={uuid()} to={option.link}>
                {option.optionName}
              </MenuItem>
            );
          })}
        </MenuList>
      </Menu>
    </Flex>
  );
}

export default MobileMenu;
