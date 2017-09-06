import React, { Component } from 'react';
import OneMessage from './OneMessage';
import '../../Styles/MessageList.css';


class MessageList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messageList: [],
      messageContent: '',
    };

    this.handleMessageChange = this.handleMessageChange.bind(this)
    this.handleFormSubmit = this.handleFormSubmit.bind(this)

  }

  componentDidMount() {
    console.log(this.state.messageContent)
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

  handleMessageChange = (event) => {
    this.setState({messageContent: event.target.value})
    console.log(this.state.messageContent)
  }

  handleFormSubmit(e) {
    e.preventDefault();
    console.log(this.state.messageContent)
    let addMessage = {
      "content" : this.state.messageContent,
      "date" : "2017-08-27T00:00:00.000+0000",
    }
    console.log(JSON.stringify(addMessage))
    fetch(`https://thawing-wave-85503.herokuapp.com/api/messages`, {
          method: 'POST',
    	    headers: new Headers({
            'Authorization': 'Basic',
            'Content-Type': 'application/json'
          }),
          body: JSON.stringify(addMessage)
        })
  }

  render() {
    return (
      <div className="messageMainContainer">
        <div>
        <div className="messageFormContainer">

        <form onSubmit={this.handleFormSubmit}>

          <label>

            <input
              className="messageTextBox"
              type="text"
              onChange={this.handleMessageChange}
              value={this.state.messageContent}  placeholder="What's on your mind?"/>

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
