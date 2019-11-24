import React from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";
import { baseURL } from "../common/config";

import "../css/User.css";
export default function User({ id }) {
  const handleSubmit = async e => {
    e.preventDefault();
    const { data } = await axios.post(`${baseURL}/stamp/login`, {
      id: id,
      password: e.target.password.value
    });
    if (!data.result) {
      alert("fail");
    } else {
      console.log(data);
      alert("success");
      // 비밀번호, 전화번호
    }
  };
  return (
    <div>
      <ul className="user-page">
        <h1>
          <li>Password Check</li>
        </h1>
        <form onSubmit={handleSubmit}>
          <input type="password" name="password" />
          <div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </ul>
    </div>
  );
}
