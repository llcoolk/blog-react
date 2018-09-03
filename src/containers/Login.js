import React, { Component } from "react";
import Axios from "axios";
import SignIn from "../components/SignIn";

class Login extends Component {
  state = {
    username: "",
    password: "",
    errors: {}
  };

  validate = data => {
    const errors = {};

    data.email === "" ? (errors.email = "Email cannot be blank") : "";
    data.password === "" ? (errors.password = "Password cannot be blank") : "";
  };

  handleChange = e => {
    this.setState({ ...this.state, [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    console.log("Form submitted");

    const user = {
      email: this.state.email,
      password: this.state.password
    };

    Axios.get("http://localhost:8081/users/:id", user).then(res => {
      res.data.PostId > 0 ? this.props.history.push("/blog") : "";
    });
  };

  render() {
    // console.log(this.props);
    console.log("this.state", this.state);

    return (
      <SignIn
        onSubmit={this.onSubmit}
        onChange={this.handleChange}
        username={this.state.username}
        password={this.state.password}
      />
    );
  }
}

export default Login;
