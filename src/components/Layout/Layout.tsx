import React, { FC } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { OrdersContainer } from '../../containers';
import Main from '../Main';

const Layout: FC = () => (
  <Switch>
    <Route path="/orders">
      <OrdersContainer />
    </Route>
    <Redirect to="/orders" />
  </Switch>
);

export default Layout;
