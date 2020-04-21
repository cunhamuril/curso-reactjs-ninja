import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  bottom: 40px;

  display: flex;
  align-items: center;
  flex-direction: column;

  margin-top: 40px;

  > h3 {
    font-weight: 300;
  }

  > ul {
    display: flex;
    align-items: center;

    margin-top: 10px;

    min-width: 250px;

    list-style: none;
    text-decoration: none;

    > li + li::before {
      content: "|";

      margin: 0 10px;
      color: ${(props) => props.theme.colors.primary};
    }

    > li > button {
      width: 128px;
      padding: 8px 24px;
      border-radius: 2px;

      border: 0;
      font-size: 14px;
      text-align: center;
      text-decoration: none;
      transition: background-color 0.2s;
      color: ${(props) => props.theme.colors.text};
      background-color: ${(props) => props.theme.colors.button};

      &:hover {
        background-color: ${(props) => props.theme.colors.buttonHover};
      }
    }

    > li > .active {
      background-color: ${(props) => props.theme.colors.buttonHover};
    }
  }
`;
