import React from "react";

import { Container, Iframe, Title } from "./styles";

const VideoSingle = () => (
  <Container>
    <Iframe
      title="video"
      width="560"
      height="550"
      src="https://www.youtube.com/embed/rp34FE01Q3M"
      frameborder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    />
    <Title>Título do Vídeo</Title>
  </Container>
);

export default VideoSingle;
