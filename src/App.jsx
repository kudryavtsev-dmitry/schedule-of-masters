import React from 'react';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { deepPurple, red } from '@material-ui/core/colors';
import { BrowserRouter as Router } from 'react-router-dom';
import { Header } from './components';
import Layout from './components/Layout/Layout';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: deepPurple[600],
    },
    secondary: {
      main: red[500],
    },
  },
});

const App = () => (
  <>
    <Router>
      <ThemeProvider theme={theme}>
        <Header />
        <Layout />
      </ThemeProvider>
    </Router>
  </>
);

export default App;
