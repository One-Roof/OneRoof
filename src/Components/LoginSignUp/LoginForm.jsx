import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import "../../Styles/LoginSignUp.css";
import "../../Styles/LoginSignUp.css";

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      password: "",
      loginSuccess: false,
      token: ""
    };

    this.handleuserNameChange = this.handleuserNameChange.bind(this);
    this.handlepasswordChange = this.handlepasswordChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

//HANDLING ANY CHANGE IN THE INPUT FIELDS OF THE LOGIN FORM
  handleuserNameChange = event => {
    this.setState({ userName: event.target.value });
  };

  handlepasswordChange = event => {
    this.setState({ password: event.target.value });
  };

//APPENDING WHAT WAS CHANGED IN THE FORM TO THE DATABASE THAT IS FETCHED ON THE FORM SUBMISSION BUTTTON

  handleFormSubmit(e) {


    e.preventDefault();


    var form = new FormData();

    form.append("username", this.state.userName);
    form.append("password", this.state.password);
    console.log(form);

    console.log(this.state.userName);
    return fetch("https://thawing-wave-85503.herokuapp.com/login", {
      method: "POST",
      headers: {
        Accept: "application/json, application/xml, text/plain, text/html, *.*",
        "Content-Type": "application/x-www-form-urlencoded; charset=utf-8",
        Authorization:
          "Basic " +
          window.btoa(this.state.userName + ":" + this.state.password)
      },
      credentials: "include"
    }).then(
      function(response) {
        console.log(response);
        if (response.status === 200) {
          this.setState({ loginSuccess: true });
          console.log("login is " + this.state.loginSuccess);
        } else {
          console.log("login is " + this.state.loginSuccess);
        }
      }.bind(this)
    );
  }

  render() {
    if (this.state.loginSuccess) {
      return <Redirect to="/home" />;
    }

    return (
      <div className="loginContainer">
        <h1 className="loginTitle">Login</h1>
        <form className="loginForm" onSubmit={this.handleFormSubmit}>
          <label className="userNameLabel">
            Username:
            <input
              className="userNamebox"
              type={"text"}
              value={this.state.userName}
              onChange={this.handleuserNameChange}
            />
          </label>
          <br />
          <label className="nameLabel">
            Password:
            <input
              className="namebox"
              type={"text"}
              value={this.state.password}
              onChange={this.handlepasswordChange}
            />
          </label>
          <br />
          <input className="loginSubmitButton" type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default LoginForm;
