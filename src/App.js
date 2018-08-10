import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./containers/Home";
import Blog from "./containers/Blog";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Route exact path="/" component={Home} />
            <Route path="/blog" component={Blog} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
