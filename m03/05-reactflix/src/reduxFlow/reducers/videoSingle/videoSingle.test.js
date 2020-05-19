import deepFreeze from "deep-freeze";

import videoSingle, { initialState } from ".";

import { SELECT_VIDEO_SINGLE } from "./actions";

it("should be a function", () => {
  expect(typeof videoSingle).toBe("function");
});

it("should select a video", () => {
  const state = deepFreeze(initialState);
  const action = deepFreeze({
    type: SELECT_VIDEO_SINGLE,
    payload: { id: "123" },
  });
  const expected = "123";

  expect(videoSingle(state, action)).toEqual(expected);
});

it("should return the latest state when action is unkown", () => {
  const state = deepFreeze("123");
  const action = deepFreeze({ type: "UNKNOWN" });
  const expected = "123";

  expect(videoSingle(state, action)).toEqual(expected);
});

it("should reutrn the initialState when state is undefined", () => {
  const state = undefined;
  const action = deepFreeze({});
  const expected = initialState;

  expect(videoSingle(state, action)).toEqual(expected);
});
