import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import routes from "routes.js";

class LoginLayout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }
  
  getRoutes = routes => {
    return routes.map((prop, key) => {
      if (prop.layout === "/login") {
        return (
          <Route
            path={prop.layout + prop.path}
            render={props => (
              <prop.component
                {...props}
              />
            )}
            key={key}
          />
        );
      } else {
        return null;
      }
    });
  };
  render() {
    return (
      <div className="login-panel">
        <Switch>{this.getRoutes(routes)}</Switch>
      </div>
    );
  }
}

export default LoginLayout;
