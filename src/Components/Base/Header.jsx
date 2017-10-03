import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../../Styles/Header.css";
import cookie from 'react-cookies';
import { Redirect } from "react-router-dom";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      logOutSuccess: false,
    }

  this.handleLogOut = this.handleLogOut.bind(this)
}
  handleLogOut(e) {
    return fetch("https://thawing-wave-85503.herokuapp.com/logout", {
      method: "GET",
      headers: {
        Accept: "application/json, application/xml, text/plain, text/html, *.*",
      },
      credentials: "include"
    }).then(
      function(response) {
        console.log(response);
        if (response.status === 200) {
          this.setState({ logOutSuccess: true });
          console.log("logout is " + this.state.logOutSuccess);
        } else {
          console.log("logout is " + this.state.logOutSuccess);
        }
      }.bind(this)
    );
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
