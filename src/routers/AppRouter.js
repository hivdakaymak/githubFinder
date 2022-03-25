import React from "react";
import { BrowserRouter, Route, Switch, Link, NavLink } from "react-router-dom";

const Nav = () => (
  // <nav>
  //   <Link to="/">Home</Link>
  //   <Link to="/product">product</Link>
  //   <Link to="/contact">contact</Link>
  // </nav>
  <nav>
    <NavLink exact to="/" activeClassName="active">
      Home
    </NavLink>
    <NavLink exact to="/product" activeClassName="active">
      product
    </NavLink>
    <NavLink to="/contact#mail" activeClassName="active">
      contact
    </NavLink>
    <NavLink to="/product/12?orderby=price" activeClassName="active">
      product details
    </NavLink>
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

const ContactPage = (props) => {
  return (
    <>
      <div>Contact Page</div>
    </>
  );
};
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

const ProductDetailsPage = (props) => {
  return (
    <>
      <div>ProductDetailsPage Page</div>
      <div>{props.match.params.id}</div>
    </>
  );
};

const AppRouter = () => (
  <BrowserRouter>
    <Header />
    <Nav />
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/product" component={ProductPage} />
      <Route exact path="/product/:id" component={ProductDetailsPage} />
      <Route component={NotFound} />{" "}
    </Switch>
  </BrowserRouter>
);

export default AppRouter;
