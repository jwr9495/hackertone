import React from "react";
import { Link as button } from "react-router-dom";
import "../css/Nav.css";

export default function Nav() {
  return (
    <>
      <nav
        className="navbar navbar-expand-lg navbar-light fixed-top"
        id="mainNav"
      >
        <div className="container">
          <div id="navbarResponsive">
            <button className="nav-btn" to="/main">
              start!
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}
