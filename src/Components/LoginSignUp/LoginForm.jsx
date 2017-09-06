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
    // console.log(this.props.resp)
    console.log(this.state.email)
    console.log(this.state.lastName)

    var form = new FormData()

  form.append('username', this.state.email),
  form.append('password', this.state.lastName)
  console.log(form)

  console.log(this.state.email)
  return fetch('https://thawing-wave-85503.herokuapp.com/login', {
    method: 'POST',
    headers: {
      'Accept': 'application/json, application/xml, text/plain, text/html, *.*',
      'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'
    },
    body: form,
  })
    .then(function(response) {
      console.log(form)
      console.log(response)
      if (response.status === 200) {
        <div>
          <Redirect to='/home'></Redirect>
          </div>
          console.log("success")
      } else {
          console.log("login error")
      }
    });
  }
    //
    // let userArray = this.props.resp.filter(credential => {
    //   // console.log(credential.email)
    //   // console.log(credential.lastName)
    //   return (credential.email == this.state.email) })
    //   console.log(userArray)
    // if (userArray == true) {
    //
    //     <Redirect to='/home'/>
    //     console.log("success")
    // } else {
    //     console.log("login error")
    // }

  render() {
    return (
      <div className="loginContainer">
        <h1 className="loginTitle">Login</h1>
        <form  className="loginForm" onSubmit={this.handleFormSubmit}>
          <label className="emailLabel">
           Email:
          <input className="emailbox" type={"text"}
            value={this.state.email}
            onChange={this.handleEmailChange}/>
        </label><br />
          <label className="nameLabel">
            Last Name:
          <input className="namebox" type={"text"}
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
