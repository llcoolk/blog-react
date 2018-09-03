import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./containers/Home";
import Blog from "./containers/Blog";
import BlogAdd from "./containers/BlogAdd";
import BlogUpdate from "./containers/BlogUpdate";
import Login from "./containers/Login";
import Register from "./containers/Register";

import Header from "./components/Header";
import Footer from "./components/Footer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Header brand="BlogApp" />
            <Route exact path="/" component={Home} />

            <Route exact path="/blog" component={Blog} />
            <Route path="/blog/add" component={BlogAdd} />
            <Route path="/blog/update/:post_id" component={BlogUpdate} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Register} />

            <Footer />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
