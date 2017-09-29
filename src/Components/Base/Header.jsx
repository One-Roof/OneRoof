import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../../Styles/Header.css";

class Header extends Component {

  handleLogOut(e) {
    this.setState({loginSuccess: false})
  }



  render() {
    return (
      <div className="headerContainer">
        <div className="headerLeft">
          <Link className="headerLink" to="/messagelist">
            Messages
          </Link>
          <Link className="headerLink" to="/calendar">
            Calendar
          </Link>
          <Link className="headerLink" to="/home">
            Home
          </Link>
        </div>
        <div className="headerRight">
          <Link className="headerLink" to="/">
            Log In
          </Link>
          <Link className="headerLink" to="/">
            Sign Up
          </Link>
          <Link className="headerLink" to="/" onClick={this.handleLogOut}>
            Log Out
          </Link>
        </div>
      </div>
    );
  }
}

export default Header;
