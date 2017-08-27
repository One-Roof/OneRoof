import React, { Component } from 'react';
import { Route, Redirect, Refresh } from 'react-router'

class LoginForm extends Component {

  constructor() {
    super();
    this.state = {
      email: '',
      lastName: '',
    }
    console.log(this.props)

    this.handleEmailChange = this.handleEmailChange.bind(this)
    this.handleLastNameChange = this.handleLastNameChange.bind(this)
  }

  handleEmailChange = (event) => {
  this.setState({ email: event.target.value });
};

  handleLastNameChange = (event) => {
  this.setState({ lastName: event.target.value });
};

  handleFormSubmit(e) {
    e.preventDefault();


    let userArray = this.props.resp.map(credential => {
      if (credential.email === this.state.email && credential.lastName === this.state.lastName) {
        <Redirect to='/home' />
      }
      else {
        console.log("login error")
      }

    })
}

  render() {

    return (
      <div>
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
