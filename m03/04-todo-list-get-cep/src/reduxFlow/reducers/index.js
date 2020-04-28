// import { combineReducers } from "redux";

import address from "./address";
import todos from "./todos";
import visibilityFilter from "./visibilityFilter";

/**
 * Função que mostra como funciona o combineReducers por baixo dos panos
 * @param {Object} reducers reducers que irão ser combinados
 */
const combineReducers = (reducers) => (state = {}, action) => {
  return Object.keys(reducers).reduce((nextState, key) => {
    nextState[key] = reducers[key](state[key], action);
    return nextState;
  }, {});
};

export default combineReducers({ address, todos, visibilityFilter });
