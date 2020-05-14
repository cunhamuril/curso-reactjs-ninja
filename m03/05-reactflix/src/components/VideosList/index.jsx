import React from "react";
import { connect } from "react-redux";

import { Container, Video, VideoThumb, VideoTitle, PlayStyled } from "./styles";

const VideosList = ({ videos }) => (
  <Container>
    {/* Como não é um Array, precisa usar Object.keys passando o ID do vídeo, porque esta função só retorna as keys */}
    {Object.keys(videos).map((id) => (
      <Video key={id}>
        <VideoThumb>
          <PlayStyled />
        </VideoThumb>
        <VideoTitle>{videos[id].title}</VideoTitle>
      </Video>
    ))}
  </Container>
);

const mapStateToProps = (state) => ({
  videos: state.videos,
});

export default connect(mapStateToProps)(VideosList);
