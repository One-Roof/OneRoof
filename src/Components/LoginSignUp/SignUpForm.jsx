import React, { Component } from 'react';
import '../../Styles/LoginSignUp.css'

class SignUpForm extends Component {

  render() {
    return (
      <div className="signUpContainer">
        <h1 className="signupTitle">Sign-up</h1>
        <form className="signupForm">
          <label className="signupLabel">
            Family Name:
          <input  className="familyName" type="text" name="familyname" />
        </label><br />
          <label className="signupLabel">
            Name:
          <input type="text" name="name" />
        </label><br />
          <label className="signupLabel">
            Email:
          <input type="email" name="email" />
        </label><br />
          <label className="signupLabel">
            Age:
          <input type="number" name="age" />
        </label><br />
          <label className="signupLabel">
            Password:
          <input type="password" name="psw" />
        </label><br />
          <label className="signupLabel">
            Confirm Password:
          <input type="password" name="psw" />
        </label><br/>
      <input className="signUpSubmitButton" type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}

export default SignUpForm;
