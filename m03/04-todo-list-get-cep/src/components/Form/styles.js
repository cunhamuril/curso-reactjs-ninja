import styled from "styled-components";

export const Container = styled.form`
  display: flex;

  margin-top: 20px;

  width: 90%;
  height: 35px;
  max-width: 800px;

  > input {
    flex: 1;

    padding: 0 24px;
    border: 0;
    border-radius: 25px 0 0 25px;

    color: ${(props) => props.theme.colors.text};
    background-color: ${(props) => props.theme.colors.primaryLight};
  }

  > button {
    padding: 0 14px;
    border: 0;
    border-radius: 0 25px 25px 0;

    cursor: pointer;
    transition: background-color 0.2s;
    color: ${(props) => props.theme.colors.text};
    background-color: ${(props) => props.theme.colors.button};

    &:hover {
      background-color: ${(props) => props.theme.colors.buttonHover};
    }
  }
`;
