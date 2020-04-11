import React from "react";
import { connect } from "react-redux";

import { Container, ListTodo, FormTodo, Filters } from "./styles";

import { addTodo } from "../../redux-flow/reducers/todos/action-creators";

const Main = ({ todos, handleAddTodo }) => (
  <Container>
    <h3>TO DO LIST - REDUX EXAMPLE</h3>
    <FormTodo onSubmit={handleAddTodo}>
      <input type="text" name="todo" required />
      <button type="submit">Adicionar</button>
    </FormTodo>

    <ListTodo>
      {todos.map((todo) => (
        <li key={todo.id} className={todo.completed ? "completed" : ""}>
          {todo.text}
        </li>
      ))}
    </ListTodo>

    <Filters>
      <h3>Mostrar</h3>
      <ul>
        <li>
          <a href="/">Todos</a>
        </li>
        <li>
          <a href="/">Finalizados</a>
        </li>
        <li>
          <a href="/">A Fazer</a>
        </li>
      </ul>
    </Filters>
  </Container>
);

const mapStateToProps = (state) => ({
  todos: state,
});

const mapDispatchToProps = (dispatch) => ({
  handleAddTodo: (e) => {
    e.preventDefault();

    dispatch(addTodo(e.target.todo.value));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
