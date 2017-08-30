import React, { Component } from 'react';
import '../Styles/Home.css';

class Home extends Component {
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
                <ul>
                  <li></li>
                </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
