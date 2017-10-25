import React, { Component } from 'react';
import '../../Styles/MessageList.css';

class OneMessage extends Component {
  constructor(props) {
    super()
    this.state = {
      messageId: '',
    }

    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete(e) {

    return fetch("https://thawing-wave-85503.herokuapp.com/api/messages", {
      method: "DELETE",
      headers: {
        Accept: "application/json, application/xml, text/plain, text/html, *.*",
      },
      credentials: "include"
    }).then(
      function(response) {
        console.log(response);
        if (response.status === 200) {
          console.log("message deleted")
        } else {
          console.log("message not deleted")
        }
      }.bind(this)
    );
  }

  render() {
    let oneMessage = this.props.messageList.map(message => {

      return (
        <div className="oneMessageContainer" key={message._links.self.href}>
          <div>
            <p>{message.content}  -  <span className="oneMessageContent">Bob</span></p>
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
