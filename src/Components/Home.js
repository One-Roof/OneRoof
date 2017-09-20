import React, { Component } from 'react';
import '../Styles/Home.css';
import OneMessage from './Messages/OneMessage';
import MessageList from './Messages/MessageList.jsx';

class Home extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     messageList: [],
  //     messageContent: '',
  //   };
  // }
  //
  // componentDidMount() {
  //   fetch("https://thawing-wave-85503.herokuapp.com/api/messages")
  //     .then(results => results.json())
  //     .then(response => {
  //       let messageList = response._embedded.messages
  //       this.setState({
  //         messageList: messageList
  //       })
  //     })
  // }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome, ________</h2>
        </div>
        <div className="homeMainContainer">
          <div className="upcomingEventsContainer">
            <h4>Upcoming Events</h4>
            <ul>
              <li></li>
            </ul>
          </div>
          <div className="recentMessagesContainer">
              <h4>Recent Messages</h4>
                
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
