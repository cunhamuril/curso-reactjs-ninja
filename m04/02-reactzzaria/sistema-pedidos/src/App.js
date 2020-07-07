import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App({ hasError }) {
  const [products, setProducts] = useState([]);

  const handleClick = (e) => {
    e.preventDefault();

    const result = {};

    setProducts(result);
  };

  return (
    <div className="App">
      <header className="App-header">
        {hasError && <h1>Deu problema :(</h1>}
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleClick}
        >
          Learn React
        </a>

        {products.map((product) => (
          <div key={product}>{product}</div>
        ))}
      </header>
    </div>
  );
}

export default App;
