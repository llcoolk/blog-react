import React, { Component } from "react";
import Axios from "axios";
import SignUp from "../components/SignUp";

class Register extends Component {
  state = {
    email: "",
    password: "",
    password2: "",
    errors: {}
  };

  handleChange = e => {
    this.setState({ ...this.state, [e.target.name]: e.target.value });
  };

  validate = data => {
    const errors = {};

    data.email === "" ? (errors.email = "Email cannot be blank") : "";
    data.password === "" ? (errors.password = "Password cannot be blank") : "";
    data.password.length < 6
      ? (errors.password = "Password must be at least 6 charatecrs")
      : "";
    data.password !== data.password2
      ? (errors.password = "Passwords do not match")
      : "";

    return errors;
  };

  onSubmit = e => {
    e.preventDefault();

    const { email, password, password2 } = this.state;

    const newUser = {
      email,
      password
    };

    const errors = this.validate({ email, password, password2 });

    this.setState({ errors });

    if (Object.keys(errors).length === 0) {
      Axios.post("http://localhost:8081/users", newUser).then(res => {
        // console.log(res.data);
        res.status === 201
          ? this.props.history.push("/login")
          : this.setState({ errors: { global: res.data.message } });
      });
    }
  };

  render() {
    // console.log(this.props);
    console.log("state:", this.state);

    return (
      <SignUp
        onSubmit={this.onSubmit}
        errors={this.state.errors}
        onChange={this.handleChange}
        email={this.state.email}
        password={this.state.password}
      />
    );
  }
}

export default Register;
