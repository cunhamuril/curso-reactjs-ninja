import React, { Component } from "react";

class Message extends Component {
  render() {
    return <li style={{ background: this.props.color }}>{this.props.text}</li>;
  }
}

export default Message;
