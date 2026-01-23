import React from 'react';
import { Box, Typography, Container, Grid, Paper } from '@mui/material';

const UserFlowSection = () => {
    const steps = [
        {
            label: 'LogIN',
            icon: (
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#528362" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />
                    <polyline points="10 17 15 12 10 7" />
                    <line x1="15" y1="12" x2="3" y2="12" />
                </svg>
            ),
        },
        {
            label: 'PAN',
            icon: (
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#528362" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="4" width="18" height="16" rx="2" />
                    <line x1="12" y1="4" x2="12" y2="20" />
                    <line x1="7" y1="8" x2="8" y2="8" />
                    <line x1="7" y1="12" x2="8" y2="12" />
                </svg>
            ),
        },
        {
            label: 'ADD',
            icon: (
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#528362" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                    <polyline points="14 2 14 8 20 8" />
                    <line x1="12" y1="18" x2="12" y2="12" />
                    <line x1="9" y1="15" x2="15" y2="15" />
                </svg>
            ),
        },
        {
            label: 'FETCH',
            icon: (
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#528362" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
                    <line x1="12" y1="11" x2="12" y2="17" />
                    <polyline points="9 14 12 11 15 14" />
                </svg>
            ),
        },
        {
            label: 'REPORT',
            icon: (
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#528362" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                    <polyline points="14 2 14 8 20 8" />
                    <rect x="8" y="13" width="8" height="4" rx="1" strokeWidth="1.5" />
                    <text x="9.5" y="16" fontSize="3" fill="#528362" fontWeight="bold">PDF</text>
                </svg>
            ),
        },
    ];

    const HandIcon = () => (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: 0.8 }}>
            <path d="M18 11V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0" />
            <path d="M14 10V4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0" />
            <path d="M10 10.5V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0" />
            <path d="M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15" />
        </svg>
    );

    return (
        <Box sx={{ width: '100%', backgroundColor: '#4a6b54', pb: 10, position: 'relative' }}>
            {/* Header */}
            <Box sx={{ display: 'flex', justifyContent: 'center', mb: 8 }}>
                <Box
                    sx={{
                        backgroundColor: '#FFFFFF',
                        px: { xs: 6, md: 12 },
                        py: { xs: 2.5, md: 4 },
                        borderBottomLeftRadius: '40px',
                        borderBottomRightRadius: '40px',
                        boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                    }}
                >
                    <Typography
                        variant="h3"
                        sx={{
                            color: '#528362',
                            fontWeight: 700,
                            fontFamily: "'Poppins', sans-serif",
                            fontSize: { xs: '28px', md: '52px' },
                            letterSpacing: '0.5px',
                        }}
                    >
                        The User Flow
                    </Typography>
                </Box>
            </Box>

            <Container maxWidth="lg">
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 2, flexWrap: { xs: 'wrap', md: 'nowrap' } }}>
                    {steps.map((step, index) => (
                        <React.Fragment key={index}>
                            <Paper
                                elevation={0}
                                sx={{
                                    width: { xs: '120px', md: '160px' },
                                    height: { xs: '120px', md: '160px' },
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    borderRadius: '24px',
                                    backgroundColor: '#FFFFFF',
                                    transition: 'transform 0.3s ease',
                                    '&:hover': {
                                        transform: 'translateY(-5px)',
                                    },
                                    mx: 'auto'
                                }}
                            >
                                <Box sx={{ mb: 1.5 }}>
                                    {step.icon}
                                </Box>
                                <Typography
                                    sx={{
                                        color: '#528362',
                                        fontWeight: 700,
                                        fontFamily: "'Poppins', sans-serif",
                                        fontSize: { xs: '12px', md: '14px' },
                                        letterSpacing: '1px',
                                    }}
                                >
                                    {step.label}
                                </Typography>
                            </Paper>

                            {index < steps.length - 1 && (
                                <Box sx={{
                                    display: { xs: 'none', md: 'flex' },
                                    alignItems: 'center',
                                    transform: 'rotate(-10deg)',
                                    mx: -1
                                }}>
                                    <HandIcon />
                                </Box>
                            )}
                        </React.Fragment>
                    ))}
                </Box>
            </Container>
        </Box>
    );
};

export default UserFlowSection;
