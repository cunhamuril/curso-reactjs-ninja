import createReducer from "../createReducer";
import { UPDATE_ADDRESS } from "./actions";

const initialState = {
  address: "",
  city: "",
  code: "",
  district: "",
  state: "",
  ok: null,
  message: "Busque por algum CEP",
};

const address = createReducer(initialState, {
  [UPDATE_ADDRESS]: (state, action) => action.payload,
});

export default address;
