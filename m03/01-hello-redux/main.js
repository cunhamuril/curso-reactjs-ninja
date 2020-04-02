"use strict";

/**
 * Reducer
 * @param {Number} state estado do reducer
 * @param {Object} action ação que será disparada
 */
const counter = (state = 0, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    default:
      return state;
  }
};

const { createStore } = Redux;

const store = createStore(counter);

/**
 * getState: método para pegar o estado do store
 */
console.log(store.getState());

/**
 * subscribe(() => {}): método que recebe uma função por parâmetro que vai ser executada sempre que for disparada uma ação
 */
store.subscribe(() => {
  console.log("Disparou uma ação!", store.getState());
});

/**
 * dispatch({ type: 'AÇÃO' }): método que dispara uma ação
 */
store.dispatch({ type: "INCREMENT" });
store.dispatch({ type: "INCREMENT" });
store.dispatch({ type: "DECREMENT" });
