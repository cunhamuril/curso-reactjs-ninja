import React, { useState, useEffect } from "react";

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

  componentDidMount() {
    this.updateDocumentTitle();

    // setInterval(() => {
    //   this.setState((prevState) => {
    //     return {
    //       counter: prevState.counter + 1,
    //     };
    //   });
    // }, 1000);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.counter !== this.state.counter) {
      console.log("componentDidUpdate");
      this.updateDocumentTitle();
    }
  }

  updateDocumentTitle() {
    document.title = `CounterClass: ${this.state.counter}`;
  }

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

  useEffect(() => {
    setInterval(() => {
      console.log("componentDidMount");
      setCounter((prevState) => prevState + 1);
    }, 1000);
  }, []);

  useEffect(() => {
    document.title = `CounterFunction: ${counter}`;
  }, [counter]);

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
