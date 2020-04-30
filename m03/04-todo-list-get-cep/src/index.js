import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import App from "./App";

import configureStore from "./reduxFlow/conrigureStore";

const store = configureStore();

store.dispatch((dispatch, getState) => {
  console.log("async dispatch!", dispatch, getState);
});

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
