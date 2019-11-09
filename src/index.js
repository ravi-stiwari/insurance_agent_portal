import React from "react";
import ReactDOM from "react-dom";

import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/animate.min.css";
import "./assets/sass/light-bootstrap-dashboard-react.scss?v=1.3.0";
import "./assets/css/custom.css";
import "./assets/css/pe-icon-7-stroke.css";

import LoginLayout from "layouts/LoginLayout.jsx";
import DashboardLayout from "layouts/DashboardLayout.jsx";
import PolicyEditLayout from "layouts/PolicyEditLayout.jsx";
import ChartsLayout from "layouts/ChartsLayout.jsx";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path='/charts' render={props => <ChartsLayout {...props} />}/>
      <Route path='/editPolicy' render={props => <PolicyEditLayout {...props} />}/>
      <Route path='/dashboard' render={props => <DashboardLayout {...props} />}/>
      <Route path="/login" render={props => <LoginLayout {...props} />} />
      <Redirect from="/" to="/login" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
