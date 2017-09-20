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
            <p>{message.date}</p>
            <a href="#">[X]</a>

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

// onClick = {this.props.handleDelete.bind(null, message)}

export default OneMessage;
