import deepFreeze from "deep-freeze";

import todos, { initialState } from "./index";
import { ADD_TODO, TOGGLE_TODO } from "./actions";

it("should todos be a function", () => {
  expect(typeof todos).toBe("function");
});

it("should add a todo item", () => {
  // Before
  const state = deepFreeze([]);
  const action = {
    type: ADD_TODO,
    payload: { id: 0, text: "Hey" },
  };

  // After
  const expected = [{ id: 0, text: "Hey", completed: false }];

  expect(todos(state, action)).toEqual(expected);
});

it("should add a new todo item", () => {
  // Before
  const state = deepFreeze([{ id: 0, text: "Hey", completed: false }]);
  const action = deepFreeze({
    type: ADD_TODO,
    payload: { id: 1, text: "Ho" },
  });

  // After
  const expected = [
    { id: 0, text: "Hey", completed: false },
    { id: 1, text: "Ho", completed: false },
  ];

  expect(todos(state, action)).toEqual(expected);
});

it("should toggle first todo", () => {
  // Before
  const state = deepFreeze([
    { id: 0, text: "Hey", completed: false },
    { id: 1, text: "Ho", completed: false },
  ]);
  const action = deepFreeze({
    type: TOGGLE_TODO,
    payload: { id: 0 },
  });

  // After
  const expected = [
    { id: 0, text: "Hey", completed: true },
    { id: 1, text: "Ho", completed: false },
  ];

  expect(todos(state, action)).toEqual(expected);
});

it("should return the latest state when action is unknown", () => {
  // Before
  const state = deepFreeze([{ id: 0, text: "Hey", completed: false }]);
  const action = deepFreeze({ type: "ANYTHING" });

  // After
  const expected = [{ id: 0, text: "Hey", completed: false }];

  expect(todos(state, action)).toEqual(expected);
});

it("should return initialState when state before is undefined", () => {
  // Before
  const state = undefined;
  const action = deepFreeze({});

  // After
  const expected = initialState;

  expect(todos(state, action)).toEqual(expected);
});
