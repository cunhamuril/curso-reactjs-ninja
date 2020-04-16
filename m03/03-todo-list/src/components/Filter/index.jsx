import React from "react";
import { connect } from "react-redux";

import {
  SHOW_ALL,
  SHOW_COMPLETED,
  SHOW_ACTIVE,
} from "../../reduxFlow/reducers/visibilityFilter/actions";
import { setVisibilityFilter } from "../../reduxFlow/reducers/visibilityFilter/actionCreators";

import { Container } from "./styles";

const Filter = ({ activeFilter, handleFilter }) => (
  <Container>
    <h3>Mostrar</h3>
    <ul>
      {filterItems.map((item) => (
        <li key={item.action}>
          <button
            value={item.action}
            onClick={handleFilter}
            className={item.action === activeFilter ? "active" : ""}
          >
            {item.label}
          </button>
        </li>
      ))}
    </ul>
  </Container>
);

const filterItems = [
  { label: "Todos", action: SHOW_ALL },
  { label: "Finalizados", action: SHOW_COMPLETED },
  { label: "A Fazer", action: SHOW_ACTIVE },
];

const mapStateToProps = (state) => ({
  activeFilter: state.visibilityFilter,
});

const mapDispatchToProps = (dispatch) => ({
  handleFilter: (e) => {
    dispatch(setVisibilityFilter(e.target.value));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
