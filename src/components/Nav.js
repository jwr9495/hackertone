import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import stamp from "../css/img/stamp.png";
import "../css/Nav.css";

export default function Nav() {
  return (
    <>
      <nav
        className="navbar navbar-expand-lg navbar-light fixed-top"
        id="mainNav"
      >
        <div className="container">
          <img src={stamp} className="nav-logo" />
          <ul className="navbar-nav ml-auto">
            <Link className="nav-link" to="/">
              Main
            </Link>

            <Link className="nav-link" to="/login">
              Log In
            </Link>
          </ul>
        </div>
      </nav>
      )}
    </>
  );
}
