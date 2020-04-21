import React, { PureComponent } from "react";
import ajax from "@fdaciuk/ajax";

import Form from "../../components/Form";
import Table from "./Table";

import { Message } from "./styles";

class SearchCep extends PureComponent {
  state = {
    address: "",
    city: "",
    code: "",
    district: "",
    state: "",
    ok: null,
    message: "Busque por algum CEP",
    isFetching: false,
  };

  handleSubmit = async (e) => {
    e.preventDefault();

    this.setState({ isFetching: true });

    const response = await ajax().get(
      "https://apps.widenet.com.br/busca-cep/api/cep.json",
      { code: e.target.cep.value }
    );

    console.log(response);

    this.setState({ ...response, isFetching: false });
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

        {this.state.isFetching ? (
          <Message>
            <h5>Buscando...</h5>
          </Message>
        ) : this.state.ok ? (
          <Table {...this.state} />
        ) : (
          <Message>
            <h5>{this.state.message}</h5>
          </Message>
        )}
      </>
    );
  }
}

export default SearchCep;
