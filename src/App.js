import React from 'react';
import {Route, Routes} from 'react-router';

// Custom Theme
import theme from './theme/theme';
import {ThemeProvider} from '@mui/material/styles';

// Components
import Header from './components/Header';

// CSS
import './App.css';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <main>App Works!</main>
    </ThemeProvider>
  );
}
