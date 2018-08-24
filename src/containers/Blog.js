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

  onDelete = post_id => {
    Axios.delete(`http://localhost:8081/posts/${post_id}`)
      .then(res => {
        let newPosts = [];
        this.state.posts.map(p => {
          if (p.PostId !== post_id) {
            newPosts.push(p);
          }
        });
        console.log("newPosts:", newPosts);
        this.setState({ posts: newPosts });
      })
      .catch(err => console.log("Something went wrong:", err));
  };

  render() {
    return (
      <div className="container">
        <Jumbotron title="Blog" />
        {this.state.loading ? <h1>Loading...</h1> : ""}

        <div className="row">
          {this.state.posts.reverse().map(post => (
            <div key={post.PostId} className="col-md-6">
              <Card
                post_id={post.PostId}
                title={post.title}
                description={post.description}
                imageUrl={post.imageUrl}
                onDelete={this.onDelete}
              />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Blog;
