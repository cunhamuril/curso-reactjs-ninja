import React, { lazy, Suspense, useEffect, useContext, useState } from 'react';
import { Route, Switch, useLocation, Redirect } from 'react-router-dom';
import { LinearProgress } from '@material-ui/core';

import firebase from '../services/firebase';
import { AuthContext } from '../contexts/Auth';

import paths from './paths';

// Com o lazy Suspense, as páginas vão carregar em arquivos separados,
// carregando apenas se for necessário. Com isso melhorando a performance
const Main = lazy(() => import('../pages/Main'));
const Login = lazy(() => import('../pages/Login'));

const ChoosePizzaSize = lazy(() => import('../pages/ChoosePizzaSize'));
const ChoosePizzaFlavours = lazy(() => import('../pages/ChoosePizzaFlavours'));

/**
 * PATHS
 */
export { paths };

/**
 * INTERNAL PAGES
 */
export const InternalPages = () => (
  <Suspense fallback={<LinearProgress />}>
    <Switch>
      <Route path={paths.home} exact component={ChoosePizzaSize} />
      <Route
        path={paths.choosePizzaFlavours}
        exact
        component={ChoosePizzaFlavours}
      />
    </Switch>
  </Suspense>
);

/**
 * MAIN ROUTES
 */
export default function () {
  const [didCheckUserIn, setDidCheckUserIn] = useState(false);

  const location = useLocation();
  const { setIsUserLoggedIn, setUser, isUserLoggedIn } = useContext(
    AuthContext
  );

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      setIsUserLoggedIn(!!user);
      setUser({ ...user, firstName: user?.displayName?.split(' ')[0] });

      setDidCheckUserIn(true);
    });
  }, [setIsUserLoggedIn, setUser]);

  if (!didCheckUserIn) {
    return <LinearProgress />;
  }

  if (isUserLoggedIn && location.pathname === '/login') {
    return <Redirect to={paths.home} />;
  }

  if (!isUserLoggedIn && location.pathname !== '/login') {
    return <Redirect to={paths.login} />;
  }

  return (
    <Suspense fallback={<LinearProgress />}>
      <Switch>
        <Route path={paths.home} component={Main} />
        <Route path={paths.login} exact component={Login} />
      </Switch>
    </Suspense>
  );
}
