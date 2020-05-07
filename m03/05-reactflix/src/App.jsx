import React from "react";
import "normalize.css";
import "milligram";

import VideoSingle from "./components/VideoSingle";
import VideosList from "./components/VideosList";

import { Container, Header, Main, Footer } from "./styles";

const App = () => (
  <Container>
    <Header>
      <h1>ReactFlix</h1>
    </Header>

    <Main>
      <VideoSingle />
      <VideosList />
    </Main>

    <Footer>&copy; 2020</Footer>
  </Container>
);

export default App;
