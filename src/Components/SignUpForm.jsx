import React, { Component } from 'react';

class SignUpForm extends Component {

  render() {
    return (
      <div>
        <form>
           <h1>Sign-up</h1>
          <label>
            Family Name:
          <input type="text" name="familyname" />
        </label><br />
          <label>
            Name:
          <input type="text" name="name" />
        </label><br />
          <label>
            Email:
          <input type="email" name="email" />
        </label><br />
          <label>
            Age:
          <input type="number" name="age" />
        </label><br />
          <label>
            Password:
          <input type="password" name="psw" />
        </label><br />
          <label>
            Confirm Password:
          <input type="password" name="psw" />
        </label><br/>
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}

export default SignUpForm;
