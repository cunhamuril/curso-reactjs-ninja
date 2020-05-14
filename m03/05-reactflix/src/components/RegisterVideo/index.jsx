import React from "react";
import { connect } from "react-redux";

import { addVideo } from "../../reduxFlow/reducers/videos/actionCreators";

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

    // Destructuring de forma mais "profunda"
    const {
      id: { value: id },
      title: { value: title },
    } = e.target;

    dispatch(addVideo({ id, title }));
  },
});

export default connect(null, mapDispatchToProps)(RegisterVideo);
