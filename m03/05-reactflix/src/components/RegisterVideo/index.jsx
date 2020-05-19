import React from "react";
import { connect } from "react-redux";

import { registerVideo } from "reducers/videos/actionCreators";
import { closeRegisterVideo } from "reducers/ui/actionCreators";

import { Form, ButtonClose } from "./styles";

const RegisterVideo = ({ handleSubmit, handleCloseRegisterVideo }) => (
  <Form onSubmit={handleSubmit}>
    <h2>Cadastrar Vídeo</h2>

    <label htmlFor="id">ID do vídeo</label>
    <input type="text" id="id" name="id" autoComplete="off" required />

    <label htmlFor="title">Título do vídeo</label>
    <input type="text" id="title" name="title" autoComplete="off" required />

    <button type="submit">Cadastrar</button>
    <ButtonClose type="button" onClick={handleCloseRegisterVideo}>
      &times;
    </ButtonClose>
  </Form>
);

const mapDispatchToProps = (dispatch) => ({
  handleSubmit: async (e) => {
    e.preventDefault();

    // se não for declarado isso, na hora de dar o reset, vai acusar erro de e = null
    e.persist();

    // Destructuring de forma mais "profunda"
    const {
      id: { value: id },
      title: { value: title },
    } = e.target;

    await dispatch(registerVideo({ id, title }));

    e.target.reset();

    // [0]: focar no primeiro item do form
    e.target[0].focus();
  },

  handleCloseRegisterVideo: () => dispatch(closeRegisterVideo()),
});

export default connect(null, mapDispatchToProps)(RegisterVideo);
