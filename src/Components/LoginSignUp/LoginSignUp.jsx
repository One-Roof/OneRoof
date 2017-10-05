import React, { Component } from "react";
import LoginForm from "./LoginForm";

import SignUpForm from "./SignUpForm";
import "../../Styles/LoginSignUp.css";
import { findDOMNode } from "react-dom";
import $ from "jquery";

class LoginSignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      lastName: "",
      submitted: false,
      resp: [],
      token: null,
      className: '',
    };
  }


//  handleUpdateClass(e) {
//
//     let hideLogin = 'hideLogin'
//     this.setState({className: hideLogin})
//     console.log(this.state.className);
// }

  render() {
    return (
      <div className="">
        <div className="loginSignUpBody">
          <div>
            <h1 className="loginSignupBanner">
              Bringing the family back together under one roof!
            </h1>
          </div>
          <div>Click</div>
          <button onClick={this.handleUpdateClass} className={this.state.className}>Click</button>
          <div className="logSignMainContainer">
            <div id="loginFormAnimation">
            <LoginForm  resp={this.state.resp} />
            </div>
            <div>
            <SignUpForm />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LoginSignUp;

//ORIGINAL///

// class LoginSignUp extends Component {
//   constructor() {
//     super();
//     this.state = {
//       email: '',
//       lastName: '',
//     }
//   };
//
//     componentDidMount() {
//       fetch("https://thawing-wave-85503.herokuapp.com/api/familyMembers")
//         .then(results => results.json())
//         .then(response =>{
//           let resp = response._embedded.familyMembers;
//           console.log(resp)
//           console.log(this.state)
//           if (resp.email === this.state.email && resp.lastName === this.state.lastName) {
//             <Redirect to="/" />
//           }
//           else {
//             console.log("login error")
//           }
//         })
//     }
//
//       handleEmailChange = (event) => {
//       this.setState({ email: event.target.value });
//     };
//
//       handleLastNameChange = (event) => {
//       this.setState({ lastName: event.target.value });
//     };
//
//     handleFormSubmit(e) {
//       e.preventDefault();
//
//       const formPayLoad = {
//         email: this.state.email,
//         lastName: this.state.lastName
//       }
//       console.log(formPayLoad)
//     }
//
//   render() {
//     return (
//       <div className="">
//         <h1>Login or Sign Up Here!</h1>
//
//         <form onSubmit={this.handleFormSubmit}>
//             <h1>Login</h1>
//           <label>
//             Email:
//           <input type={"text"}
//             value={this.state.email}
//             onChange={this.handleEmailChange}/>
//         </label><br />
//           <label>
//             Last Name:
//           <input type={"text"}
//             value={this.state.lastName}
//             onChange={this.handleLastNameChange}
//              />
//         </label><br />
//           <input type="submit" value="Submit" />
//         </form><br />
//
//         <form>
//            <h1>Sign-up</h1>
//           <label>
//             Family Name:
//           <input type="text" name="familyname" />
//         </label><br />
//           <label>
//             Name:
//           <input type="text" name="name" />
//         </label><br />
//           <label>
//             Email:
//           <input type="email" name="email" />
//         </label><br />
//           <label>
//             Age:
//           <input type="number" name="age" />
//         </label><br />
//           <label>
//             Password:
//           <input type="password" name="psw" />
//         </label><br />
//           <label>
//             Confirm Password:
//           <input type="password" name="psw" />
//         </label><br/>
//           <input type="submit" value="Submit" />
//         </form>
//       </div>
//     );
//   }
// }
//
// export default LoginSignUp;
