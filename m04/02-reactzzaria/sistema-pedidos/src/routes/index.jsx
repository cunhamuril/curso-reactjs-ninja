import React, { lazy, Suspense, useEffect, useContext } from 'react';
import { Route, Switch, useLocation, Redirect } from 'react-router-dom';
import { LinearProgress } from '@material-ui/core';

import firebase from '../services/firebase';
import { AuthContext } from '../contexts/Auth';

// Com o lazy Suspense, as páginas vão carregar em arquivos separados,
// carregado apenas se for necessário. Com isso melhorando a performance
const MainPage = lazy(() => import('../pages/MainPage'));
const Login = lazy(() => import('../pages/Login'));

export default function () {
  const { setIsUserLoggedIn, setUser, isUserLoggedIn } = useContext(
    AuthContext
  );

  const location = useLocation();

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      console.log('Dados do usuário: ', user);

      setIsUserLoggedIn(!!user);
      setUser(user);
    });
  }, [setIsUserLoggedIn, setUser]);

  if (isUserLoggedIn) {
    if (location.pathname === '/login') {
      return <Redirect to="/" />;
    }
  } else {
    if (location.pathname !== '/login') {
      return <Redirect to="/login" />;
    }
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
