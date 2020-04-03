import React, { PureComponent } from "react";

import Counter from "./Counter";

class CounterContainer extends PureComponent {
  constructor() {
    super();

    this.increment = () => {
      // this.setState({ counter: this.state.counter + 1 });
      this.props.store.dispatch({ type: "INCREMENT" });
    };

    this.decrement = () => {
      // this.setState({ counter: this.state.counter - 1 });
      this.props.store.dispatch({ type: "DECREMENT" });
    };
  }

  componentDidMount() {
    // this.forceUpdate(): forçar atualização sem precisar atualizar com this.setState
    this.unsubscribe = this.props.store.subscribe(() => this.forceUpdate());
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    return (
      <Counter
        counter={this.props.store.getState()}
        increment={this.increment}
        decrement={this.decrement}
      />
    );
  }
}

export default CounterContainer;
