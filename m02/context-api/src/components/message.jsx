import React, { Component } from "react";
import PropTypes from "prop-types";

class Message extends Component {
  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <li style={{ background: this.context.color }}>
        {this.props.text}
        <button onClick={this.context.setColor(this.props.color)}>
          Change color
        </button>
        <button
          onClick={() => {
            this.updated = "atualizou!";
            this.forceUpdate();
          }}
        >
          Forçar atualização: {this.updated}
        </button>
      </li>
    );
  }
}

// É obrigatório o contextTypes, para fazer a amarração do context
Message.contextTypes = {
  color: PropTypes.string,
  setColor: PropTypes.func
};

export default Message;
