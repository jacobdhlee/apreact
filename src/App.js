import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { injectGlobal } from "styled-components";

import Route from "react-router-dom/Route";

import LandingPage from "./screen/LandingPage/LandingPage";
import LoginPage from "./screen/LoginPage/LoginPage";

injectGlobal`
  html, body {
    width: 100%
    margin: 0
    padding: 0
    overflow-x: hidden
  }
`;

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route path="/" exact={true} component={LandingPage} />
          <Route path="/login" exact={true} component={LoginPage} />
        </div>
      </Router>
    );
  }
}

export default App;
