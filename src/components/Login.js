import React from "react";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <>
      <h1>Login Page</h1>
      ID : <input type="text" />
      PW : <input type="password" />
      <button type="submit">Submit</button>
      <button>
        <Link className="nav-link" to="/join">
          Join
        </Link>
      </button>
    </>
  );
}
