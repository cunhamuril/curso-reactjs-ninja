import React, { PureComponent } from "react";
import ajax from "@fdaciuk/ajax";

import Form from "../../components/Form";
import Table from "./Table";

class SearchCep extends PureComponent {
  state = {
    address: "",
    city: "",
    code: "",
    district: "",
    state: "",
    status: 1,
  };

  handleSubmit = async (e) => {
    e.preventDefault();

    const response = await ajax().get(
      "https://apps.widenet.com.br/busca-cep/api/cep.json",
      { code: e.target.cep.value }
    );

    console.log(response);

    this.setState(response);
  };

  render() {
    return (
      <>
        <h3>BUSCAR CEP - REACT REDUX ASYNC EXAMPLE</h3>
        <Form
          handleSubmit={this.handleSubmit}
          btnLabel="Buscar endereço"
          name="cep"
        />

        <Table {...this.state} />
      </>
    );
  }
}

export default SearchCep;
