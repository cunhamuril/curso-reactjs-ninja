import React from "react";

import Counter from "./components/Counter";

import "./App.css";

function App({ store }) {
  return <Counter store={store} />;
}

export default App;
