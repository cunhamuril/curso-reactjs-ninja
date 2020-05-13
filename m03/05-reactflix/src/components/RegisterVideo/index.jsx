import React from "react";

import { Form } from "./styles";

const RegisterVideo = () => (
  <Form>
    <h2>Cadastrar Vídeo</h2>

    <label htmlFor="id">ID do vídeo</label>
    <input type="text" id="id" name="id" />

    <label htmlFor="title">Título do vídeo</label>
    <input type="text" id="title" name="title" />

    <button type="submit">Cadastrar</button>
  </Form>
);

export default RegisterVideo;
