import React from "react";
import { connect } from "react-redux";

import { fetchAddress } from "../../reduxFlow/reducers/address/actionCreators";

import Form from "../../components/Form";
import Table from "./Table";

import { Message } from "./styles";

const SearchCep = ({ address, handleSubmit }) => (
  <>
    <h3>BUSCAR CEP - REACT REDUX ASYNC EXAMPLE</h3>
    <Form handleSubmit={handleSubmit} btnLabel="Buscar endereço" name="cep" />

    {address.isFetching ? (
      <Message>
        <h5>Buscando...</h5>
      </Message>
    ) : address.ok ? (
      <Table {...address} />
    ) : (
      <Message>
        <h5>{address.message}</h5>
      </Message>
    )}
  </>
);

const mapStateToProps = (state) => ({
  address: state.address,
});

// const mapDispatchToProps = (dispatch) => ({
//   updateAddress: (data) => dispatch(updateAddress(data)),
// });

// Quando a prop tiver o mesmo nome que o actionCreator, pode passar assim:
// const mapDispatchToProps = { fetchAddress };

const mapDispatchToProps = (dispatch) => ({
  handleSubmit: (e) => {
    e.preventDefault();

    dispatch(fetchAddress(e.target.cep.value));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchCep);
