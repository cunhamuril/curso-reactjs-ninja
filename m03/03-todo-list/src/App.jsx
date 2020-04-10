import React, { Component } from "react";
import { ThemeProvider } from "styled-components";

import { Container, SwitchCustom } from "./App.styles";

import GlobalStyle from "./styles/global";

import light from "./styles/themes/light";
import dark from "./styles/themes/dark";

import Main from "./components/Main";

class App extends Component {
  constructor() {
    super();

    this.state = {
      theme: light,
    };

    this.toggleTheme = () => {
      const theme = this.state.theme.title === "light" ? dark : light;

      this.setState({ theme });

      localStorage.setItem("theme", theme.title);
    };
  }

  componentDidMount() {
    this.setState({
      theme: localStorage.getItem("theme") === "dark" ? dark : light,
    });
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
