import React, { Component } from "react";
import '../../Styles/Header.css'

class Header extends Component {
  render() {
    return (
      <div className="headerContainer">
        <div className="headerLeft">
          <a className="headerLink" href="/messagelist">Messages</a>
          <a className="headerLink" href="/calendar">Calendar</a>
          <a className="headerLink" href="/home">Home</a>
        </div>
        <div className="headerRight">
          <a className="headerLink" href="/">Log In</a>
          <a className="headerLink" href="/">Sign Up</a>
        </div>
      </div>
    )
  }
}

export default Header;
