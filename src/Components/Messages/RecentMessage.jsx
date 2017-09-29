import React, { Component } from "react";
import "../../Styles/MessageList.css";

class RecentMessage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let recentMessage = this.props.messageList.map(message => {
      return (
        <div className="recentMessageContainer" key={message._links.self.href}>
          <div>
            <p className="recentMessageContent">
              {message.content}
            </p>
            <p>
              {message.date}
            </p>
            <a href="#">[X]</a>
          </div>
        </div>
      );
    });
    return (
      <div>
        {recentMessage}
      </div>
    );
  }
}

// onClick = {this.props.handleDelete.bind(null, message)}

export default RecentMessage;
