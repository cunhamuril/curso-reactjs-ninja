import React from "react";
import { connect } from "react-redux";

import { Container } from "./styles";

import { toggleTodo } from "../../../reduxFlow/reducers/todos/actionCreators";
import {
  SHOW_ALL,
  SHOW_COMPLETED,
  SHOW_ACTIVE,
} from "../../../reduxFlow/reducers/visibilityFilter/actions";

const TodosList = ({ todos, activeFilter, handleToggleTodo }) => (
  <Container>
    {getVisibleTodos(todos, activeFilter).map((todo) => (
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

const getVisibleTodos = (todos, activeFilter) => {
  // Feature do ES6 -> estrutura condicional feito com objeto
  const filterItems = {
    [SHOW_ALL]: todos,
    [SHOW_COMPLETED]: todos.filter((todo) => todo.completed),
    [SHOW_ACTIVE]: todos.filter((todo) => !todo.completed),
  };

  return filterItems[activeFilter];

  /**
   * Essa estrutura acima, é como se fosse este switch abaixo
   */
  // switch (activeFilter) {
  //   case SHOW_ALL:
  //     return todos;
  //   case SHOW_COMPLETED:
  //     return todos.filter((todo) => todo.completed);
  //   case SHOW_ACTIVE:
  //     return todos.filter((todo) => !todo.completed);
  //   default:
  //     return todos;
  // }
};

// Redux
const mapStateToProps = (state) => ({
  todos: state.todos,
  activeFilter: state.visibilityFilter,
});

const mapDispatchToProps = (dispatch) => ({
  handleToggleTodo: (id) => dispatch(toggleTodo(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodosList);
