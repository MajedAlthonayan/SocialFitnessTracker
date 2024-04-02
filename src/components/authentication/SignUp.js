import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./SignIn.css";

class SignUp extends Component {
  state = {
    firstName: "",
    lastName: "",
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
          <h5 className="white-text">Sign Up</h5>
          {/* input-field is a materialize */}

          <div className="input-field">
            <label htmlFor="firstName">First Name</label>
            <input
              className="white-text"
              type="text"
              id="firstName"
              onChange={this.handleChange}
            />
          </div>

          <div className="input-field">
            <label htmlFor="lastName">Last Name</label>
            <input
              className="white-text"
              type="text"
              id="lastName"
              onChange={this.handleChange}
            />
          </div>

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
          Already have an account with us?{" "}
          <Link className="link" to="/SignIn">
            Sign In!
          </Link>
        </h5>
      </div>
    );
  }
}

export default SignUp;
