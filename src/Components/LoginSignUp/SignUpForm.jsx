import React, { Component } from "react";
import { Route, Redirect, Refresh } from "react-router-dom";

import "../../Styles/LoginSignUp.css";

class SignUpForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      username: '',
      email: '',
      age: '',
      password: '',
      signUpSuccess: false,
    };

    this.updateFromField = this.updateFromField.bind(this);
    this.handleSignUpSubmit = this.handleSignUpSubmit.bind(this);


  }

  //UPDATES FORM FIELDS AS THEY CHANGE AND SAVES IT TO STATE
  updateFromField(stateKey) {
        return (event) => {
          this.setState({[stateKey]: event.target.value});
        }
      }

//HANDLES A FORM SUBMIT TO SEND THE SIGN UP DATA TO THE DATABASE AND CHECK FOR AUTHENTICATION

  handleSignUpSubmit(e) {
    e.preventDefault();

    var form = new FormData();

    form.append("firstName", this.state.firstName);
    form.append('lastName', this.state.lastName);
    form.append('username', this.state.username);
    form.append('email', this.state.email);
    form.append('age', this.state.age);
    form.append('password', this.state.password);

    return fetch("https://thawing-wave-85503.herokuapp.com/api/users", {
      method: "POST",
      headers: new Headers({
        Accept: "application/hal+json",
        "Content-Type": "application/json",
      }),
      credentials: "include"
    }).then(
      function(response) {
        console.log(response);
        if (response.status === 200) {
          this.setState({ signUpSuccess: true });
      console.log("sign up is " + this.state.signUpSuccess );
        } else {
          console.log("sign up is " +  this.state.signUpSuccess);
        }
      }.bind(this)
    );
  }

  render() {
    if(this.state.signUpSuccess) {
      return <Redirect to="/" />;
    }

    return (
      <div className="signUpContainer">
        <h1 className="signupTitle">Sign-up</h1>
        <form className="signupForm" onSubmit={this.handleSignUpSubmit}>
          <div>
          <label className="signupLabel">
            First Name:</label>
          <input type="text" onChange={this.updateFromField('firstName')} value={this.state.firstName}/>
            </div>
          <br />
          <label className="signupLabel">
            Last Name:
            <input className="familyName" type="text" onChange={this.updateFromField('lastName')} value={this.state.lastName} />
          </label>
          <br />
          <label className="signupLabel">
            Username:
            <input className="userName" type="text" onChange={this.updateFromField('username')} value={this.state.username}/>
          </label>
          <br />
          <label className="signupLabel">
            Email:
            <input type="email" onChange={this.updateFromField('email')} value={this.state.email} />
          </label>
          <br />
          <label className="signupLabel">
            Age:
            <input type="number" onChange={this.updateFromField('age')} value={this.state.age} />
          </label>
          <br />
          <label className="signupLabel">
            Password:
            <input type="password" onChange={this.updateFromField('password')} value={this.state.password} />
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
