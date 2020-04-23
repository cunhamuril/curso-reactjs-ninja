import address from "./index";
import { UPDATE_ADDRESS } from "./actions";

it("address should be a function", () => {
  expect(typeof address).toBe("function");
});

it("should action UPDATE_ADDRESS update address", () => {
  const state = {
    address: "",
    city: "",
    code: "",
    district: "",
    state: "",
    ok: null,
    message: "Busque por algum CEP",
  };

  const action = {
    type: UPDATE_ADDRESS,
    payload: {
      address: "Avenida Presidente Kennedy - de 1632",
      city: "Curitiba",
      code: "80610-010",
      district: "Água Verde",
      state: "PR",
      ok: true,
      message: "Busque por algum CEP",
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
  };

  expect(address(state, action)).toEqual(expected);
});
