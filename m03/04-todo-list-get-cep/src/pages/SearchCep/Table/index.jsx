import React from "react";

import { Container } from "./styles";

const Table = ({ address, city, code, district, state }) => (
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
        <td>{code}</td>
        <td>{address || "Sem endereço"}</td>
        <td>{district || "Sem bairro"}</td>
        <td>{city}</td>
        <td>{state}</td>
      </tr>
    </tbody>
  </Container>
);

export default Table;
