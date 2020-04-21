import React, { Component } from "react";
import { ThemeProvider } from "styled-components";
import { BrowserRouter } from "react-router-dom";

import { Container, SwitchCustom } from "./App.styles";

import GlobalStyle from "./styles/global";

import light from "./styles/themes/light";
import dark from "./styles/themes/dark";

import Layout from "./components/Layout";
import Routes from "./Routes";

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
        <BrowserRouter>
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
            <Layout>
              <Routes />
            </Layout>
          </Container>
        </BrowserRouter>
      </ThemeProvider>
    );
  }
}

export default App;
