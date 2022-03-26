import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";

const Routes = () => {
  return (
    <div>
      <Router>
        <Switch>
          {/* if rout === "/" this code block will be work */}
          <Route path="/" exact>
            <Home />
          </Route>
          {/* if rout === "/about" this code block will be work */}
          <Route path="/about">
            <About />
          </Route>
          {/* end of routes */}
        </Switch>
      </Router>
    </div>
  );
};

export default Routes;
