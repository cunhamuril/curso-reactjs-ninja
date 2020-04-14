import styled from "styled-components";

export const Container = styled.ul`
  width: 90%;
  margin-top: 40px;
  max-width: 800px;

  line-height: 26px;

  > li {
    cursor: pointer;
    transition: color 0.1s;

    &:hover {
      color: ${(props) => props.theme.colors.primaryLight};
    }
  }

  > li.completed {
    text-decoration: line-through;
    color: ${(props) => props.theme.colors.primaryLight};
  }
`;
