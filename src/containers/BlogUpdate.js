import React, { Component } from "react";
import Axios from "axios";

class BlogUpdate extends Component {
  state = {
    title: "",
    description: "",
    imageUrl: "",
    UserId: "",
    isLoaded: false
  };

  componentDidMount() {
    Axios.get(
      `http://localhost:8081/posts/${this.props.match.params.post_id}`
    ).then(res => {
      //console.log(res.data);
      const { title, description, imageUrl, UserId } = res.data;
      this.setState({ title, description, imageUrl, UserId });
    });
  }

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

  onSubmit = event => {
    event.preventDefault();

    const updatedPost = {
      title: this.state.title,
      description: this.state.description,
      imageUrl: this.state.imageUrl,
      UserId: this.state.UserId
    };

    Axios.put(
      `http://localhost:8081/posts/${this.props.match.params.post_id}`,
      updatedPost
    ).then(res => {
      console.log(res.data);
      res.data.updated ? this.props.history.push("/blog") : "";
    });
  };

  render() {
    // console.log("props", this.props);
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

        {/* <label>
          UserId:
          <input
            type="number"
            name="UserId"
            value={this.state.UserId}
            onChange={this.handleChange}
          />
        </label>
        <br /> */}

        <button type="submit" onClick={this.onSubmit}>
          Update Post
        </button>
      </form>
    );
  }
}

export default BlogUpdate;
