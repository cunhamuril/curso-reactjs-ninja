import { SET_VISIBILITY_FILTER, SHOW_ALL } from "./actions";

export const initialState = SHOW_ALL;

const visibilityFilter = (state = initialState, action) => {
  if (action.type === SET_VISIBILITY_FILTER) {
    return action.payload.filter;
  }

  return state;
};

export default visibilityFilter;
