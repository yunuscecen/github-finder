import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';

const Nav = () => (
  //   <nav>
  //     <Link to="/">Home</Link>
  //     <Link to="/products">Products</Link>
  //     <Link to="/contLinkct">Contact</Link>
  //   </nav>
  <nav>
    <NavLink exact to="/" activeClassName="active">
      Home
    </NavLink>
    <NavLink exact to="/products" activeClassName="active">
      Products
    </NavLink>
    <NavLink to="/products/12?orderby=price" activeClassName="active">
      Product 12 Detail Page
    </NavLink>
    <NavLink to="/contact#email" activeClassName="active">
      Contact
    </NavLink>
  </nav>
);

const Header = () => (
  <header>
    <h1>Github Finder</h1>
  </header>
);

const HomePage = () => {
  return (
    <div>
      <div>HomePage</div>
    </div>
  );
};

const ContactPage = (props) => {
  console.log(props);
  return (
    <div>
      <div>Contact With Us</div>
    </div>
  );
};

const ProductsPage = () => {
  return (
    <div>
      <div>Discover Our Products</div>
    </div>
  );
};

const ProductsDetailPage = (props) => {
  console.log(props);
  return (
    <div>
      <div>Product Detail Page </div>
      <div>{props.match.params.id}</div>
    </div>
  );
};

const NotFound = () => {
  return (
    <div>
      <div>The page what u are looking not found. :( Check our sitemap</div>
    </div>
  );
};

const AppRouter = () => (
  <BrowserRouter>
    <Header />
    <Nav />
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/contact" component={ContactPage} />
      <Route exact path="/products" component={ProductsPage} />
      <Route path="/products/:id" component={ProductsDetailPage} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default AppRouter;
