import React from "react";
import { connect } from "react-redux";

import { Container } from "./styles";

import { addTodo } from "../../reduxFlow/reducers/todos/actionCreators";

const Form = ({ handleAddTodo }) => (
  <Container onSubmit={handleAddTodo}>
    <input type="text" name="todo" autoComplete="off" required />
    <button type="submit">Adicionar</button>
  </Container>
);

const mapDispatchToProps = (dispatch) => ({
  handleAddTodo: (e) => {
    e.preventDefault();

    dispatch(addTodo(e.target.todo.value));

    e.target.todo.value = "";
  },
});

export default connect(null, mapDispatchToProps)(Form);
