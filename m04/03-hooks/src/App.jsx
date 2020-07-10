import React, { useState } from "react";

const App = () => (
  <>
    <CounterClass />
    <CounterFunction />
  </>
);

// Componente de classe
class CounterClass extends React.PureComponent {
  state = {
    counter: 0,
    toggle: false,
  };

  render() {
    return (
      <>
        <Counter
          title="Class"
          counter={this.state.counter}
          increment={() => {
            this.setState((prevState) => ({
              counter: prevState.counter + 1,
            }));
          }}
          decrement={() => {
            this.setState((prevState) => ({
              counter: prevState.counter - 1,
            }));
          }}
        />

        {this.state.toggle && <h1>Visível!</h1>}
        <button
          onClick={() => {
            this.setState((prevState) => ({
              toggle: !prevState.toggle,
            }));
          }}
        >
          Toggle
        </button>
      </>
    );
  }
}

// Componente de função
function CounterFunction() {
  const [counter, setCounter] = useState(0);
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <Counter
        title="Function"
        counter={counter}
        increment={() => setCounter((prevState) => prevState + 1)}
        decrement={() => setCounter((prevState) => prevState - 1)}
      />

      {toggle && <h1>Visível</h1>}
      <button onClick={() => setToggle(!toggle)}>Toggle</button>
    </>
  );
}

// Componente principal
const Counter = ({ title, counter, increment, decrement }) => (
  <div>
    <h1 style={styles.title}>{title}</h1>
    <h1>{counter}</h1>
    <button onClick={decrement}>-</button>
    <button onClick={increment}>+</button>
  </div>
);

const styles = {
  title: { backgroundColor: "#AAA", padding: 4, marginBottom: 4 },
};

export default App;
