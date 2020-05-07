import styled from "styled-components";

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

export const Footer = styled.footer`
  height: ${footerHeight};
  background: #333;
`;
