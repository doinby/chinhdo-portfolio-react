import {createTheme, responsiveFontSizes} from '@mui/material/styles';

// Seft-hosted fonts
import MinigapLight from './fonts/MinigapLight.woff';
import MinigapLight2 from './fonts/MinigapLight.woff2';
import MinigapBold from './fonts/MinigapBold.woff';
import MinigapBold2 from './fonts/MinigapBold.woff2';

// Default CSS
import '../App.css';

let theme = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#FD510C',
    },
    secondary: {
      main: '#129277',
    },
    info: {
      main: '#FFAABE',
    },
    error: {
      main: '#ff1744',
    },
    warning: {
      main: '#ff9800',
    },
    success: {
      main: '#129277',
    },
    divider: 'rgba(253,81,12,0.4)',
  },
  typography: {
    h1: {
      fontFamily: 'MinigapBold',
      fontSize: '3.25rem',
      letterSpacing: 1,
    },
    h2: {
      fontFamily: 'MinigapBold',
      letterSpacing: 1,
    },
    h3: {
      fontFamily: 'MinigapBold',
      letterSpacing: 1,
    },
    body1: {
      fontFamily: 'MinigapLight',
      letterSpacing: 0.75,
    },
    jobTitle: {
      fontFamily: 'MinigapBold',
      fontSize: '2rem',
      color: 'primary',
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
          @font-face {
            font-family: 'MinigapLight';
            src: local(MinigapLight), url(${MinigapLight}) format('woff'),
              url(${MinigapLight2}) format('woff2);
            unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
          }

          @font-face {
            font-family: 'MinigapBold';
            src: local(MinigapBold), url(${MinigapBold}) format('woff'),
              url(${MinigapBold2}) format('woff2);
            unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
          }
        `,
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          fontFamily: 'MinigapBold',
          letterSpacing: 0.75,
        },
      },
    },
  },
});

export default theme = responsiveFontSizes(theme);
