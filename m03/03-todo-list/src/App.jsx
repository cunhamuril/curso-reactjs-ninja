import React, { Component } from "react";
import { ThemeProvider } from "styled-components";

import light from "./styles/themes/light";
import dark from "./styles/themes/dark";

import GlobalStyle from "./styles/global";
import Main from "./components/Main";

import { Container, SwitchCustom } from "./App.styles";

const themeStorage = localStorage.getItem("theme");

class App extends Component {
  constructor() {
    super();

    this.state = {
      theme: themeStorage ? (themeStorage === "light" ? light : dark) : light,
    };

    this.toggleTheme = () => {
      const theme = this.state.theme.title === "light" ? dark : light;

      this.setState({ theme });

      localStorage.setItem("theme", theme.title);
    };
  }

  render() {
    return (
      <ThemeProvider theme={this.state.theme}>
        <GlobalStyle />
        <Container>
          <SwitchCustom
            onChange={this.toggleTheme}
            checked={this.state.theme === dark}
            checkedIcon={false}
            uncheckedIcon={false}
            height={15}
            width={40}
            handleDiameter={20}
            offColor={this.state.theme.colors.primary}
            onColor={this.state.theme.colors.primaryDark}
          />
          <Main />
        </Container>
      </ThemeProvider>
    );
  }
}

export default App;
