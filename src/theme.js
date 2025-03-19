// theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',     // Primary Blue
      light: '#63a4ff',    // Lighter shade for hover
      dark: '#004ba0',     // Darker shade for contrast
    },
    secondary: {
      main: '#f50057',     // Pink Accent
    },
    background: {
      default: '#f9f9f9',  // Default background
      paper: '#ffffff'     // Cards, containers, etc.
    },
    text: {
      primary: '#333333',  // Main text
      secondary: '#555555' // Subtle text
    }
  },
  typography: {
    fontFamily: `"Poppins", "Arial", sans-serif`,
    button: {
      textTransform: 'none'  // Prevents all-caps on buttons
    }
  }
});

export default theme;
