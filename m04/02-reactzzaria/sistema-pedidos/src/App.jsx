import React from 'react';
import {
  CssBaseline,
  createMuiTheme,
  MuiThemeProvider,
} from '@material-ui/core';
import { Route } from 'react-router-dom';

import Routes from './routes';
import AuthProvider from './contexts/Auth';

const theme = createMuiTheme();

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <AuthProvider>
        <CssBaseline />
        <Routes />
      </AuthProvider>
    </MuiThemeProvider>
  );
}

export default () => <Route component={App} />;
