import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import { AccountCircle } from '@material-ui/icons';
import {
  AppBar,
  IconButton,
  Typography,
  Menu,
  MenuItem,
  Grid,
  withStyles,
} from '@material-ui/core';

import { AuthContext } from '../../contexts/Auth';

import { LogoContainer, Logo, Toolbar, Content } from './styles';

/**
 * withStyles from Material UI
 */
const style = (theme) => {
  return {
    main: theme.mixins.toolbar,
  };
};

const Spacer = withStyles(style)(({ classes }) => (
  <div className={classes.main} />
));

function Main() {
  const [anchorElement, setAnchorElement] = useState(null);

  const { logout, user } = useContext(AuthContext);

  const userName = user.displayName.split(' ')[0];

  const handleOpenMenu = (e) => {
    setAnchorElement(e.target);
  };

  const handleClose = () => {
    setAnchorElement(null);
  };

  return (
    <>
      <AppBar>
        <Toolbar>
          <LogoContainer>
            <Logo />
          </LogoContainer>

          <Typography>Olá, {userName}</Typography>

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

      <Spacer />

      <Content>
        <Grid container justify="center">
          <Grid item>
            <Typography variant="h3">
              O que vai ser hoje, {userName}?
            </Typography>
          </Grid>
        </Grid>
      </Content>
    </>
  );
}

Spacer.propTypes = {
  classes: PropTypes.object,
};

export default Main;
