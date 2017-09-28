import React, { Component } from 'react';
import '../Styles/Home.css';
import RecentMessage from './Messages/RecentMessage';


class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messageList: [],
      messageContent: '',
      name: '',
    };

  }

  componentDidMount() {

    console.log("message fetched");
    fetch("https://thawing-wave-85503.herokuapp.com/api/messages", {
      credentials:'include',
    })

      .then(results => results.json())
      .then(response => {
        let messageList = response._embedded.messages
        this.setState({
          messageList: messageList
        })
      })
  }

  // DOUBLE fetch
  componentDidMount() {

    console.log("message fetched");
    fetch("https://thawing-wave-85503.herokuapp.com/api/messages", {
      credentials:'include',
    })
      .then(results => results.json())
      .then(responseOne => {

        fetch("https://thawing-wave-85503.herokuapp.com/something", {
          credentials:'include',
        })
        .then(results => results.json())
        .then(responseTwo => {
          let name = responseTwo.name
          let messageList = responseOne._embedded.messages
          this.setState({
            messageList: messageList,
            name: name
          })
          console.log(this.state.name)
        })
        console.log(this.state.name)
      })
  }



  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome, {this.state.name}</h2>
        </div>
        <div className="homeMainContainer">
          <div className="upcomingEventsContainer">
            <h4>Upcoming Events</h4>
            <ul>
              <li></li>
            </ul>
          </div>
          <div className="recentMessagesContainer">
              <h4>Recent Messages: </h4>
                <RecentMessage

                  messageList={this.state.messageList}
                  />

          </div>
        </div>
      </div>
    );
  }
}

export default Home;
