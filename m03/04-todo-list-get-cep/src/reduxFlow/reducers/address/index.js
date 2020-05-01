import createReducer from "../createReducer";
import { FETCHING, SUCCESS } from "./actions";

const initialState = {
  address: "",
  city: "",
  code: "",
  district: "",
  state: "",
  ok: null,
  message: "Busque por algum CEP",
  isFetching: false,
};

const address = createReducer(initialState, {
  [FETCHING]: (state, action) => ({
    ...state,
    isFetching: true,
  }),

  [SUCCESS]: (state, action) => ({
    ...action.payload,
    isFetching: false,
  }),
});

export default address;
