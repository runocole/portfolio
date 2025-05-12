import { createTheme } from '@mui/material/styles';

export const getTheme = (darkMode) => createTheme({
  palette: {
    mode: 'dark', // Always dark mode
    primary: {
      main: '#FF69B4', // Hot pink
      light: '#FFB6C1', // Light pink
      dark: '#FF1493', // Deep pink
      contrastText: '#fff',
    },
    secondary: {
      main: '#00FF9F', // Neon green
      light: '#7FFFD4', // Aquamarine
      dark: '#00CC7F',
      contrastText: '#000',
    },
    background: {
      default: '#0A0A0A', // Almost black
      paper: '#1A1A1A', // Slightly lighter black
    },
    text: {
      primary: '#FFFFFF',
      secondary: '#FFB6C1', // Light pink for secondary text
    },
  },
  typography: {
    fontFamily: '"Poppins", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 800,
      fontSize: '3.5rem',
      background: 'linear-gradient(45deg, #FF69B4 30%, #00FF9F 90%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
    },
    h2: {
      fontWeight: 700,
      fontSize: '2.8rem',
    },
    h3: {
      fontWeight: 700,
      fontSize: '2.2rem',
    },
    h4: {
      fontWeight: 600,
      fontSize: '1.8rem',
    },
    h5: {
      fontWeight: 500,
      fontSize: '1.4rem',
    },
    h6: {
      fontWeight: 500,
      fontSize: '1.2rem',
    },
  },
  shape: {
    borderRadius: 16,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: 25,
          padding: '10px 24px',
          fontSize: '1rem',
          fontWeight: 600,
          boxShadow: '0 4px 14px 0 rgba(255, 105, 180, 0.39)',
          transition: 'all 0.3s ease',
          '&:hover': {
            transform: 'translateY(-2px)',
            boxShadow: '0 6px 20px 0 rgba(255, 105, 180, 0.43)',
          },
        },
        contained: {
          background: 'linear-gradient(45deg, #FF69B4 30%, #FF1493 90%)',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          background: 'linear-gradient(145deg, #1A1A1A 0%, #2A2A2A 100%)',
          borderRadius: 20,
          boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
          backdropFilter: 'blur(4px)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          transition: 'all 0.3s ease',
          '&:hover': {
            transform: 'translateY(-8px)',
            boxShadow: '0 12px 40px 0 rgba(255, 105, 180, 0.2)',
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          background: 'rgba(255, 105, 180, 0.1)',
          border: '1px solid rgba(255, 105, 180, 0.2)',
          color: '#FF69B4',
          '&:hover': {
            background: 'rgba(255, 105, 180, 0.2)',
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          background: 'rgba(10, 10, 10, 0.8)',
          backdropFilter: 'blur(10px)',
          borderBottom: '1px solid rgba(255, 105, 180, 0.1)',
        },
      },
    },
  },
});