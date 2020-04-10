import React, { Component } from "react";
import { ThemeProvider } from "styled-components";

import light from "./styles/themes/light";
import dark from "./styles/themes/dark";

import GlobalStyle from "./styles/global";
import Main from "./components/Main";

const themeStorage = localStorage.getItem("theme");

class App extends Component {
  constructor() {
    super();

    this.state = {
      theme: themeStorage ? themeStorage.theme : light,
    };

    this.toggleTheme = () => {
      this.setState({
        theme: this.state.theme?.title === "light" ? dark : light,
      });
    };
  }

  render() {
    console.log(themeStorage);

    return (
      <ThemeProvider theme={this.state.theme}>
        <div className="App">
          <GlobalStyle />
          <Main />
        </div>
      </ThemeProvider>
    );
  }
}

export default App;
