import React, { useState } from "react";
import { BrowserRouter, Route, Switch, Link, NavLink } from "react-router-dom";
import Navbar from "./Navbar";
import Users from "./Users";
import Search from "./Search";
import Alert from "./Alert";
import About from "./About";
import UserDetails from "./UserDetails";
import GithubState from "../context/github/githubState";
import AlertState from "../context/alert/alertState";
import Notfound from './NotFound';

const App = () => { 
  return (
    <GithubState>
      <AlertState>
        <BrowserRouter>
          <Navbar />
          <Alert/>
          <Switch>
            <Route
              exact
              path="/"
              component={Home}
            
            />
            <Route path="/about" component={About} />
            <Route path="/user/:login" component={userDetails} />
            <Route component={Notfound} />

          </Switch>
        </BrowserRouter>
      </AlertState>
    </GithubState>
  );
};

export default App;
