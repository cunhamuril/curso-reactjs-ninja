import React, { PureComponent } from "react";
import ajax from "@fdaciuk/ajax";
import { connect } from "react-redux";

import { updateAddress } from "../../reduxFlow/reducers/address/actionCreators";

import Form from "../../components/Form";
import Table from "./Table";

import { Message } from "./styles";

class SearchCep extends PureComponent {
  state = { isFetching: false };

  handleSubmit = async (e) => {
    e.preventDefault();

    this.setState({ isFetching: true });

    const response = await ajax().get(
      "https://apps.widenet.com.br/busca-cep/api/cep.json",
      { code: e.target.cep.value }
    );

    this.props.dispatch(updateAddress(response));

    this.setState({ isFetching: false });
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
        ) : this.props.address.ok ? (
          <Table {...this.props.address} />
        ) : (
          <Message>
            <h5>{this.props.address.message}</h5>
          </Message>
        )}
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  address: state.address,
});

export default connect(mapStateToProps)(SearchCep);
