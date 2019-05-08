import React from "react";
import { Switch, Route } from "react-router-dom";

import LandingPage from "./landingpage";
import AboutMe from "./aboutMe";
import Insurance from "./insurance";
import Contact from "./contact";
import RequestForm from "./requestForm";

const Main = () => (
  <Switch>
    <Route exact path="/" component={LandingPage} />
    <Route path="/insurance" component={Insurance} />
    <Route path="/contact" component={Contact} />
    <Route path="/requestForm" component={RequestForm} />
  </Switch>
);

export default Main;
