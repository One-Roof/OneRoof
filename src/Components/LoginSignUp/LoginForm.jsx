import React, { Component } from 'react';
import { Route, Redirect, Refresh } from 'react-router'
<<<<<<< HEAD:src/Components/LoginForm.jsx
import '../Styles/LoginSignUp.css'
=======
import '../../Styles/LoginSignUp.css'
>>>>>>> origin:src/Components/LoginSignUp/LoginForm.jsx

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
