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
              if (response.status === 201) {
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
      <div className="signUpContainer">
        <h1 className="signupTitle">Sign-up</h1>
        <form className="signupForm" onSubmit={this.handleSignUpSubmit}>
          <div>
            <label className="signupLabel">First Name:</label>
            <input
              type="text"
              onChange={this.updateFormField("firstName")}
              value={this.state.firstName}
            />
          </div>
          <br />
          <label className="signupLabel">
            Last Name:
            <input
              className="familyName"
              type="text"
              onChange={this.updateFormField("lastName")}
              value={this.state.lastName}
            />
          </label>
          <br />
          <label className="signupLabel">
            Username:
            <input
              className="userName"
              type="text"
              onChange={this.updateFormField("username")}
              value={this.state.username}
            />
          </label>
          <br />
          <label className="signupLabel">
            Email:
            <input
              type="email"
              onChange={this.updateFormField("email")}
              value={this.state.email}
            />
          </label>
          <br />
          <label className="signupLabel">
            Age:
            <input
              type="number"
              onChange={this.updateFormField("age")}
              value={this.state.age}
            />
          </label>
          <br />
          <label className="signupLabel">
            Password:
            <input
              type="password"
              onChange={this.updateFormField("password")}
              value={this.state.password}
            />
          </label>
          <br />
          <label className="signupLabel">
            Confirm Password:
            <input type="password" />
          </label>
          <br />
          <input className="signUpSubmitButton" type="submit" />
        </form>
      </div>
    );
  }
}

export default SignUpForm;
