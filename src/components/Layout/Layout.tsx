import React, { FC } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { ConfirmListContainer, OrdersContainer } from '../../containers';
import Main from '../Main';
import { LayoutProps } from './LayoutProps';

const Layout: FC<LayoutProps> = ({ role }) => {
  console.log(222, role);

  if (role === 1) {
    return (
      <Switch>
        <Route path="/orders">
          <OrdersContainer />
        </Route>
        <Redirect to="/orders" />
      </Switch>
    );
  }
  if (role === 3) {
    return (
      <Switch>
        <Route path="/confirm">
          <ConfirmListContainer />
        </Route>
        <Redirect to="/confirm" />
      </Switch>
    );
  }
  return null;
};

export default Layout;
