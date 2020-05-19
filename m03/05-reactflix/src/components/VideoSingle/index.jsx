import React from "react";

import { Container, Iframe, Title } from "./styles";

const VideoSingle = ({ id, title }) => (
  <Container>
    <Iframe
      title="video"
      width="560"
      height="550"
      src={`https://www.youtube.com/embed/${id}`}
      frameborder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    />
    <Title>{title}</Title>
  </Container>
);

export default VideoSingle;
