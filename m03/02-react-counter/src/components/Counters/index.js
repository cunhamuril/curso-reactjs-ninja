import React from "react";
import { connect } from "react-redux";

import "./styles.css";

import Counter from "../Counter";
import {
  addCounter,
  removeCounter,
  increment,
  decrement,
} from "../../redux-flow/reducers/counters/action-creators";

const Counters = ({
  counters,
  addCounter,
  removeCounter,
  increment,
  decrement,
}) => (
  <div>
    <div className="button-container">
      <button onClick={addCounter} className="button">
        Adicionar contador
      </button>
    </div>

    <div className="counters-container">
      {counters.map((counter, index) => (
        <Counter
          key={index}
          counter={counter}
          removeCounter={removeCounter(index)}
          increment={increment(index)}
          decrement={decrement(index)}
        />
      ))}
    </div>
  </div>
);

/**
 * Função padrão do react-redux onde "mapea" o estado da aplicação e passa via props
 * @param {Any} state estado da aplicação
 */
const mapStateToProps = (state) => ({
  counters: state,
});

const mapDispatchToProps = (dispatch) => ({
  addCounter: () => dispatch(addCounter()),
  removeCounter: (index) => () => dispatch(removeCounter(index)),
  increment: (index) => () => dispatch(increment(index)),
  decrement: (index) => () => dispatch(decrement(index)),
});

/**
 * É exportado a função connect 2x
 * a primeira vez é com o mapStateToProps e mapDispatchToProps
 * a segunda é o componente atual
 */
export default connect(mapStateToProps, mapDispatchToProps)(Counters);
