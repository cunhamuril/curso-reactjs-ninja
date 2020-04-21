import React from "react";

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
            <a
              href={page.path}
              className={window.location.pathname === page.path ? "active" : ""}
            >
              {page.title}
            </a>
          </li>
        ))}
      </ul>
    </Header>

    {children}
  </Container>
);

export default Layout;
