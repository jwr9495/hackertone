import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import ReactDOM from "react-dom";
import { Parallax, ParallaxLayer } from "react-spring/renderprops-addons.cjs";
import "./css/App.css";

import Login from "./components/Login";
import Home from "./components/Home";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Post from "./components/Post";

const Page = ({ offset, caption, first, second, gradient, onClick }) => (
  <React.Fragment>
    <Parallax.Layer offset={offset} speed={0.2} onClick={onClick}>
      <div className="slopeBegin" />
    </Parallax.Layer>

    <Parallax.Layer offset={offset} speed={-0.2} onClick={onClick}>
      <div className={`slopeEnd ${gradient}`} />
    </Parallax.Layer>

    <Parallax.Layer className="text number" offset={offset} speed={0.3}>
      <span>0{offset + 1}</span>
    </Parallax.Layer>

    <Parallax.Layer className="text header" offset={offset} speed={0.4}>
      <span>
        <p style={{ fontSize: 20 }}>{caption}</p>
        <div className={`stripe ${gradient}`} />
        <p>{first}</p>
        <p>{second}</p>
      </span>
    </Parallax.Layer>
  </React.Fragment>
);

export default class App extends Component {
  scroll = to => this.DOMnode.scrollTo(to);
  getRef = node => {
    this.DOMnode = node;
  };

  render() {
    return (
      <Parallax
        className="container"
        ref={this.getRef}
        pages={3}
        horizontal
        scrolling={true}
      >
        <Page
          offset={0}
          gradient="pink"
          caption="who we are"
          first="Lorem ipsum"
          second="dolor sit"
          onClick={() => this.scroll(1)}
        />
        <Page
          offset={1}
          gradient="teal"
          caption="what we do"
          first="consectetur"
          second="adipiscing elit"
          onClick={() => this.scroll(2)}
        />
        <Page
          offset={2}
          gradient="tomato"
          caption="what we want"
          first="Morbi quis"
          second="est dignissim"
          onClick={() => this.scroll(0)}
        />
      </Parallax>
    );
  }
}
