import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import Register from "../containers/Register";

class Home extends Component {
  state = {};

  render() {
    return (
      <div className="container">
        <Jumbotron title="Home">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia
            eveniet maxime labore error est, corrupti perspiciatis cum rem
            suscipit mollitia, aliquid repudiandae. Vero, ipsam adipisci!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perspiciatis, velit! Nam nobis accusantium ullam, atque magnam amet
            temporibus adipisci aliquam?
          </p>
        </Jumbotron>
        {/* <Register /> */}
        <div className="col-md-4 mx-auto">
          <a className="btn btn-info mx-auto" href="/signup" role="button">
            Sign up today
          </a>
          <a className="btn btn-info mx-auto" href="/login" role="button">
            Login
          </a>
        </div>
      </div>
    );
  }
}

export default Home;
