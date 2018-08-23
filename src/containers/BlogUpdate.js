import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron/";
import Card from "../components/Card";
import Axios from "axios";

class BlogUpdate extends Component {
  state = {
    posts: [],
    isLoaded: false
  };

  // componentDidMount() {
  //   Axios.get(`http://localhost:8081/posts`).then(res => {
  //     console.log(res);
  //     this.setState({ posts: res.data });
  //   });
  // }
  hangleChange = event => {
    this.setState({ title: event.target.value });
    this.setState({ description: event.target.value });
    this.setState({ imageUrl: event.target.value });
    this.setState({ UserId: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();

    const newPost = {
      title: this.state.title,
      description: this.state.description,
      imageUrl: this.state.imageUrl,
      UserId: this.state.UserId
    };

    Axios.put(`http://localhost:8081/posts`, { newPost }).then(res => {
      console.log(res);
      console.log(res.data);
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Title:
          <input type="text" name="title" onChange={this.handleChange} />
        </label>
        <label>
          Description:
          <input
            type="textArea"
            name="description"
            onChange={this.handleChange}
          />
        </label>
        <label>
          Image Upload:
          <input type="text" name="ImageUrl" onChange={this.handleChange} />
        </label>
        <label>
          UserId:
          <input type="number" name="UserId" onChange={this.handleChange} />
        </label>
        <button type="submit">Add New Post</button>
      </form>
    );
  }
}

export default BlogUpdate;
