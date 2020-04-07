import React from "react";

import "./styles.css";

export const Counter = ({ counter, increment, decrement, removeCounter }) => (
  <div className="counter">
    <button className="button" onClick={decrement}>
      -
    </button>
    <h1>{counter}</h1>
    <button className="button" onClick={increment}>
      +
    </button>
    <button className="delete-button" onClick={removeCounter}>
      &times;
    </button>
  </div>
);

export default Counter;
