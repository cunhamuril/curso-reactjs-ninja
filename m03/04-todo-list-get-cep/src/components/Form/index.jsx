import React from "react";

import { Container } from "./styles";

const Form = ({ handleSubmit, btnLabel, name }) => (
  <Container onSubmit={handleSubmit}>
    <input type="text" name={name} autoComplete="off" required />
    <button type="submit">{btnLabel}</button>
  </Container>
);

export default Form;
