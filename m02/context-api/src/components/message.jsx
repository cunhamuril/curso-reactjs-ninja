import React, { Component } from "react";
import PropTypes from "prop-types";

class Message extends Component {
  componentDidMount() {
    this.unsubscribe = this.context.store.subscribe(() => this.forceUpdate());
  }

  componentWillUnmount() {
    this.unsubscribe(); // remover função para não ficar na memória
  }

  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <li style={{ background: this.context.store.color }}>
        {this.props.text}
        <button onClick={this.context.store.setColor(this.props.color)}>
          Change color
        </button>
      </li>
    );
  }
}

// É obrigatório o contextTypes, para fazer a amarração do context
Message.contextTypes = {
  store: PropTypes.object
};

export default Message;
