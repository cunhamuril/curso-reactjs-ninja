import React, { PureComponent } from "react";
import ajax from "@fdaciuk/ajax";

import Form from "../../components/Form";
import Table from "./Table";

class SearchCep extends PureComponent {
  async componentDidMount() {
    const response = await ajax().get(
      "https://apps.widenet.com.br/busca-cep/api/cep.json",
      { code: "06233-030" }
    );

    console.log(response);
  }

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
