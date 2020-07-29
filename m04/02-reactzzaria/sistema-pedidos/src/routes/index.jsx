import React, { lazy, Suspense, useEffect, useContext, useState } from 'react';
import { Route, Switch, useLocation, Redirect } from 'react-router-dom';
import { LinearProgress } from '@material-ui/core';

import firebase from '../services/firebase';
import { AuthContext } from '../contexts/Auth';

// Com o lazy Suspense, as páginas vão carregar em arquivos separados,
// carregando apenas se for necessário. Com isso melhorando a performance
const Main = lazy(() => import('../pages/Main'));
const Login = lazy(() => import('../pages/Login'));

const ChoosePizzaSize = lazy(() => import('../pages/ChoosePizzaSize'));
const ChoosePizzaFlavours = lazy(() => import('../pages/ChoosePizzaFlavours'));

export const InternalPages = () => (
  <Suspense fallback={<LinearProgress />}>
    <Switch>
      <Route path="/" exact component={ChoosePizzaSize} />
      <Route path="/sabores-da-pizza" exact component={ChoosePizzaFlavours} />
    </Switch>
  </Suspense>
);

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
    return <Redirect to="/" />;
  }

  if (!isUserLoggedIn && location.pathname !== '/login') {
    return <Redirect to="/login" />;
  }

  return (
    <Suspense fallback={<LinearProgress />}>
      <Switch>
        <Route path="/" component={Main} />
        <Route path="/login" exact component={Login} />
      </Switch>
    </Suspense>
  );
}
