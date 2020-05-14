import styled from "styled-components";

import { headerHeight } from "~/utils/constants";

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0 10px;

  height: ${headerHeight};
  background: #333;
`;

export const HeaderTitle = styled.h1`
  margin-bottom: 0;
`;

export const RegisterButton = styled.button`
  margin-bottom: 0;
`;
