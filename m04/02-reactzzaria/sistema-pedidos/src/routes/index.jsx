import React, { lazy, Suspense, useEffect, useContext, useState } from 'react';
import { Route, Switch, useLocation, Redirect } from 'react-router-dom';
import { LinearProgress } from '@material-ui/core';

import firebase from '../services/firebase';
import { AuthContext } from '../contexts/Auth';

// Com o lazy Suspense, as páginas vão carregar em arquivos separados,
// carregado apenas se for necessário. Com isso melhorando a performance
const MainPage = lazy(() => import('../pages/MainPage'));
const Login = lazy(() => import('../pages/Login'));

export default function () {
  const [didCheckUserIn, setDidCheckUserIn] = useState(false);

  const location = useLocation();
  const { setIsUserLoggedIn, setUser, isUserLoggedIn, logout } = useContext(
    AuthContext
  );

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      console.log('Dados do usuário: ', user);

      setIsUserLoggedIn(!!user);
      setUser(user);

      setDidCheckUserIn(true);
    });

    window.logout = logout; // TEMP
  }, [setIsUserLoggedIn, setUser, logout]);

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
        <Route path="/" exact component={MainPage} />
        <Route path="/login" component={Login} />
      </Switch>
    </Suspense>
  );
}
