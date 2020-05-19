import createReducer from "../createReducer";

import { SELECT_VIDEO_SINGLE } from "./actions";

export const initialState = "";

const videoSingle = createReducer(initialState, {
  [SELECT_VIDEO_SINGLE]: (state, action) => action.payload.id,
});

export default videoSingle;
