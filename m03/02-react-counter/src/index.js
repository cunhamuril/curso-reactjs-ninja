import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createStore } from "redux";
import { Provider } from "react-redux";

/**
 * Função reducer
 *
 * @param {Number} state estado atual, se não passar o estado atual, o estado vai estar atribuído como 0
 * @param {Object} action tipo da ação desejada
 */
const reducer = (state = 0, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    default:
      return state;
  }
};

/**
 * Store
 */
const store = createStore(reducer);

ReactDOM.render(
  <React.StrictMode>
    {/* Passando store pelo provider do react-redux */}
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
