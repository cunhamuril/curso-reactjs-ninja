import React from "react";

import { Container } from "./styles";

const Filter = () => (
  <Container>
    <h3>Mostrar</h3>
    <ul>
      <li>
        <a href="/">Todos</a>
      </li>
      <li>
        <a href="/">Finalizados</a>
      </li>
      <li>
        <a href="/">A Fazer</a>
      </li>
    </ul>
  </Container>
);

export default Filter;
