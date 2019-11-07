import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import AdminNavbar from "components/Navbars/AdminNavbar";
import Footer from "components/Footer/Footer";
import Sidebar from "components/Sidebar/Sidebar";
import routes from "routes.js";
import image from "assets/img/sidebar-bg.jpg";

class DashboardLayout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: image,
      color: "black",
      hasImage: true
    };
  }
  getRoutes = routes => {
    return routes.map((prop, key) => {
      if (prop.layout === "/dashboard") {
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
      <div className="wrapper">
        <Sidebar {...this.props} routes={routes} image={this.state.image}
        color={this.state.color}
        hasImage={this.state.hasImage}/>
        <div id="main-panel" className="main-panel" ref="mainPanel">
          <AdminNavbar
            {...this.props}
          />
          <Switch>{this.getRoutes(routes)}</Switch>
          <Footer />
        </div>
      </div>
    );
  }
  // render () {
  //   return (
  //     <div>Welcome</div>
  //   )
  // }
}

export default DashboardLayout;
