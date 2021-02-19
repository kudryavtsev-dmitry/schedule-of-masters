import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { AuthContainer, RegistrationContainer } from '../../containers';

const Layout = () => (
  <Switch>
    <Route path="/registration">
      <RegistrationContainer />
    </Route>
    <Route path="/">
      <AuthContainer />
    </Route>
  </Switch>
);
export default Layout;
