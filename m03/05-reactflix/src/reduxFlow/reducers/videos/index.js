import createReducer from "../createReducer";

import { ADD_VIDEO } from "./actions";

export const initialState = {};

const videos = createReducer(initialState, {
  [ADD_VIDEO]: (state, action) => ({
    ...state,
    [action.payload.id]: {
      id: action.payload.id,
      title: action.payload.title,
    },
  }),
});

export default videos;
