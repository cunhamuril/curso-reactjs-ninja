import React from 'react';
import { CssBaseline } from '@material-ui/core';
import { Route } from 'react-router-dom';

import Routes from './routes';
import AuthProvider from './contexts/Auth';

function App() {
  return (
    <AuthProvider>
      <CssBaseline />
      <Routes />
    </AuthProvider>
  );
}

export default () => <Route component={App} />;
