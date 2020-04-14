import React from "react";
import { connect } from "react-redux";

import { Container } from "./styles";

import { toggleTodo } from "../../reduxFlow/reducers/todos/actionCreators";

const TodosList = ({ todos, handleToggleTodo }) => (
  <Container>
    {todos.map((todo) => (
      <li
        key={todo.id}
        className={todo.completed ? "completed" : ""}
        onClick={() => handleToggleTodo(todo.id)}
      >
        {todo.text}
      </li>
    ))}
  </Container>
);

const mapStateToProps = (state) => ({
  todos: state.todos,
});

const mapDispatchToProps = (dispatch) => ({
  handleToggleTodo: (id) => dispatch(toggleTodo(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodosList);
