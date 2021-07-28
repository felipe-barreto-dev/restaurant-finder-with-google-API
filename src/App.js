import React from 'react';
import logo from './logo.svg';
import './App.css';
import {ThemeProvider} from 'styled-components';
import {Reset} from 'styled-reset';

import Home from './pages/Home';
import theme from './theme.js';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Reset/>
      <Home/>
    </ThemeProvider>
  );
}

export default App;
