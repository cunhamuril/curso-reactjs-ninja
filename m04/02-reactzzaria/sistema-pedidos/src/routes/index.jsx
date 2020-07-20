import React, { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import { LinearProgress } from '@material-ui/core';

// Com o lazy Suspense, as páginas vão carregar em arquivos separados, carregado apenas se for necessário
const MainPage = lazy(() => import('../pages/MainPage'));
const Login = lazy(() => import('../pages/Login'));

export default function () {
  return (
    <Suspense fallback={<LinearProgress />}>
      <Switch>
        <Route path="/" exact component={MainPage} />
        <Route path="/login" component={Login} />
      </Switch>
    </Suspense>
  );
}
