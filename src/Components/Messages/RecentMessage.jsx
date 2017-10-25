import React, { Component } from "react";
import "../../Styles/MessageList.css";

class RecentMessage extends Component {


  render() {
    let recentMessage = this.props.messageList.map(message => {
      return (

        <div className="recentMessageContainer" key={message._links.self.href}>
          <div>
            <p className="recentMessageContent">
              {message.content}  -  Bob
            </p>
          </div>
        </div>
      );
    });
    return (
      <div>
        <div className="recentMessageContainer">
            <div>
              <p className="recentMessageContent">I will I will Julia, it's sitting on my counter waiting for a stamp!  -  Bob</p>
            </div>
        </div>
      <div className="recentMessageContainer">
          <div>
            <p className="recentMessageContent">Also remember to mail in your RSVPs for my wedding! I'm talking to you Bob...  -  Julia</p>
          </div>
      </div>
      <div className="recentMessageContainer">
        <div>
          <p className="recentMessageContent">I think I could make that work, I have to check with work but I might be able to make it for a few days.  -  Julia</p>
        </div>
      </div>
      <div className="recentMessageContainer">
        <div>
          <p className="recentMessageContent">That sounds fun to me!  -  Matt</p>
        </div>
      </div>
      <div>
        {recentMessage}
      </div>
      </div>
    );
  }
}

// onClick = {this.props.handleDelete.bind(null, message)}

export default RecentMessage;
