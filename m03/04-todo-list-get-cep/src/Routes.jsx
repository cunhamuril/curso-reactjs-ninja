import React from "react";
import { Route, Switch } from "react-router-dom";

import ToDoList from "./pages/ToDoList";
import SearchCep from "./pages/SearchCep";

const Routes = () => (
  <Switch>
    <Route path="/" exact component={ToDoList} />
    <Route path="/buscacep" exact component={SearchCep} />
  </Switch>
);

export default Routes;
