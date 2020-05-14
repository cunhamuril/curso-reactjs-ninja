import styled from "styled-components";

import { footerHeight } from "~/utils/constants";

export const Container = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;

  height: ${footerHeight};

  color: #fff;
  background: #333;
`;
