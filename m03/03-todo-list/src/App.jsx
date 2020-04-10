import React, { Component } from "react";
import { ThemeProvider } from "styled-components";

import light from "./styles/themes/light";
import dark from "./styles/themes/dark";

import GlobalStyle from "./styles/global";
import Main from "./components/Main";

import { Container, SwitchCustom } from "./App.styles";

const themeStorage = JSON.parse(localStorage.getItem("theme"));

class App extends Component {
  constructor() {
    super();

    this.state = {
      theme: themeStorage
        ? themeStorage.theme.title === "light"
          ? light
          : dark
        : light,
    };

    this.toggleTheme = () => {
      const valueToToggle = this.state.theme?.title === "light" ? dark : light;

      this.setState({
        theme: valueToToggle,
      });

      localStorage.setItem("theme", JSON.stringify({ theme: valueToToggle }));
    };
  }

  render() {
    console.log(themeStorage);

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
            offColor={this.state.theme?.colors.primary}
            onColor={this.state.theme?.colors.primaryDark}
          />
          <Main />
        </Container>
      </ThemeProvider>
    );
  }
}

export default App;
