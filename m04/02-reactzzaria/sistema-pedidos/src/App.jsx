import React, { createContext, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { CssBaseline } from '@material-ui/core';

import Routes from './routes';

export const ColorContext = createContext();

function App() {
  const [color, setColor] = useState('black');

  return (
    <ColorContext.Provider
      value={{
        color,
        setColor,
      }}
    >
      <CssBaseline />
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </ColorContext.Provider>
  );
}

export default App;
