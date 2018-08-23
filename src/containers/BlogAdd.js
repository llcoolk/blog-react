import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron/";
import Card from "../components/Card";
import Axios from "axios";

class BlogAdd extends Component {
  state = {
    title: "",
    description: "",
    imageUrl: "",
    UserId: ""
  };

  handleTitleChange = this.handleTitleChange.bind(this);
  handleDescriptionChange = this.handleDescriptionChange.bind(this);
  handleUrlChange = this.handleUrlChange.bind(this);
  handleUserIdChange = this.handleUserIdChange.bind(this);

  // componentDidMount() {
  //   Axios.get(`http://localhost:8081/posts`).then(res => {
  //     console.log(res);
  //     this.setState({ posts: res.data });
  //   });
  // }

  handleTitleChange = event => {
    this.setState({ title: event.target.value });
  };

  handleDescriptionChange = event => {
    this.setState({ description: event.target.value });
  };

  handleUrlChange = event => {
    this.setState({ imageUrl: event.target.value });
  };

  handleUserIdChange = event => {
    this.setState({ UserId: event.target.value });
  };

  handleSubmitChange = event => {
    event.preventDefault();

    const newPost = {
      title: this.state.title,
      description: this.state.description,
      imageUrl: this.state.imageUrl,
      UserId: this.state.UserId
    };

    Axios.post(`http://localhost:8081/posts`, { newPost }).then(res => {
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
          <input type="text" name="imageUrl" onChange={this.handleChange} />
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

export default BlogAdd;
