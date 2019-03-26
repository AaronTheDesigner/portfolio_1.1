import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Security, SecureRoute, ImplicitCallback } from "@okta/okta-react";

import Construction from "./components/pages/construction/index";
import Home from "./components/pages/Home/index";
import Dashboard from "./components/pages/Dashboard/index";
import Login from "./components/auth/Login";

function onAuthRequired({ history }) {
  history.push("./login");
}

class App extends Component {
  render() {
    return (
      <Router>
        <Security
          issuer="https://dev-127334.oktapreview.com"
          client_id="0oajxirqd6BOpJ1Yc0h7"
          redirect_uri={window.location.origin + "/implicit/callback"}
          onAuthRequired={onAuthRequired}>
          <Route path="/" exact={true} render={Construction} />
          <Route path="/home" component={Home} />
          <SecureRoute path="/dash" component={Dashboard} />
          <Route
            path="/login"
            render={() => (
              <Login baseUrl="https://dev-127334.oktapreview.com" />
            )}
          />
          <Route path="/implicit/callback" component={ImplicitCallback} />
        </Security>
      </Router>
    );
  }
}

export default App;
