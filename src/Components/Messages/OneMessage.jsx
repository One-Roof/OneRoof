import React, { Component } from 'react';

class OneMessage extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    let oneMessage = this.props.messageList.map(message => {
      return (
        <div className="" key={message.id}>
          <div className="">
            <p>User</p>
          </div>
          <div>
            <p>Message Content: {message.content}</p>
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
