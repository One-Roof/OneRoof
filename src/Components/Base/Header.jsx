import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <div>
        <div><a href="/messagelist">Messages</a></div>
        <div><a href="/calendar">Calendar</a></div>
        <div><a href="/albums">Albums</a></div>
        <div><a href="/">Home</a></div>
        <div><a href="/login">Log In</a></div>
        <div><a href="/login">Sign Up</a></div>
      </div>
    )
  }
}

export default Header;
