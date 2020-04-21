import styled from "styled-components";

export const Container = styled.table`
  margin-top: 40px;

  width: 100%;
  padding: 10px;
  max-width: 700px;
  border-radius: 4px;

  background-color: ${({ theme }) => theme.colors.primaryLight};

  border-spacing: 10px;

  thead {
    font-weight: 700;
  }

  tbody {
    color: ${({ theme }) => theme.colors.text}90;
  }
`;
