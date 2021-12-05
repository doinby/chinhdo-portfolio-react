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
import Footer from './components/Footer';

export default function App() {
  const isIpadScreenLess = useMediaQuery(theme.breakpoints.down('md'));

  const headerFooterConfigs = {
    sx: {marginY: 4},
  };

  const sectionConfigs = {
    component: 'section',
    sx: {marginY: 12, display: 'inline-block'},
  };

  return (
    <ThemeProvider theme={theme}>
      <Container fixed sx={{fontFamily: 'MinigapLight'}}>
        <Header configs={headerFooterConfigs} />
        <main>
          <Hero
            configs={sectionConfigs}
            id='hero-section'
            isIpadScreenLess={isIpadScreenLess}
          />
          <Projects configs={sectionConfigs} id='projects-section' />
        </main>
        <Footer configs={headerFooterConfigs} />
      </Container>
    </ThemeProvider>
  );
}
