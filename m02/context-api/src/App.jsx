import React, { PureComponent } from "react";
import MessageList from "./components/message-list";
import PropTypes from "prop-types";

class App extends PureComponent {
  getChildContext() {
    return {
      color: "purple"
    };
  }

  render() {
    return (
      <div className="App">
        <MessageList
          messages={[{ text: "hey" }, { text: "ho" }, { text: `let's go` }]}
          color="purple"
        />
      </div>
    );
  }
}

App.childContextTypes = {
  color: PropTypes.string
};

export default App;
