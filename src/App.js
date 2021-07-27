import React from 'react';
import logo from './logo.svg';
import './App.css';
import {themeProvider} from 'styled-components';
import {Reset} from 'styled-reset';

import Home from './pages/Home';
import theme from './theme';

function App() {
  return (
    <themeProvider theme={theme}>
      <Reset/>
      <Home/>
    </themeProvider>
  );
}

export default App;
