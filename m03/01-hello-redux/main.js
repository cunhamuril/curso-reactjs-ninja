"use strict";

/**
 * Reducer
 * @param {Number} state estado do reducer
 * @param {Object} action ação que será disparada
 */
const counter = (state = 0, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    default:
      return state;
  }
};

const createStore = reducer => {
  let state;
  let subscriptions = [];

  // dispatch vai receber a action como parâmentro e passar para o reducer que com seu retorno define o valor de state
  const dispatch = action => {
    state = reducer(state, action);

    // Subscriptions vai executar cada função que foi passada por parâmetro quando for feito um dispatch
    subscriptions.forEach(f => f());
  };

  // Subscribe pega a função que foi passada por parâmetro e armazena no array
  const subscribe = func => {
    subscriptions.push(func);

    return () => {
      subscriptions = subscriptions.filter(f => f !== func);
    };
  };

  dispatch({});

  return {
    getState: () => state,
    dispatch,
    subscribe
  };
};

const store = createStore(counter);

const $counter = document.querySelector('[data-js="counter"]');
const $decrement = document.querySelector('[data-js="decrement"]');
const $increment = document.querySelector('[data-js="increment"]');

$decrement.addEventListener("click", decrement, false);
$increment.addEventListener("click", increment, false);

function decrement() {
  store.dispatch({ type: "DECREMENT" });
}

function increment() {
  store.dispatch({ type: "INCREMENT" });
}

// Função render vai atribuir o valor para o elemento do HTML
function render() {
  $counter.textContent = store.getState();
}

const unsubscribe = store.subscribe(render);
render();

setTimeout(() => {
  console.log("unsubscribe");
  unsubscribe();
}, 5000);
