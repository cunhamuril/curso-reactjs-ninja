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

export const ListTodo = styled.ul`
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

export const FormTodo = styled.form`
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

export const Filters = styled.div`
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

    > li > a {
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
