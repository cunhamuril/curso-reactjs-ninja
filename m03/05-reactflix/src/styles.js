import styled from "styled-components";

import { headerHeight, footerHeight } from "./utils/constants";

export const Container = styled.div`
  height: 100%;
`;

export const Main = styled.main`
  min-height: calc(100% - (${headerHeight} + ${footerHeight}));
`;
