import React from "react";
import "normalize.css";
import "milligram";

import RegisterVideo from "./components/RegisterVideo";
import VideoSingle from "./components/VideoSingle";
import VideosList from "./components/VideosList";

import {
  Container,
  Header,
  HeaderTitle,
  RegisterButton,
  Main,
  Footer,
} from "./styles";

const App = () => (
  <Container>
    <Header>
      <HeaderTitle>ReactFlix</HeaderTitle>
      <RegisterButton>Cadastrar Vídeo</RegisterButton>
    </Header>

    <Main>
      <RegisterVideo />
      <VideoSingle />
      <VideosList />
    </Main>

    <Footer>&copy; 2020</Footer>
  </Container>
);

export default App;
