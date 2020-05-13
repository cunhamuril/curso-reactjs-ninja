import React from "react";
import { connect } from "react-redux";

import { Form } from "./styles";

const RegisterVideo = ({ onSubmit }) => (
  <Form onSubmit={onSubmit}>
    <h2>Cadastrar Vídeo</h2>

    <label htmlFor="id">ID do vídeo</label>
    <input type="text" id="id" name="id" />

    <label htmlFor="title">Título do vídeo</label>
    <input type="text" id="title" name="title" />

    <button type="submit">Cadastrar</button>
  </Form>
);

const mapDispatchToProps = (dispatch) => ({
  onSubmit: (e) => {
    e.preventDefault();

    dispatch({
      type: "videos:ADD_VIDEO",
      payload: {
        id: "rp34FE01Q3M",
        title: "BOM DIA",
      },
    });
  },
});

export default connect(null, mapDispatchToProps)(RegisterVideo);
