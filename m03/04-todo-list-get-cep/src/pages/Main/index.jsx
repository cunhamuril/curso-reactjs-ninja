import React from "react";

import { Container } from "./styles";

import Form from "../../components/Form";
import TodosList from "../../components/TodosList";
import Filter from "../../components/Filter";

const Main = () => (
  <Container>
    <h3>TO DO LIST - REDUX EXAMPLE</h3>
    <Form />
    <TodosList />
    <Filter />
  </Container>
);

export default Main;
