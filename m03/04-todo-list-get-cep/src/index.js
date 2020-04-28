import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";

import App from "./App";

import reducer from "./reduxFlow/reducers";

const initialState = {
  todos: [
    {
      text: "auto",
      id: "123",
      completed: false,
    },
  ],

  address: {
    address: "Rua Tal",
    city: "cidade",
    state: "PR",
    code: "10101-123",
    district: "Bairro",
    ok: true,
  },
};

const store = createStore(reducer, initialState);

store.subscribe(() => {
  console.log(store.getState());
});

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
