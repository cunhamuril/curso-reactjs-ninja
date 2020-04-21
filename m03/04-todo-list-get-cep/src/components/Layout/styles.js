import styled from "styled-components";

export const Container = styled.ul`
  position: relative;

  display: flex;
  align-items: center;
  flex-direction: column;

  min-height: 520px;
  border-radius: 2px;

  width: 100%;

  background-color: ${({ theme }) => theme.colors.primaryDark};

  > h3 {
    color: ${({ theme }) => theme.colors.title};
  }
`;

export const Header = styled.header`
  align-self: flex-start;

  width: 100%;
  max-width: 240px;
  padding: 14px 0;

  > ul {
    display: flex;
    align-items: center;
    justify-content: space-evenly;

    list-style: none;

    > li {
      > a {
        text-decoration: none;
        color: ${({ theme }) => theme.colors.primaryLight};

        &:hover {
          text-decoration: underline;
        }
      }

      > a.active {
        color: ${({ theme }) => theme.colors.text};
        font-weight: 700;
      }
    }
  }
`;
