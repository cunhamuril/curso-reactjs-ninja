import deepFreeze from "deep-freeze";

import videos, { initialState } from ".";

import { ADD_VIDEO } from "./actions";

it("should be a function", () => {
  expect(typeof videos).toBe("function");
});

it("should add a video", () => {
  const state = deepFreeze({});
  const action = deepFreeze({
    type: ADD_VIDEO,
    payload: { id: "123", title: "Test" },
  });
  const expected = { "123": { id: "123", title: "Test" } };

  expect(videos(state, action)).toEqual(expected);
});

it("should add a new video", () => {
  const state = deepFreeze({
    "123": { id: "123", title: "Test" },
  });
  const action = deepFreeze({
    type: ADD_VIDEO,
    payload: { id: "234", title: "Test2" },
  });
  const expected = {
    "123": { id: "123", title: "Test" },
    "234": { id: "234", title: "Test2" },
  };

  expect(videos(state, action)).toEqual(expected);
});

it("should return the latest state when action is unkown", () => {
  const state = deepFreeze({
    "123": { id: "123", title: "Test" },
  });
  const action = deepFreeze({ type: "UNKNOWN" });
  const expected = {
    "123": { id: "123", title: "Test" },
  };

  expect(videos(state, action)).toEqual(expected);
});

it("should return the initialState when state is undefined", () => {
  const state = undefined;
  const action = deepFreeze({});
  const expected = initialState;

  expect(videos(state, action)).toEqual(expected);
});
