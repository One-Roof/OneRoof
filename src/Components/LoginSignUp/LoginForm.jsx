import React, { Component } from 'react';
import { Route, Redirect, Refresh } from 'react-router'
import '../../Styles/LoginSignUp.css'

class LoginForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      lastName: '',
    }
    console.log(this.props.resp)

    this.handleEmailChange = this.handleEmailChange.bind(this)
    this.handleLastNameChange = this.handleLastNameChange.bind(this)
    this.handleFormSubmit = this.handleFormSubmit.bind(this)
  }

  handleEmailChange = (event) => {
  this.setState({ email: event.target.value });
};

  handleLastNameChange = (event) => {
  this.setState({ lastName: event.target.value });
};

  handleFormSubmit(e) {
    e.preventDefault();
    console.log(this.props.resp)
    console.log(this.state.email)
    console.log(this.state.lastName)
    let userArray = this.props.resp.filter(credential => {
      console.log(credential.email)
      console.log(credential.lastName)
      return (credential.email == this.state.email) })
      console.log(userArray)
    if (userArray == true) {

        <Redirect to='/home'/>
        console.log("success")
    } else {
        console.log("login error")
    }

}

  render() {

    return (
      <div className="loginContainer">
        <form onSubmit={this.handleFormSubmit}>
            <h1>Login</h1>
          <label>
            Email:
          <input type={"text"}
            value={this.state.email}
            onChange={this.handleEmailChange}/>
        </label><br />
          <label>
            Last Name:
          <input type={"text"}
            value={this.state.lastName}
            onChange={this.handleLastNameChange}
             />
        </label><br />
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}

export default LoginForm;
