import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron/";
import Card from "../components/Card";
import Axios from "axios";

class Blog extends Component {
  state = {
    posts: [],
    isLoaded: false
  };

  componentDidMount() {
    Axios.get(`http://localhost:8081/posts`).then(res => {
      console.log(res);
      this.setState({ posts: res.data });
    });
  }

  render() {
    return (
      <div className="container">
        <Jumbotron title="Blog" />
        {this.state.loading ? <h1>Loading...</h1> : ""}

        <div className="row">
          {this.state.posts.map(post => (
            <div key={post.PostId} className="col-md-4">
              <Card
                title={post.title}
                description={post.description}
                imageUrl={post.imageUrl}
              />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Blog;
