import React from "react";
import { connect } from "react-redux";
import "normalize.css";
import "milligram";

import RegisterVideo from "~/components/RegisterVideo";
import VideoSingle from "~/components/VideoSingle";
import VideosList from "~/components/VideosList";
import Header from "~/components/Header";
import Footer from "~/components/Footer";

import { Container, Main } from "~/styles";

const App = ({ isRegisterVideoFormOpened }) => (
  <Container>
    <Header />

    <Main>
      {isRegisterVideoFormOpened && <RegisterVideo />}
      <VideoSingle />
      <VideosList />
    </Main>

    <Footer />
  </Container>
);

const mapStateToProps = (state) => ({
  isRegisterVideoFormOpened: state.ui.isRegisterVideoFormOpened,
});

export default connect(mapStateToProps)(App);
