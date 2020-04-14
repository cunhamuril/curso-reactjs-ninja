import reducerTodos from "./todos";
import reducerVisibilityFilter from "./visibilityFilter";

const rootReducer = (state = {}, action) => {
  return {
    todos: reducerTodos(state.todos, action),
    visibilityFilter: reducerVisibilityFilter(state.visibilityFilter, action),
  };
};

export default rootReducer;
