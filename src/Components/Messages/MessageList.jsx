import React, { Component } from 'react';
import OneMessage from './OneMessage';
import '../../Styles/MessageList.css';


class MessageList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messageList: [],
    };
  }

  componentDidMount() {
    console.log("message fetched");
    fetch("https://thawing-wave-85503.herokuapp.com/api/messages")
      .then(results => results.json())
      .then(response => {
        let messageList = response._embedded.messages
        this.setState({
          messageList: messageList
        })
      })
  }

  render() {
    return (
      <div className="messageMainContainer">
        <div>
        <div className="messageFormContainer">
        <form >
          <label>
            <input className="messageTextBox" type="text" placeholder="What's on your mind?"/>
          </label>
          <input className="submitButton" type="Submit" value="Submit"/>
        </form>
        </div>
        <div className="messageListContainer">
        <div className="messageHeader">
          <div>
          <h2>Recent Posts:</h2>
          </div>
          <div className="refreshButtonContainer">
            <button type="submit" className="refreshButton">
              Refresh
            </button>
            </div>
        </div>
        <div>
          <OneMessage
            messageList={this.state.messageList}
            />
        </div>
        </div>
        </div>
        <div className="userBio">
          <div className="profilePicture">
          </div>
          <div>
            User: Matt McDonald
          </div>

        </div>
      </div>
    );
  }
}

export default MessageList;
