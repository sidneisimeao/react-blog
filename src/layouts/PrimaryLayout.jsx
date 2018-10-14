
import React, { Fragment } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Navbar from 'components/navbar/Navbar';
import Routes from "routes/";

const RouteWithSubRoutes = ({ path, component, routes, ...props }) => {
  if (!!routes) {
    //console.log(routes);
    routes.map(({ path, component, ...props }) => {
      console.log(component);
      return <Route exact path={path} component={component} {...props} />
    })
  }
  //console.log(path);
  return <Route path={path} component={component} {...props} />
};

const PrimaryLayout = () => (
  <Fragment>
    <Navbar />
    <div className="main-content">
      <div className="container ">
        <div className="columns is-multiline is-mobile is-centered">
          <Switch>
            {Routes.map((route, i) => {
              //console.log(prop);
              return (<RouteWithSubRoutes key={i} {...route} />)
            })}
            <Redirect to='/' />
          </Switch>
        </div>
      </div>
    </div>
  </Fragment>
);

export default PrimaryLayout;