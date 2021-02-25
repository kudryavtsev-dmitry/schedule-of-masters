import React, { useEffect } from 'react';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { grey, red } from '@material-ui/core/colors';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
import LayoutContainer from './containers/LatoutContainer/LayoutContainer';
import {
  AuthContainer,
  HeaderContainer,
  RegistrationContainer,
} from './containers';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from './services';
import { loadRolesAsync } from './services/RolesService/RolesServices';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: grey[900],
    },
    secondary: {
      main: red[500],
    },
  },
});

const App = () => {
  const dispatch = useDispatch();

  const isAuth = useSelector((state: RootState) => state.user.isAuth);

  useEffect(() => {
    dispatch(loadRolesAsync());
  }, []);

  return (
    <>
      <Router>
        <ThemeProvider theme={theme}>
          <HeaderContainer />
          {isAuth ? (
            <Switch>
              <Route path="/">
                <LayoutContainer />
              </Route>
            </Switch>
          ) : (
            <Switch>
              <Route path="/registration">
                <RegistrationContainer />
              </Route>
              <Route path="/auth">
                <AuthContainer />
              </Route>
              <Redirect to="/auth" />
            </Switch>
          )}
        </ThemeProvider>
      </Router>
    </>
  );
};

export default App;
