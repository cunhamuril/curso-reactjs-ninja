import "redux-thunk";
import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "../reducers";

export default ({ initialState } = {}) => {
  const enhancer = compose(applyMiddleware(thunk), logger());
  const store = createStore(rootReducer, initialState, enhancer);

  return store;
};

// Middlewares
const logger = () =>
  window.__REDUX_DEVTOOLS_EXTENSION__
    ? window.__REDUX_DEVTOOLS_EXTENSION__()
    : (x) => x;

const thunk = ({ dispatch, getState }) => (next) => (action) => {
  if (typeof action === "function") {
    return action(dispatch, getState);
  }
  return next(action);
};
