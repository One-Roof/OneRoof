import React, { Component } from "react";
import '../../Styles/Header.css'

class Header extends Component {
  render() {
    return (
      <div className="headerContainer">
        <div className="headerLeft">
          <a href="/messagelist">Messages</a>
          <a href="/calendar">Calendar</a>
          <a href="/home">Home</a>
        </div>
        <div className="headerRight">
          <a href="/">Log In</a>
          <a href="/">Sign Up</a>
        </div>
      </div>
    )
  }
}

export default Header;
