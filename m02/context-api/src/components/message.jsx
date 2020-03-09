import React from "react";
import PropTypes from "prop-types";

const Message = (props, context) => (
  <li style={{ background: context.color }}>{props.text}</li>
);

// class Message extends Component {
//   render() {
//     return (
//       <li style={{ background: this.context.color }}>{this.props.text}</li>
//     );
//   }
// }

Message.contextTypes = {
  color: PropTypes.string
};

export default Message;
