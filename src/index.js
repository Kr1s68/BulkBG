/*!

=========================================================
* BLK Design System React - v1.2.1
=========================================================

* Product Page: https://www.creative-tim.com/product/blk-design-system-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/blk-design-system-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "assets/css/nucleo-icons.css";
import "assets/scss/blk-design-system-react.scss";
import "assets/demo/demo.css";

import Index from "views/Index.js";
import LandingPage from "views/examples/LandingPage.js";
import RegisterPage from "views/examples/RegisterPage.js";
import LoginPage from "views/examples/LoginPage.js";
import ProfilePage from "views/examples/ProfilePage.js";
import Store from "views/mainviews/Store";
import Contact from "views/mainviews/Contact";
import Cart from "views/mainviews/Cart";
import { CartProvider } from "contexts/CartContext";
import { AuthProvider } from "contexts/AuthContext";
import Calculator from "views/mainviews/Calculator";
import Orders from "views/mainviews/Orders";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <AuthProvider>
    <CartProvider>
      <BrowserRouter>
        <Switch>
          <Route path="/home" render={(props) => <Index {...props} />} />
          <Route
            path="/landing-page"
            render={(props) => <LandingPage {...props} />}
          />
          <Route path="/store" render={(props) => <Store {...props} />} />
          <Route path="/cart" render={(props) => <Cart {...props} />} />
          <Route path="/orders" render={(props) => <Orders {...props} />} />
          <Route path="/contact" render={(props) => <Contact {...props} />} />
          <Route
            path="/calculator"
            render={(props) => <Calculator {...props} />}
          />
          <Route
            path="/register-page"
            render={(props) => <RegisterPage {...props} />}
          />
          <Route
            path="/login-page"
            render={(props) => <LoginPage {...props} />}
          />
          <Route
            path="/profile-page"
            render={(props) => <ProfilePage {...props} />}
          />
          <Redirect from="/" to="/home" />
        </Switch>
      </BrowserRouter>
    </CartProvider>
  </AuthProvider>
);
