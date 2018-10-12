
import React, { Fragment } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Navbar from 'components/navbar/Navbar';
import HomePage from 'pages/HomePage';
import AboutPage from 'pages/AboutPage';

const PrimaryLayout = () => (
  <Fragment>
    <Navbar />
    <div className="main-content">
      <div className="container ">
        <div className="columns is-multiline is-mobile is-centered">
          <Switch>
            <Route exact path='/' component={HomePage} />
            <Route path='/about' component={AboutPage} />
            <Redirect to='/' />
          </Switch>
        </div>
      </div>
    </div>
  </Fragment>
);

export default PrimaryLayout;