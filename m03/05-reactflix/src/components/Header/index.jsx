import React from "react";
import { connect } from "react-redux";

import { openRegisterVideo } from "reducers/ui/actionCreators";

import { Container, HeaderTitle, RegisterButton } from "./styles";

const Header = ({ handleOpenRegisterVideo }) => (
  <Container>
    <HeaderTitle>ReactFlix</HeaderTitle>
    <RegisterButton onClick={handleOpenRegisterVideo}>
      Cadastrar Vídeo
    </RegisterButton>
  </Container>
);

const mapDispatchToProps = (dispatch) => ({
  handleOpenRegisterVideo: () => dispatch(openRegisterVideo()),
});

export default connect(null, mapDispatchToProps)(Header);
