import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <div>
        <div><a href="/postlist">Postings</a></div>
        <div><a href="/calendar">Calendar</a></div>
        <div><a href="/">Home</a></div>      
      </div>
    )
  }
}

export default Header;
