import React from "react";
import { NavLink } from "react-router-dom";

import { Container, Header } from "./styles";

const pages = [
  { path: "/", title: "To Do List" },
  { path: "/buscacep", title: "Busca CEP" },
];

const Layout = ({ children }) => (
  <Container>
    <Header>
      <ul>
        {pages.map((page) => (
          <li>
            <NavLink exact to={page.path}>
              {page.title}
            </NavLink>
          </li>
        ))}
      </ul>
    </Header>

    {children}
  </Container>
);

export default Layout;
