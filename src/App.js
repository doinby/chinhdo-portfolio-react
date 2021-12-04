import React from 'react';

// Custom Theme
import theme from './theme/theme';
import {ThemeProvider} from '@mui/material/styles';

// MUI Components
import useMediaQuery from '@mui/material/useMediaQuery';
import {Container} from '@mui/material';

// Components
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects/Projects';

// CSS
import './App.css';

export default function App() {
  const isIpadScreenLess = useMediaQuery(theme.breakpoints.down('md'));

  const sectionConfig = {
    component: 'section',
    sx: {marginY: 8, display: 'inline-block'},
  };

  return (
    <ThemeProvider theme={theme}>
      <Container fixed sx={{fontFamily: 'MinigapLight'}}>
        <Header />
        <main>
          <Hero
            config={sectionConfig}
            id='hero-section'
            isIpadScreenLess={isIpadScreenLess}
          />
          <Projects config={sectionConfig} id='projects-section' />
        </main>
      </Container>
    </ThemeProvider>
  );
}
