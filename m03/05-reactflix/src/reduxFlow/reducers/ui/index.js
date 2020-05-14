import createReducer from "../createReducer";

import { OPEN_REGISTER_VIDEO, CLOSE_REGISTER_VIDEO } from "./actions";

export const initialState = {
  iRegisterVideoFormOpened: false,
};

const ui = createReducer(initialState, {
  [OPEN_REGISTER_VIDEO]: (state) => ({
    ...state,
    isRegisterVideoFormOpened: true,
  }),

  [CLOSE_REGISTER_VIDEO]: (state) => ({
    ...state,
    isRegisterVideoFormOpened: false,
  }),
});

export default ui;
