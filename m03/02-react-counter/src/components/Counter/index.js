import React, { PureComponent } from "react";
import { connect } from "react-redux";

import Counter from "./Counter";

class CounterContainer extends PureComponent {
  constructor() {
    super();

    /**
     * !! Counter e dispatch agora estão em this.props
     *
     * Dispatch é passado automaticamente,
     * Counter é passado por causa do mapStateToProps
     */
    this.increment = () => {
      this.props.dispatch({ type: "INCREMENT" });
    };

    this.decrement = () => {
      this.props.dispatch({ type: "DECREMENT" });
    };
  }

  render() {
    return (
      <Counter
        counter={this.props.counter}
        increment={this.increment}
        decrement={this.decrement}
      />
    );
  }
}

/**
 * Função padrão do react-redux onde "mapea" o estado da aplicação e passa via props
 * @param {Any} state estado da aplicação
 */
const mapStateToProps = (state) => {
  return {
    counter: state,
  };
};

/**
 * É exportado a função connect 2x a primeira vez é com o mapStateToProps e a segunda é o componente atual
 */
export default connect(mapStateToProps)(CounterContainer);
