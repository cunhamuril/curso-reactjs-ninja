import React from "react";

import { Table } from "./styles";

import Form from "../../components/Form";

const SearchCep = () => (
  <>
    <h3>BUSCAR CEP - REACT REDUX ASYNC EXAMPLE</h3>
    <Form btnLabel="Buscar endereço" />

    <Table>
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
    </Table>
  </>
);

export default SearchCep;
