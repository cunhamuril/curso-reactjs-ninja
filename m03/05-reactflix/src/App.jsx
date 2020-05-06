import React from "react";
import "normalize.css";
import "milligram";

import {
  Container,
  Header,
  Main,
  Footer,
  VideosList,
  Video,
  VideoThumb,
  VideoTitle,
  StyledPlay,
} from "./styles";

const App = () => (
  <Container>
    <Header>
      <h1>ReactFlix</h1>
    </Header>

    <Main>
      <VideosList>
        {/* Array.from({ length: 10 }): Create an array with length of 10 */}
        {Array.from({ length: 10 }).map((item, index) => (
          <Video key={index}>
            <VideoThumb>
              <StyledPlay />
            </VideoThumb>
            <VideoTitle>Título do Vídeo</VideoTitle>
          </Video>
        ))}
      </VideosList>
    </Main>

    <Footer>&copy; 2020</Footer>
  </Container>
);

export default App;
