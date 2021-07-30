import React from 'react';
import './App.css';
import {ThemeProvider} from 'styled-components';
import {Reset} from 'styled-reset';
import {Provider} from 'react-redux';

import Home from './pages/Home';
import theme from './theme.js';
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Reset/>
        <Home/>
      </ThemeProvider>
    </Provider>
    
  );
}

export default App;
