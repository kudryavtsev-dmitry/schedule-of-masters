import React from 'react';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { grey, red } from '@material-ui/core/colors';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
import { Header } from './components';
import LayoutContainer from './containers/LatoutContainer/LayoutContainer';
import { AuthContainer, RegistrationContainer } from './containers';
import { useSelector } from 'react-redux';
import { RootState } from './services';

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
  const isAuth = useSelector((state: RootState) => state.user.isAuth);

  console.log(isAuth);

  return (
    <>
      <Router>
        <ThemeProvider theme={theme}>
          <Header />
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
