import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import App from "./App";

import firebase from "./services/firebase";

import configureStore from "./reduxFlow/configureStore";

import GlobalStyles from "./theme/global";

const store = configureStore();

const db = firebase.database();
const videos = db.ref("videos");

/**
 * Adicionar dados
 */
// CUIDADO! set pode sobscrever informações
videos.push().set({
  id: "rp34FE01Q3M",
  title: "JavaScript Secrets",
});

/**
 * Faz leitura toda vez que os dados forem modificados
 */
videos.on(
  "value",
  (snapshot) => {
    console.log("snapshot:", snapshot.val());
  },
  (error) => {
    console.error("error:", error);
  }
);

/**
 * Faz leitura apenas uma vez
 */
// videos
//   .once("value")
//   .then((snapshot) => console.log("snapshot:", snapshot.val()))
//   .catch((err) => console.error(err));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <GlobalStyles />
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
