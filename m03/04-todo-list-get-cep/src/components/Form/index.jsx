import React from "react";

import { Container } from "./styles";

const Form = ({ handleSubmit, btnLabel }) => (
  <Container onSubmit={handleSubmit}>
    <input type="text" name="todo" autoComplete="off" required />
    <button type="submit">{btnLabel}</button>
  </Container>
);

export default Form;
