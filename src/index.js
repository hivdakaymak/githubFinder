import React from "react";
import ReactDOM from "react-dom";
import "./styles/main.scss";
import App from "./components/App";
import { BrowserRouter, Route, Switch, Link, NavLink } from "react-router-dom";

const Nav = () => (
  // <nav>
  //   <Link to="/">Home</Link>
  //   <Link to="/product">product</Link>
  //   <Link to="/contact">contact</Link>
  // </nav>
  <nav>
    <NavLink exact to="/" activeClassName="active">Home</NavLink>
    <NavLink to="/product" activeClassName="active">product</NavLink>
    <NavLink to="/contact" activeClassName="active">contact</NavLink>
  </nav>
);

const Header = () => (
  <header>
    <h1>Github Finder</h1>
  </header>
);

const HomePage = () => (
  <>
    <div>Home Page</div>
  </>
);

const ContactPage = () => (
  <>
    <div>Contact Page</div>
  </>
);
const ProductPage = () => (
  <>
    <div>Product Page</div>
  </>
);

const NotFoundPage = () => (
  <>
    <div>404 Page</div>
  </>
);

const routes = (
  <BrowserRouter>
    <Header />

    <Nav />
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/product" component={ProductPage} />
      <Route component={NotFound} />{" "}
    </Switch>
  </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById("root"));
