import React from "react";
import HomeLight from "../views/all-home-version/HomeLight";
import HomeDark from "../views/all-home-version/HomeDark";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const Routes = () => {
  const whatMode = () => {
    if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      return HomeDark;
    } else {
      return HomeLight;
    }
  };

  return (
    <>
      <Router>
        <Switch>
          {/* <Route exact path="/" component={Preview} /> */}
          <Route path="/" component={whatMode()} />
          {/* <Route path="/home-dark" component={HomeDark} />
          <Route component={NotFound} /> */}
        </Switch>
      </Router>
    </>
  );
};

export default Routes;
