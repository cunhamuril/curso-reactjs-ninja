import React from "react";

import "./styles.css";

const Counter = ({ counter, increment, decrement }) => (
  <div className="counter">
    <button onClick={decrement}>-</button>
    <h1>{counter}</h1>
    <button onClick={increment}>+</button>
  </div>
);

export default Counter;
