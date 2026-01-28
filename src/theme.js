import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: '#0E2A3B', // Deep Navy
            contrastText: '#F5F7FA',
        },
        secondary: {
            main: '#A6C85A', // Soft Lime Green
        },
        background: {
            default: '#F5F7FA', // Single Neutral Background
            paper: '#FFFFFF',
        },
        text: {
            primary: '#0E2A3B', // Dark Navy for readability
            secondary: '#607D8B', // Soft blue-gray for supporting text
        },
        success: {
            main: '#A6C85A',
        },
        divider: 'rgba(14, 42, 59, 0.08)',
    },
    typography: {
        fontFamily: '"Poppins", "Roboto", "Helvetica", "Arial", sans-serif',
        h1: {
            fontWeight: 600,
            letterSpacing: '-0.02em',
            color: '#0E2A3B',
        },
        h2: {
            fontWeight: 600,
            letterSpacing: '-0.01em',
            color: '#0E2A3B',
        },
        button: {
            textTransform: 'none',
            fontWeight: 600,
        },
    },
    shape: {
        borderRadius: 16,
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: '100px',
                    padding: '12px 32px',
                    boxShadow: 'none',
                    '&:hover': {
                        boxShadow: '0 8px 24px rgba(166, 200, 90, 0.25)',
                    },
                },
            },
        },
        MuiPaper: {
            styleOverrides: {
                root: {
                    backgroundImage: 'none',
                    boxShadow: '0 15px 45px rgba(14, 42, 59, 0.04)', // Ultra-light shadow
                    border: '1px solid rgba(14, 42, 59, 0.05)',
                },
            },
        },
    },
});

export default theme;
