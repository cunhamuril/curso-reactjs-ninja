import React from "react";
import "normalize.css";
import "milligram";

import RegisterVideo from "~/components/RegisterVideo";
import VideoSingle from "~/components/VideoSingle";
import VideosList from "~/components/VideosList";
import Header from "~/components/Header";
import Footer from "~/components/Footer";

import { Container, Main } from "~/styles";

const App = () => (
  <Container>
    <Header />

    <Main>
      <RegisterVideo />
      <VideoSingle />
      <VideosList />
    </Main>

    <Footer />
  </Container>
);

export default App;
