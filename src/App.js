import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./containers/Home";
import Blog from "./containers/Blog";
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
            <Route path="/blog" component={Blog} />
            <Footer />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
