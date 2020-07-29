import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core';

import { Header } from '../../components';
import { InternalPages } from '../../routes';

import { Content } from './styles';

/**
 * withStyles from Material UI
 */
const style = (theme) => ({
  main: theme.mixins.toolbar,
});

const Spacer = withStyles(style)(({ classes }) => (
  <div className={classes.main} />
));

function Main() {
  return (
    <>
      <Header />

      <Spacer />

      <Content>
        <InternalPages />
      </Content>
    </>
  );
}

Spacer.propTypes = {
  classes: PropTypes.object,
};

export default Main;
