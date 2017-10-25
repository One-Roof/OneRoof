import React, { Component } from "react";
import { Redirect } from "react-router-dom";

import "../../Styles/LoginSignUp.css";

class SignUpForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      username: "",
      email: "",
      age: "",
      password: "",
      signUpSuccess: false
    };

    this.updateFormField = this.updateFormField.bind(this);
    this.handleSignUpSubmit = this.handleSignUpSubmit.bind(this);
  }

  //UPDATES FORM FIELDS AS THEY CHANGE AND SAVES IT TO STATE
  updateFormField(stateKey) {
    return event => {
      this.setState({ [stateKey]: event.target.value });
    };
  }

  //HANDLES A FORM SUBMIT TO SEND THE SIGN UP DATA TO THE DATABASE AND CHECK FOR AUTHENTICATION

  handleSignUpSubmit(e) {
    e.preventDefault();

    let newUserCheck = {
      username: this.state.username,
      authority: "ROLE_ADMIN"
    };

    let newUser = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      username: this.state.username,
      email: this.state.email,
      age: this.state.age,
      password: this.state.password,
      admin: true
    };

    return fetch("https://thawing-wave-85503.herokuapp.com/api/users", {
      method: "POST",
      headers: new Headers({
        Accept: "application/hal+json",
        "Content-Type": "application/json"
      }),
      credentials: "include",
      body: JSON.stringify(newUser)
    })
      .then(results => results.json())
      .then(responseOne => {
        fetch("https://thawing-wave-85503.herokuapp.com/api/authorities", {
          method: "POST",
          headers: new Headers({
            Accept: "application/hal+json",
            "Content-Type": "application/json"
          }),
          credentials: "include",
          body: JSON.stringify(newUserCheck)
        })
          .then(results => results.json())
          .then(
            function(response) {
              console.log(response);
              if (response.status === 201 || response.status === 200) {
                this.setState({ signUpSuccess: true });
                console.log("sign up is " + this.state.signUpSuccess);
                console.log(newUserCheck);
              } else {
                console.log("sign up is " + this.state.signUpSuccess);
              }
            }.bind(this)
          );
      });
  }

  render() {
    if (this.state.signUpSuccess) {
      return <Redirect to="/" />;
    }

    return (
      <div className="signUpBody">
        <div className="bannerContainer">
          <h1 className="loginSignupBanner">
            Bringing the family back together under one roof!
          </h1>
        </div>
        <div className="signUpContainer">
        <form className="signupForm" onSubmit={this.handleSignUpSubmit}>
            <p className="signupdescriptionParagraph">OneRoof is a one stop shop for family collaboration. Plan vacations, keep track of important dates and collaborate as a family like you are all back under one roof!</p>
            <label className="signupLabel">First Name:</label>
            <input className="nameField"
              type="text"
              onChange={this.updateFormField("firstName")}
              value={this.state.firstName}
            />
          <br />
          <label className="signupLabel">
            Last Name:
            <input className="nameField"
              type="text"
              onChange={this.updateFormField("lastName")}
              value={this.state.lastName}
            />
          </label>
          <br />
          <label className="signupLabel">
            Username:
            <input className="usernameField"
              type="text"
              onChange={this.updateFormField("username")}
              value={this.state.username}
            />
          </label>
          <br />
          <label className="signupLabel">
            Email:
            <input className="emailField"
              type="email"
              onChange={this.updateFormField("email")}
              value={this.state.email}
            />
          </label>
          <br />
          <label className="signupLabel">
            Password:
            <input className="passwordField"
              type="password"
              onChange={this.updateFormField("password")}
              value={this.state.password}
            />
          </label>
          <br />
          <input className="signUpSubmitButton" type="submit" value="Sign Up"/>
        </form>
        </div>
      </div>
    );
  }
}

export default SignUpForm;
