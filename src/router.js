import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route
} from "react-router-dom";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
import Checkout from "./Components/Setup/CheckOut";
import Verification from "./Components/Verification/Verification";
import Dashboard from './Components/Admin/layouts/Admin';

const Routers = () => {
  const [token, setToken] = useState("");
  useEffect(() => {
    let tokens = localStorage.getItem("token");
    if (tokens) {
      setToken(token);
    }
  }, [token]);
  return (
    <Router>
      <Route
        exact
        path="/"
        component={() => {
          return token === "" ? (
            <Redirect to="/user/dashboard" />
          ) : (
            <Redirect to="/login" />
          );
        }}
      />
      <Route exact path={"/login"} component={Login} />
      <Route exact path={"/register"} component={Register} />
      <Route path={"/user"} component={Dashboard} />
      <Route exact path={"/checkout"} component={Checkout} />
      <Route exact path={"/verify"} component={Verification} />
    </Router>
  );
};

export default Routers;
