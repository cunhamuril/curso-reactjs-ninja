import React, { PureComponent } from "react";

import Form from "../../components/Form";
import Table from "./Table";

class SearchCep extends PureComponent {
  render() {
    return (
      <>
        <h3>BUSCAR CEP - REACT REDUX ASYNC EXAMPLE</h3>
        <Form btnLabel="Buscar endereço" />

        <Table />
      </>
    );
  }
}

export default SearchCep;
