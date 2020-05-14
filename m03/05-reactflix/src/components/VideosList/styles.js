import styled from "styled-components";

import Play from "~/components/Play";

export const PlayStyled = styled(Play)`
  width: 50px;
  height: 50px;

  fill: #999;

  transition: all 0.15s ease-in-out;
`;

export const Video = styled.section`
  &:hover ${PlayStyled} {
    transform: scale(1.5);
  }
`;

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;

  padding: 10px;

  & ${Video} {
    flex: 1 1 300px;
    margin: 0 5px 5px;
  }
`;

export const VideoThumb = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 150px;
  border: 1px solid #999;
`;

export const VideoTitle = styled.h2`
  font-size: 18px;
`;
