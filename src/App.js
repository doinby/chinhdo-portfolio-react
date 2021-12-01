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
import Projects from './components/Projects';

export default function App() {
  const sectionConfig = {
    component: 'section',
    sx: {marginY: 12, display: 'inline-block'},
  };

  return (
    <ThemeProvider theme={theme}>
      <Container fixed sx={{fontFamily: 'MinigapLight'}}>
        <Header />
        <main>
          <Hero config={sectionConfig} id='hero-section' />
          <Projects config={sectionConfig} id='projects-section' />
        </main>
      </Container>
    </ThemeProvider>
  );
}
