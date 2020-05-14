import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "reducers";

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
