import React from 'react';
// import {Route, Routes} from 'react-router';

// Custom Theme
import theme from './theme/theme';
import {ThemeProvider} from '@mui/material/styles';

// Components
import Header from './components/Header';

// CSS
import './App.css';
import {Container} from '@mui/material';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container fixed sx={{fontFamily: 'MinigapLight'}} component='body'>
        <Header />
        <main>App Works!</main>
      </Container>
    </ThemeProvider>
  );
}
