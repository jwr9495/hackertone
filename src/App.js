import React, { useState } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

import Nav from "./components/Nav";
import Main from "./components/Main";

import Login from "./components/Login";
import Join from "./components/Join";

import Home from "./components/Home";
import User from "./components/User";
import Board from "./components/Board";
import Ticket from "./components/Ticket";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [ticket, setTicket] = useState(0);
  const [name, setName] = useState("");
  const [company_no, setCompany_no] = useState("");
  const [company_name, setCompany_name] = useState("");
  const [company_location, setCompany_location] = useState("");
  const [phonenumber, setPhonenumber] = useState("");
  const [passwordSame, setPasswordSame] = useState(false);
  let myStorage = localStorage;
  const auth = {
    isLoggedIn,
    isAdmin,
    setIsLoggedIn,
    setIsAdmin,
    setId,
    id,
    password,
    setPassword,
    ticket,
    setTicket,
    name,
    setName,
    company_no,
    setCompany_no,
    company_name,
    setCompany_name,
    company_location,
    setCompany_location,
    phonenumber,
    setPhonenumber,
    passwordSame,
    setPasswordSame,
    myStorage
  };
  return (
    <BrowserRouter>
      <Nav />
      <div className="App">
        <div className="auth-wrapper">
          <div className="auth-inner">
            <Switch>
              <Route exact path="/" component={Main} />
              <Route
                path="/login"
                render={props => <Login {...props} {...auth} />}
              />
              <Route
                path="/signup"
                render={props => <Join {...props} {...auth} />}
              />
              {/* <Route path="/signup" component={Join} /> */}
              <Route
                path="/home"
                render={props => <Home {...props} {...auth} />}
              />
              {/* <Route path="/home" component={Home} /> */}
              <Route
                path="/user"
                render={props => <User {...props} {...auth} />}
              />
              {/* <Route path="/user" component={User} /> */}
              <Route
                path="/board"
                render={props => <Board {...props} {...auth} />}
              />
              {/* <Route path="/board" component={Board} /> */}
              <Route
                path="/ticket"
                render={props => <Ticket {...props} {...auth} />}
              />
            </Switch>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
