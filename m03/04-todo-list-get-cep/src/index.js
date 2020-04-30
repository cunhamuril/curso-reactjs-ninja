import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";

import App from "./App";

import reducer from "./reduxFlow/reducers";

// Estrutura de um middleware do Redux
const logger = ({ dispatch, getState }) => (next) => (action) => {
  console.log("LOGGER::will dispatch:", action);
  const nextAction = next(action);
  console.log("LOGGER::next action:", nextAction);
  return nextAction;
};

const thunk = ({ dispatch, getState }) => (next) => (action) => {
  if (typeof action === "function") {
    return action(dispatch, getState);
  }
  return next(action);
};

const store = createStore(reducer, applyMiddleware(logger, thunk));

// -------------------
store.dispatch(lazyAction());
function lazyAction() {
  return (dispatch, getState) => {
    setTimeout(() => {
      dispatch({
        type: "todos:ADD_TODO",
        payload: {
          text: "Lazy Action",
          id: "123",
        },
      });
    }, 2000);
  };
}
// -------------------

const renderState = () => {
  console.log("state:", store.getState());
};

store.subscribe(renderState);
renderState();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
