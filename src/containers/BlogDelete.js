import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron/";
import Card from "../components/Card";
import Axios from "axios";

class BlogDelete extends Component {
  state = {
    id: 0
  };

  // componentDidMount() {
  //   Axios.get(`http://localhost:8081/posts`).then(res => {
  //     console.log(res);
  //     this.setState({ posts: res.data });
  //   });
  // }
  hangleChange = event => {
    this.setState({ PostId: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();

    Axios.delete(`http://localhost:8081/posts/${this.state.id}`).then(res => {
      console.log(res);
      console.log(res.data);
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Post ID:
          <input type="number" name="PostId" onChange={this.handleChange} />
        </label>

        <button type="submit">Delete Post</button>
      </form>
    );
  }
}

export default BlogDelete;
