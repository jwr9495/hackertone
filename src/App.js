import React, { useState } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

import Nav from "./components/Nav";
import Main from "./components/Main";

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
    setPasswordSame
  };
  return (
    <BrowserRouter>
      <Nav />
      <div className="App">
        <div className="auth-wrapper">
          <div className="auth-inner">
            <Switch>
              <Route exact path="/" component={Main} />
              {/* <Route exact path="/" component={Main} /> */}
              {/* <Route
                path="/login"
                render={props => <Login {...props} {...auth} />}
              /> */}
            </Switch>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
