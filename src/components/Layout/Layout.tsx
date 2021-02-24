import React, { FC } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Main from '../Main';

const Layout: FC = () => (
  <Switch>
    <Route path="/main">
      <Main />
    </Route>
    <Redirect to="/main" />
  </Switch>
);

export default Layout;
