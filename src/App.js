import React from 'react';

import PrimaryLayout from "layouts/PrimaryLayout";
import { Provider } from "AppContext";

import "styles/scss/app.scss";

import { posts } from "posts.json";

const App = () => (
  <Provider value={{ posts }}>
    <PrimaryLayout />
  </Provider>
)

export default App;
