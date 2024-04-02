import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./SignIn.css";

class SignIn extends Component {
  state = {
    username: "",
    password: ""
  };

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };
  handleSubmit = e => {
    // Prevents refresh
    e.preventDefault();
    console.log(this.state);
  };
  render() {
    return (
      // container is a materialise class to contain content in central column
      <div className="container">
        <form onSubmit={this.handleSubmit}>
          <h5 className="white-text">Sign In</h5>
          {/* input-field is a materialize */}
          <div className="input-field">
            <label htmlFor="usermame">Username</label>
            <input
              className="white-text"
              type="text"
              id="username"
              onChange={this.handleChange}
            />
          </div>
          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input
              className="white-text"
              type="password"
              id="password"
              onChange={this.handleChange}
            />
          </div>
          <div className="input-field">
            <button className="btn">Submit</button>
          </div>
        </form>
        <h5 className="white-text">
          Do not have an account with us?{" "}
          <Link className="link" to="/SignUp">
            Sign Up!
          </Link>
        </h5>
      </div>
    );
  }
}

export default SignIn;
