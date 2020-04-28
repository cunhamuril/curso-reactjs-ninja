const createReducer = (initialState, handleActions) => {
  if (typeof initialState === "undefined") {
    throw new Error("initialState should not be undefined");
  }

  if (typeof handleActions === "undefined") {
    throw new Error(
      "createReducer expects the second argument as an object representing reducer"
    );
  }

  return (state = initialState, action) =>
    handleActions.hasOwnProperty(action.type) // Se o objeto passado tiver a propriedade action.type
      ? handleActions[action.type](state, action)
      : state;
};

export default createReducer;
