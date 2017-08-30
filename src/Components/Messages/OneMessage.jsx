import React, { Component } from 'react';
import '../../Styles/MessageList.css';

class OneMessage extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    let oneMessage = this.props.messageList.map(message => {
      return (
        <div className="oneMessageContainer" key={message.id}>
          <div className="">
            <p>User:</p>
          </div>
          <div>
            <p className="oneMessageContent">{message.content}</p>
          </div>
        </div>
      );
    })
    return (
      <div>
        {oneMessage}
      </div>
    )
  }
}

export default OneMessage;
