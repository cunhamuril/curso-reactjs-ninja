import React from "react";

import { Container, Video, VideoThumb, VideoTitle, PlayStyled } from "./styles";

const VideosList = () => (
  <Container>
    {/* Array.from({ length: 10 }): Create an array with length of 10 */}
    {Array.from({ length: 10 }).map((item, index) => (
      <Video key={index}>
        <VideoThumb>
          <PlayStyled />
        </VideoThumb>
        <VideoTitle>Título do Vídeo</VideoTitle>
      </Video>
    ))}
  </Container>
);

export default VideosList;
