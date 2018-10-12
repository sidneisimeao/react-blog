
import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import HomePage from 'pages/HomePage';
import AboutPage from 'pages/AboutPage';

const PrimaryLayout = () => (
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
);

export default PrimaryLayout;