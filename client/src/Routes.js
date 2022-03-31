import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Model } from "./components/model";
import About from "./pages/About";
import Home from "./pages/Home";
import Register from "./pages/Register";
import ConfirmRegister from "./pages/ConfirmRegister";

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
          <Route path="/register">
            <Register />
          </Route>
          {/* end of routes */}
          <Route path="/confirm-register">
            <ConfirmRegister />
          </Route>
        </Switch>
      </Router>
      {/* <Model /> */}
    </div>
  );
};

export default Routes;
