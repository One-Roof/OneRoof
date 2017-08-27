import React, { Component } from 'react';
import { Route, Redirect, Refresh } from 'react-router'
import LoginForm from './LoginForm';
import SignUpForm from './SignUpForm';

class LoginSignUp extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      lastName: '',
      submitted: false,
      resp: [],
    }
  };

    componentDidMount() {
      fetch("https://thawing-wave-85503.herokuapp.com/api/familyMembers")
        .then(results => results.json())
        .then(response =>{
          let resp = response._embedded.familyMembers
          console.log(resp)
          console.log(this.state)
          this.setState ({
            resp: resp
          })
          console.log(this.state.resp)

        })
    }

    // shouldComponentUpdate(nextState) {
    //   if(this.state.email !== this.nextState.email && this.state.lastName !== this.nextState.lastName)
    //   return true;
    // }

    // componentDidUpdate() {
    //   if(this.state.email === this.email && this.state.lastName === this.lastName) {
    //     <Redirect to="/home"/>
    //   }
    //   else {
    //     console.log("login error")
    //   }
    // }

  render() {
    console.log(this.state.resp)
    return (
      <div className="">
        {this.state.resp.length > 0
        ?
        <div>
          <h1>Login or Sign Up Here!</h1>
          <LoginForm resp={this.state.resp}/>
        </div>
        :<div>Loading</div>}
      </div>
    );
  }
}

export default LoginSignUp;

// {this.state.email
// ?
// <div>
//   <h1>Login or Sign Up Here!</h1>
//   <LoginForm email="this.state.email" lastName="this.state.lastName"/>
// </div>
// :<div>Loading</div>}
