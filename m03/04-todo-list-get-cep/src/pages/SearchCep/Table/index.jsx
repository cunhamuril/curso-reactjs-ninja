import React from "react";

import { Container } from "./styles";

const Table = () => (
  <Container>
    <thead>
      <tr>
        <td>CEP</td>
        <td>Endereço</td>
        <td>Bairro</td>
        <td>Cidade</td>
        <td>Estado</td>
      </tr>
    </thead>

    <tbody>
      <tr>
        <td>000000000</td>
        <td>Rua Tal</td>
        <td>Bairro legal</td>
        <td>Cidade Massa</td>
        <td>SP</td>
      </tr>
    </tbody>
  </Container>
);

export default Table;
