import React, { Component } from "react";
import "../Styles/Home.css";
import RecentMessage from "./Messages/RecentMessage";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messageList: [],
      messageContent: "",
      name: ""
    };
  }

  // INITIAL DOUBLE FETCH FOR RECENT MESSAGES AND THE CURRENT USERS NAME ON PAGE LOADING

  componentDidMount() {
    console.log("message fetched");
    fetch("https://thawing-wave-85503.herokuapp.com/api/messages", {
      credentials: "include"
    })
      .then(results => results.json())
      .then(responseOne => {
        fetch("https://thawing-wave-85503.herokuapp.com/something", {
          credentials: "include"
        })
          .then(results => results.json())
          .then(responseTwo => {
            let userName = responseTwo.username;
            let messageList = responseOne._embedded.messages;
            this.setState({
              messageList: messageList,
              userName: userName
            });
            console.log(this.state.userName);
          });
        console.log(this.state.userName);
      });
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2 className="usersWelcomeName">
            Welcome, {this.state.userName}
          </h2>
        </div>
        <div className="homeMainContainer">
          <div className="upcomingEventsContainer">
            <h3 className="eventsheader">Upcoming Events</h3>
            <div className="upcomingdateBox">
                <li className="dateBullet">Oct. 27th  -  Matt's Birthday</li>
                <li className="dateBullet">Nov. 23rd  -  Thanksgiving</li>
                <li className="dateBullet">Dec. 25th  -  Christmas</li>
                <li className="dateBullet">April 1st  -  Julia's Wedding</li>
            </div>
          </div>
          <div className="recentMessagesContainer">
            <h3 className="homeMessageHeader">Recent Messages</h3>
            <RecentMessage messageList={this.state.messageList} />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;


//INITIAL FETCH FOR RECENT MESSAGES ON PAGE LOADING
  // componentDidMount() {
  //   console.log("message fetched");
  //   fetch("https://thawing-wave-85503.herokuapp.com/api/messages", {
  //     credentials: "include"
  //   })
  //     .then(results => results.json())
  //     .then(response => {
  //       let messageList = response._embedded.messages;
  //       this.setState({
  //         messageList: messageList
  //       });
  //     });
  // }
