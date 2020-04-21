const createReducer = (initialState, handleActions) => (
  state = initialState,
  action
) =>
  handleActions.hasOwnProperty(action.type) // Se o objeto passado tiver a propriedade action.type
    ? handleActions[action.type](state, action)
    : state;

export default createReducer;
