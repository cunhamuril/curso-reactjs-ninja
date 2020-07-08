import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { CssBaseline } from '@material-ui/core';

import Routes from './routes';

function App() {
  return (
    <>
      <CssBaseline />
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </>
  );
}

export default App;
