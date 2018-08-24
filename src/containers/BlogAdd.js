import React, { Component } from "react";
import Axios from "axios";

class BlogAdd extends Component {
  state = {
    title: "",
    description: "",
    imageUrl: "",
    UserId: ""
  };

  // componentDidMount() {
  //   Axios.get(`http://localhost:8081/posts`).then(res => {
  //     console.log(res);
  //     this.setState({ posts: res.data });
  //   });
  // }

  handleChange = e => {
    this.setState({ ...this.state, [e.target.name]: e.target.value });
  };

  // onTitleChange = event => {
  //   this.setState({ title: event.target.value });
  // };

  // onDescChange = event => {
  //   this.setState({ description: event.target.value });
  // };

  // onUrlChange = event => {
  //   this.setState({ imageUrl: event.target.value });
  // };

  // onUserIdChange = event => {
  //   this.setState({ UserId: event.target.value });
  // };

  onSubmit = e => {
    e.preventDefault();

    const newPost = {
      title: this.state.title,
      description: this.state.description,
      imageUrl: this.state.imageUrl,
      UserId: this.state.UserId
    };

    Axios.post("http://localhost:8081/posts", newPost).then(res => {
      console.log(res);
      console.log(res.data);
      res.data.PostId > 0 ? this.props.history.push("/blog") : "";
    });
  };

  render() {
    // console.log(this.props);
    return (
      <form>
        <label>
          Title:
          <input
            type="text"
            name="title"
            value={this.state.title}
            onChange={this.handleChange}
          />
        </label>
        <br />

        <label>
          Description:
          <textarea
            name="description"
            value={this.state.description}
            onChange={this.handleChange}
          />
        </label>
        <br />
        <label>
          Image Upload:
          <input
            type="text"
            name="imageUrl"
            value={this.state.imageUrl}
            onChange={this.handleChange}
          />
        </label>
        <br />

        <label>
          UserId:
          <input
            type="number"
            name="UserId"
            value={this.state.UserId}
            onChange={this.handleChange}
          />
        </label>
        <br />

        <button onClick={this.onSubmit}>Add New Post</button>
      </form>
    );
  }
}

export default BlogAdd;
