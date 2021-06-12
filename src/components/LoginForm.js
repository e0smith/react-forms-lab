import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: "",
      password: ""
    };
  }

  handleLogin(event) {
    console.log(event.target.username)
    console.log(event.target.password)
  }

  render() {
    return (
      <form>
        <div>
          <label>
            Username
            <input id="username" name="username" value={this.state.username} onChange={this.handleUsernameChange} type="text" />
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" value={this.state.password} onChange={this.handlePasswordChange}type="password" />
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
