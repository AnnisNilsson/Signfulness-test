import { createMuiTheme } from '@material-ui/core';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#238584',
    },
    secondary: {
      main: '#CE9580',
    },
    textPrimary: {
      main: '#FFFFFF',
    },
    textSecondary: {
      main: '#373636',
    },
  },
  typography: {
    fontFamily: ['Comfortaa'],
    h1: {
      fontSize: '2rem',
      fontWeight: 700,
    },
    h2: {
      fontSize: '1.7rem',
      fontWeight: 500,
    },
    h3: {
      fontSize: '1.4rem',
      fontWeight: 500,
    },
    h4: {
      fontSize: '6rem',
      fontWeight: 700,
    },
    subtitle1: {
      fontSize: '0.8rem',
      fontWeight: 500,
    },
    body1: {
      fontWeight: 300,
    },
    button: {
      fontWeight: 700,
    },
  },
  spacing: 8,
});

export default theme;
