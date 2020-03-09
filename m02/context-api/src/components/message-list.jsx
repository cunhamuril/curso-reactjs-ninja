import React, { Component } from "react";

import Message from "./message";

class MessageList extends Component {
  render() {
    return (
      <ul>
        {this.props.messages.map(message => (
          <Message text={message.text} key={message.text} />
        ))}
      </ul>
    );
  }
}

export default MessageList;
