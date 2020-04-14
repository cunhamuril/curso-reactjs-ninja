import deepFreeze from "deep-freeze";

import visibilityFilter, { initialState } from "./index";
import {
  SET_VISIBILITY_FILTER,
  SHOW_ALL,
  SHOW_COMPLETED,
  SHOW_ACTIVE,
} from "./actions";

/**
 * Testes de caminho feliz
 */
it("visibilityFilter should be a function", () => {
  expect(typeof visibilityFilter).toEqual("function");
});

it("should show all todos", () => {
  // Before
  const state = SHOW_COMPLETED;
  const action = deepFreeze({
    type: SET_VISIBILITY_FILTER,
    payload: { filter: SHOW_ALL },
  });

  // After
  const expected = SHOW_ALL;

  expect(visibilityFilter(state, action)).toEqual(expected);
});

it("should show just completed todos", () => {
  // Before
  const state = SHOW_ALL;
  const action = deepFreeze({
    type: SET_VISIBILITY_FILTER,
    payload: { filter: SHOW_COMPLETED },
  });

  // After
  const expected = SHOW_COMPLETED;

  expect(visibilityFilter(state, action)).toEqual(expected);
});

it("should show just active todos", () => {
  // Before
  const state = SHOW_ALL;
  const action = deepFreeze({
    type: SET_VISIBILITY_FILTER,
    payload: { filter: SHOW_ACTIVE },
  });

  // After
  const expected = SHOW_ACTIVE;

  expect(visibilityFilter(state, action)).toEqual(expected);
});

/**
 * Testes de caminho não feliz
 */
it("should return latest state when action is unknown", () => {
  // Before
  const state = SHOW_COMPLETED;
  const action = deepFreeze({
    type: "UNKNOWN",
    payload: { filter: SHOW_ALL },
  });

  // After
  const expected = SHOW_COMPLETED;

  expect(visibilityFilter(state, action)).toEqual(expected);
});

it("should return initialState when latest state is undefined", () => {
  // Before
  const state = undefined;
  const action = deepFreeze({});

  // After
  const expected = initialState;

  expect(visibilityFilter(state, action)).toEqual(expected);
});
