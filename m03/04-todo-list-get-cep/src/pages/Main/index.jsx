import React from "react";
import { connect } from "react-redux";

import Layout from "../../components/Layout";
import Form from "../../components/Form";
import Filter from "./Filter";
import List from "./List";

import { addTodo } from "../../reduxFlow/reducers/todos/actionCreators";

const Main = ({ handleAddTodo }) => (
  <Layout>
    <h3>TO DO LIST - REDUX EXAMPLE</h3>
    <Form handleSubmit={handleAddTodo} btnLabel="Adicionar" />
    <List />
    <Filter />
  </Layout>
);

const mapDispatchToProps = (dispatch) => ({
  handleAddTodo: (e) => {
    e.preventDefault();

    dispatch(addTodo(e.target.todo.value));

    e.target.todo.value = "";
  },
});

export default connect(null, mapDispatchToProps)(Main);
