import "redux-thunk";
import { createStore, applyMiddleware } from "redux";
import rootReducer from "../reducers";

export default ({ initialState } = {}) => {
  const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(logger, thunk)
  );

  return store;
};

// Middlewares
const logger = ({ dispatch, getState }) => (next) => (action) => {
  console.group(`LOGGER->${action.type}`); // feature para agrupar logs
  console.log("will dispatch:", action);
  console.log("state", getState());

  const nextAction = next(action);

  console.log("next state", getState());
  console.groupEnd(`LOGGER->${action.type}`);

  return nextAction;
};

const thunk = ({ dispatch, getState }) => (next) => (action) => {
  if (typeof action === "function") {
    return action(dispatch, getState);
  }
  return next(action);
};
