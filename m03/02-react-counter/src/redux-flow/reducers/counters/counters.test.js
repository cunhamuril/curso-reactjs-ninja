// deepFreeze: Módulo que "congela" qualquer objeto ou array para ser uma constante
import deepFreeze from "deep-freeze";

import counters, { initialState } from "./index";
import { ADD_COUNTER, REMOVE_COUNTER, INCREMENT, DECREMENT } from "./actions";

it("counters should be a function", () => {
  expect(counters).toBe(counters);
});

/**
 * ADD_COUNTER
 */
it("Should add a new counter", () => {
  const before = deepFreeze([]);
  const action = deepFreeze({ type: ADD_COUNTER });
  const after = [0];

  expect(counters(before, action)).toEqual(after);
});

it("Should add a new counter again", () => {
  const before = deepFreeze([0, 1]);
  const action = deepFreeze({ type: ADD_COUNTER });
  const after = [0, 1, 0];

  expect(counters(before, action)).toEqual(after);
});

/**
 * REMOVE_COUNTER
 */
it("Should remove a counter", () => {
  const before = deepFreeze([0, 1, 2]);
  const action = deepFreeze({ type: REMOVE_COUNTER, index: 1 });
  const after = [0, 2];

  expect(counters(before, action)).toEqual(after);
});

it("Should remove a counter again", () => {
  const before = deepFreeze([3, 1]);
  const action = deepFreeze({ type: REMOVE_COUNTER, index: 0 });
  const after = [1];

  expect(counters(before, action)).toEqual(after);
});

/**
 * INCREMENT
 */
it("Should increment a counter", () => {
  const before = deepFreeze([0, 0]);
  const action = deepFreeze({ type: INCREMENT, index: 0 });
  const after = [1, 0];

  expect(counters(before, action)).toEqual(after);
});

it("Should increment an other counter", () => {
  const before = deepFreeze([1, 0]);
  const action = deepFreeze({ type: INCREMENT, index: 1 });
  const after = [1, 1];

  expect(counters(before, action)).toEqual(after);
});

/**
 * DECREMENT
 */
it("Should decrement a counter", () => {
  const before = deepFreeze([0, 2, 1]);
  const action = deepFreeze({ type: DECREMENT, index: 2 });
  const after = [0, 2, 0];

  expect(counters(before, action)).toEqual(after);
});

it("Should decrement an other counter", () => {
  const before = deepFreeze([0, 2, 0]);
  const action = deepFreeze({ type: DECREMENT, index: 1 });
  const after = [0, 1, 0];

  expect(counters(before, action)).toEqual(after);
});

/**
 * Testes de erros
 */
it("Should return same state if action is unkown", () => {
  const before = deepFreeze([0, 0, 1]);
  const action = deepFreeze({ type: "UNKNOWN" });
  const after = [0, 0, 1];

  expect(counters(before, action)).toEqual(after);
});

it("Should return initial state if last state is undefined", () => {
  const before = undefined;
  const action = deepFreeze({});
  const after = initialState;

  expect(counters(before, action)).toEqual(after);
});
