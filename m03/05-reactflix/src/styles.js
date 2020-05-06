import styled from "styled-components";

import Play from "./components/Play";

const headerHeight = "60px";
const footerHeight = "30px";

export const Container = styled.div`
  height: 100%;
`;

export const Header = styled.header`
  height: ${headerHeight};
  background: #333;
`;

export const Main = styled.main`
  min-height: calc(100% - (${headerHeight} + ${footerHeight}));
`;

export const VideosList = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const Video = styled.section`
  flex: 1 1 300px;
  margin: 0 5px 5px;
`;

export const VideoThumb = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 150px;
  border: 1px solid #999;
`;

export const StyledPlay = styled(Play)`
  width: 50px;
  height: 50px;

  fill: #999;
`;

export const VideoTitle = styled.h2`
  font-size: 18px;
`;

export const Footer = styled.footer`
  height: ${footerHeight};
  background: #333;
`;
