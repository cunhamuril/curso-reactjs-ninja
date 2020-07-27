import React, { useState, useContext } from 'react';
import { AccountCircle } from '@material-ui/icons';
import {
  AppBar,
  IconButton,
  Typography,
  Menu,
  MenuItem,
} from '@material-ui/core';

import { AuthContext } from '../../contexts/Auth';

import { LogoContainer, Logo, Toolbar } from './styles';

const Header = () => {
  const [anchorElement, setAnchorElement] = useState(null);

  const { logout, user } = useContext(AuthContext);

  const handleOpenMenu = (e) => {
    setAnchorElement(e.target);
  };

  const handleClose = () => {
    setAnchorElement(null);
  };

  return (
    <AppBar>
      <Toolbar>
        <LogoContainer>
          <Logo />
        </LogoContainer>

        <Typography>Olá, {user.firstName}</Typography>

        <IconButton color="inherit" onClick={handleOpenMenu}>
          <AccountCircle />
        </IconButton>

        <Menu
          open={!!anchorElement}
          onClose={handleClose}
          anchorEl={anchorElement}
        >
          <MenuItem onClick={logout}>Sair</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
