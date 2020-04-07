import React from "react";
import { connect } from "react-redux";

import Counter from "../Counter";

const Counters = ({ counter, increment, decrement }) => (
  <div>
    {[0, 0, 0].map((item, index) => (
      <Counter
        key={index}
        counter={counter}
        increment={increment}
        decrement={decrement}
      />
    ))}
  </div>
);

/**
 * Função padrão do react-redux onde "mapea" o estado da aplicação e passa via props
 * @param {Any} state estado da aplicação
 */
const mapStateToProps = (state) => ({
  counter: state,
});

/**
 * Função padrão do react-redux onde "mapea" o dispatch e passa via props
 * @param {Function} dispatch função dispatch que tem vai ser passada por props
 */
const mapDispatchToProps = (dispatch) => ({
  increment: () => dispatch({ type: "INCREMENT" }),
  decrement: () => dispatch({ type: "DECREMENT" }),
});

/**
 * É exportado a função connect 2x
 * a primeira vez é com o mapStateToProps e mapDispatchToProps
 * a segunda é o componente atual
 */
export default connect(mapStateToProps, mapDispatchToProps)(Counters);
