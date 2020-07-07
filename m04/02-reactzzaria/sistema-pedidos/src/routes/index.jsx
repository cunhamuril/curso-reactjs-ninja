import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { MainPage, Login } from '../pages';

export default function () {
  return (
    <Switch>
      <Route path="/" exact component={MainPage} />
      <Route path="/login" component={Login} />
    </Switch>
  );
}
