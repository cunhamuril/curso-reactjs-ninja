import styled from "styled-components";

export const Container = styled.div`
  position: relative;

  display: flex;
  align-items: center;
  flex-direction: column;

  padding: 20px 0;
  min-height: 520px;
  border-radius: 2px;

  width: 100%;

  background-color: ${(props) => props.theme.colors.primaryDark};

  > h3 {
    color: ${(props) => props.theme.colors.title};
  }
`;
