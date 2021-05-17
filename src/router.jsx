import React from "react";
import { hot } from "react-hot-loader";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Header from "./components/header";
import Home from "./pages/home";
import About from "./pages/about";
import Search from "./pages/search";
import Category from "./pages/category"
import { CategoryProvider } from "./context/CategoryContext";
import { ProductProvider } from "./context/ProductContext";
import Product from "./pages/product";

const Router = () => {
  return (
    <ProductProvider>
      <CategoryProvider>
        <BrowserRouter>
          <Header />
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/search">
              <Search />
            </Route>
            <Route path="/category/:id">
              <Category />
            </Route>
            <Route path="/product/:id">
              <Product />
            </Route>
          </Switch>
        </BrowserRouter>
      </CategoryProvider>
    </ProductProvider>
  );
};

export default hot(module)(Router);
