import createReducer from "./createReducer";
import deepFreeze from "deep-freeze";

const initialState = 0;

const reducer = createReducer(initialState, {
  INCREMENT: (state, action) => state + 1,
  DECREMENT: (state, action) => state - 1,
});

it("should be a function", () => {
  expect(typeof createReducer).toBe("function");
});

it("createReducer(initialState, {}) should return a reducer function", () => {
  expect(typeof createReducer([], {})).toBe("function");
});

it("should create a reducer", () => {
  const state = 0;
  const action = deepFreeze({ type: "INCREMENT" });
  const expected = 1;

  expect(reducer(state, action)).toBe(expected);
});

it("should return latest state if action is unkown", () => {
  const state = 3;

  const action = deepFreeze({ type: "UNKOWN" });
  const expected = 3;

  expect(reducer(state, action)).toBe(expected);
});

it("should return initialState when latest state is undefined", () => {
  const state = undefined;

  const action = deepFreeze({});
  const expected = initialState;

  expect(reducer(state, action)).toBe(expected);
});

it("initialState should not be undefined", () => {
  try {
    createReducer();
  } catch (error) {
    expect(error.message).toBe("initialState should not be undefined");
  }
});

it("handleActions should not be different from object", () => {
  try {
    createReducer([]);
  } catch (error) {
    expect(error.message).toBe(
      "createReducer expects the second argument as an object representing reducer"
    );
  }
});
