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
        <div className="messageFormContainer">
        <form >
          <label className="titleBlock">
            Title:
            <input className="titleTextBox"type="text" name="name"/>
          </label>
          <br/>
          <label>
            Message:
            <input className="messageTextBox" type="text" />
          </label>
          <br/>
          <input type="Submit" value="Submit"/>
        </form>
        </div>
        <div className="messageListContainer">
        <div className="">
          <button type="submit">
            Refresh
          </button>
          <h2>Recent Posts:</h2>
        </div>
        <div>
          <OneMessage
            messageList={this.state.messageList}
            />
        </div>
        </div>
      </div>
    );
  }
}

export default MessageList;
