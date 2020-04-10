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

  h3 {
    color: ${(props) => props.theme.colors.title};
  }

  input {
    margin-top: 20px;
    padding: 10px 24px;

    border: 0;
    width: 90%;
    max-width: 800px;
    border-radius: 25px;

    color: ${(props) => props.theme.colors.text};
    background-color: ${(props) => props.theme.colors.primaryLight};
  }

  ul {
    margin-top: 40px;
    min-width: 800px;

    list-style: none;
    line-height: 26px;
  }

  ul li.completed {
    text-decoration: line-through;
  }
`;

export const Filters = styled.div`
  position: absolute;
  bottom: 40px;

  display: flex;
  align-items: center;
  flex-direction: column;

  margin-top: 40px;

  h3 {
    font-weight: 300;
  }

  ul {
    display: flex;
    align-items: center;

    margin-top: 10px;

    min-width: 250px;

    list-style: none;
    text-decoration: none;

    li + li::before {
      content: "|";

      margin: 0 10px;
      color: ${(props) => props.theme.colors.primary};
    }

    li > a {
      display: inline-block;

      width: 128px;
      padding: 8px 24px;
      border-radius: 2px;

      color: ${(props) => props.theme.colors.text};
      font-size: 14px;
      text-align: center;
      text-decoration: none;
      background-color: ${(props) => props.theme.colors.button};
      transition: background-color 0.2s;

      &:hover {
        background-color: ${(props) => props.theme.colors.buttonHover};
      }
    }
  }
`;
