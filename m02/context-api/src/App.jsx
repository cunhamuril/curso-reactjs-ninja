import React, { PureComponent } from "react";
import MessageList from "./components/message-list";
import PropTypes from "prop-types";

class App extends PureComponent {
  constructor() {
    super();
    // this.state = { color: "purple " };

    let subscriptions = [];

    const subscribe = f => {
      subscriptions.push(f);
      return () => {
        subscriptions = subscriptions.filter(func => func !== f);
      };
    };

    const setColor = (color, update) => () => {
      // this.setState({ color });
      this.store.color = color;
      subscriptions.forEach(f => {
        console.log("subscriptions");
        f();
      });
    };

    this.store = {
      color: "purple",
      setColor,
      subscribe
    };
  }

  getChildContext() {
    return { store: this.store };
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
  store: PropTypes.object
};

export default App;
