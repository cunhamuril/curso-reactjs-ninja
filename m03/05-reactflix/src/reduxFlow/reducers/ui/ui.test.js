import ui from ".";
import deepFreeze from "deep-freeze";

import { OPEN_REGISTER_VIDEO, CLOSE_REGISTER_VIDEO } from "./actions";

import { initialState } from ".";

it("should be a function", () => {
  expect(typeof ui).toBe("function");
});

it("should open register video", () => {
  const state = deepFreeze(initialState);
  const action = deepFreeze({
    type: OPEN_REGISTER_VIDEO,
  });
  const expected = { ...state, isRegisterVideoFormOpened: true };

  expect(ui(state, action)).toEqual(expected);
});

it("should open register video if is closed", () => {
  const state = deepFreeze({ isRegisterVideoFormOpened: false });
  const action = deepFreeze({
    type: OPEN_REGISTER_VIDEO,
  });
  const expected = { ...state, isRegisterVideoFormOpened: true };

  expect(ui(state, action)).toEqual(expected);
});

it("should close register video if is opened", () => {
  const state = deepFreeze({ isRegisterVideoFormOpened: true });
  const action = deepFreeze({
    type: CLOSE_REGISTER_VIDEO,
  });
  const expected = { ...state, isRegisterVideoFormOpened: false };

  expect(ui(state, action)).toEqual(expected);
});

it("should return the latest state when action is unkown", () => {
  const state = deepFreeze({ isRegisterVideoFormOpened: true });
  const action = deepFreeze({ type: "UNKNOWN" });
  const expected = { ...state, isRegisterVideoFormOpened: true };

  expect(ui(state, action)).toEqual(expected);
});

it("should return the initialState when before is undefined", () => {
  const state = undefined;
  const action = deepFreeze({});
  const expected = initialState;

  expect(ui(state, action)).toEqual(expected);
});
