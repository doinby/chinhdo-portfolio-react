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
import Hero from './components/Hero';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container fixed sx={{fontFamily: 'MinigapLight'}}>
        <Header />
        <main>
          <Hero />
        </main>
      </Container>
    </ThemeProvider>
  );
}
