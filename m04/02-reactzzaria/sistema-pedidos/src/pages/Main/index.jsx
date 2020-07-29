import React, { lazy, Suspense } from 'react';
import PropTypes from 'prop-types';
import { withStyles, LinearProgress } from '@material-ui/core';
import { Switch, Route } from 'react-router-dom';

import { Header } from '../../components';

import { Content } from './styles';

const ChoosePizzaSize = lazy(() => import('../ChoosePizzaSize'));

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
        <Suspense fallback={<LinearProgress />}>
          <Switch>
            <Route path="/" exact component={ChoosePizzaSize} />
          </Switch>
        </Suspense>
      </Content>
    </>
  );
}

Spacer.propTypes = {
  classes: PropTypes.object,
};

export default Main;
