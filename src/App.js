import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Login from "./components/Login";
import Home from "./components/Home";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Post from "./components/Post";

export default class App extends Component {
  state = {
    x: 0,
    y: 0
  };

  scrollHandler = () => {
    this.setState({
      x: window.pageXOffset,
      y: window.pageYOffset
    });
  };

  componentDidMount() {
    window.addEventListener("scroll", this.scrollHandler);
  }

  componentWillMount() {
    window.addEventListener("scroll", this.scrollHandler);
  }

  render() {
    return (
      <>
        <BrowserRouter>
          <Nav />
          <Header />
          <Route exact path="/" component={Home} />
          <h1>
            <div>
              X : {this.state.x} Y : {this.state.y}
            </div>
          </h1>
          <Route path="/login" component={Login} />
          <Route path="/post" component={Post} />
          <Footer />
        </BrowserRouter>
      </>
    );
  }
}
