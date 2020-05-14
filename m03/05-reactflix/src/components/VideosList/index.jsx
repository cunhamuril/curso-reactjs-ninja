import React from "react";
import { connect } from "react-redux";

import {
  Container,
  Video,
  VideoThumb,
  VideoTitle,
  PlayStyled,
  VideoLink,
} from "./styles";

const VideosList = ({ videos, handleClick }) => (
  <Container>
    {/* Como não é um Array, precisa usar Object.keys passando o ID do vídeo, porque esta função só retorna as keys */}
    {Object.keys(videos).map((id) => (
      <Video key={id}>
        <VideoLink href="#!" onClick={handleClick(id)}>
          <VideoThumb>
            <PlayStyled />
          </VideoThumb>
          <VideoTitle>{videos[id].title}</VideoTitle>
        </VideoLink>
      </Video>
    ))}
  </Container>
);

const mapStateToProps = (state) => ({
  videos: state.videos,
});

const mapDispatchToProps = (dispatch) => ({
  handleClick: (id) => (e) => {
    e.preventDefault();
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(VideosList);
