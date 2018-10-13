
import React, { Fragment } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Navbar from 'components/navbar/Navbar';
import Routes from "routes/";

const PrimaryLayout = () => (
  <Fragment>
    <Navbar />
    <div className="main-content">
      <div className="container ">
        <div className="columns is-multiline is-mobile is-centered">
          <Switch>
            {Routes.map((prop, key) => <Route {...prop} key={key} />)}
            <Redirect to='/' />
          </Switch>
        </div>
      </div>
    </div>
  </Fragment>
);

export default PrimaryLayout;