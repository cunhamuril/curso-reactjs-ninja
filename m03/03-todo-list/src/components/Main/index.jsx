import React, { Component } from "react";

import { Container, Filters } from "./styles";

export default class Main extends Component {
  render() {
    return (
      <Container>
        <h3>TO DO LIST - REDUX EXAMPLE</h3>
        <input type="text" />

        <ul className="list">
          <li className="completed">Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
          <li>Item 4</li>
          <li>Item 5</li>
        </ul>

        <Filters>
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
        </Filters>
      </Container>
    );
  }
}
