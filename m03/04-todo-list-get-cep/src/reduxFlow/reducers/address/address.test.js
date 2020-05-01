import address from "./index";
import { SUCCESS } from "./actions";

it("address should be a function", () => {
  expect(typeof address).toBe("function");
});

it("should action SUCCESS update address", () => {
  const state = {
    address: "",
    city: "",
    code: "",
    district: "",
    state: "",
    ok: null,
    message: "Busque por algum CEP",
    isFetching: true,
  };

  const action = {
    type: SUCCESS,
    payload: {
      address: "Avenida Presidente Kennedy - de 1632",
      city: "Curitiba",
      code: "80610-010",
      district: "Água Verde",
      state: "PR",
      ok: true,
      message: "Busque por algum CEP",
      isFetching: true,
    },
  };

  const expected = {
    address: "Avenida Presidente Kennedy - de 1632",
    city: "Curitiba",
    code: "80610-010",
    district: "Água Verde",
    state: "PR",
    ok: true,
    message: "Busque por algum CEP",
    isFetching: false,
  };

  expect(address(state, action)).toEqual(expected);
});
