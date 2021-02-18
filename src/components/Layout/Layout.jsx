import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Auth, Registration } from '..';

const Layout = () => (
  <Switch>
    <Route path="/registration">
      <Registration />
    </Route>
    <Route path="/">
      <Auth />
    </Route>
  </Switch>
);
export default Layout;
