import React, { PureComponent } from "react";
import MessageList from "./components/message-list";
import PropTypes from "prop-types";

class App extends PureComponent {
  constructor() {
    super();
    this.state = { color: "purple " };

    this.setColor = color => () => {
      this.setState({ color });
    };
  }

  getChildContext() {
    return {
      color: this.state.color,
      setColor: this.setColor
    };
  }

  render() {
    return (
      <div className="App">
        <MessageList
          messages={[
            { text: "hey", color: "orange" },
            { text: "ho", color: "lightblue" },
            { text: `let's go`, color: "red" }
          ]}
        />
      </div>
    );
  }
}

App.childContextTypes = {
  color: PropTypes.string,
  setColor: PropTypes.func
};

export default App;
