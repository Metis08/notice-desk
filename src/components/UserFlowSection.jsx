import React from 'react';
import { Box, Typography, Container, Paper } from '@mui/material';

const UserFlowSection = () => {
    const steps = [
        { label: 'LogIN', icon: '/assets/logo_arrow.png' },
        { label: 'PAN', icon: '/assets/logo_window.png' },
        { label: 'ADD', icon: '/assets/logo_split.png' },
        { label: 'FETCH', icon: '/assets/logo_folder.png' },
        { label: 'REPORT', icon: '/assets/logo_pdf.png' },
    ];

    const HandIcon = () => (
        <Box
            sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transform: 'rotate(-10deg)',
                opacity: 0.7,
                flexShrink: 0,
                mx: { xs: 1.5, md: 0.5 }
            }}
        >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 11V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0" />
                <path d="M14 10V4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0" />
                <path d="M10 10.5V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0" />
                <path d="M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15" />
            </svg>
        </Box>
    );

    return (
        <Box sx={{
            width: '100%',
            backgroundColor: '#F5F7FA', // Clean Neutral Background
            pb: { xs: 4, md: 10 },
            position: 'relative',
            overflow: 'hidden'
        }}>
            {/* Header */}
            <Box sx={{ display: 'flex', justifyContent: 'center', mb: { xs: 6, md: 10 } }}>
                <Box
                    sx={{
                        backgroundColor: '#042E4B',
                        px: { xs: 5, md: 10 },
                        py: { xs: 1.5, md: 2.5 },
                        borderBottomLeftRadius: '40px',
                        borderBottomRightRadius: '40px',
                        boxShadow: '0 10px 30px rgba(14, 42, 59, 0.04)',
                        border: '1px solid rgba(14, 42, 59, 0.03)',
                    }}
                >
                    <Typography
                        sx={{
                            color: '#ffffffff',
                            fontWeight: 700,
                            fontFamily: "'Poppins', sans-serif",
                            fontSize: { xs: '20px', md: '32px' },
                            textTransform: 'uppercase',
                            letterSpacing: '2px'
                        }}
                    >
                        The User Flow
                    </Typography>
                </Box>
            </Box>

            {/* Cards Grid - Responsive Wrap */}
            <Container maxWidth="lg" sx={{ px: { xs: 2, md: 4 } }}>
                <Box
                    sx={{
                        display: 'flex',
                        flexWrap: 'nowrap',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        pb: { xs: 4, md: 0 },
                        width: '100%',
                    }}
                >
                    {steps.map((step, index) => (
                        <React.Fragment key={index}>
                            <Paper
                                elevation={0}
                                sx={{
                                    width: { xs: '65px', sm: '110px', md: '170px' },
                                    height: { xs: '65px', sm: '110px', md: '170px' },
                                    flexShrink: 0,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    borderRadius: { xs: '16px', md: '28px' },
                                    backgroundColor: '#AFD450',
                                    transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                                    border: '1px solid rgba(14, 42, 59, 0.05)',
                                    boxShadow: '0 15px 45px rgba(14, 42, 59, 0.05)',
                                    '&:hover': {
                                        transform: 'translateY(-10px) scale(1.05)',
                                        boxShadow: '0 25px 60px rgba(14, 42, 59, 0.1)',
                                        borderColor: '#A6C85A',
                                    }
                                }}
                            >
                                <Box
                                    component="img"
                                    src={step.icon}
                                    sx={{
                                        width: { xs: 18, sm: 28, md: 40 },
                                        height: { xs: 18, sm: 28, md: 40 },
                                        mb: { xs: 0.5, md: 2 },
                                        objectFit: 'contain',
                                        filter: 'grayscale(1) brightness(0.15)', // Elite iconography
                                    }}
                                />
                                <Typography
                                    sx={{
                                        color: '#3a3a3aff',
                                        fontWeight: 700,
                                        fontFamily: "'Poppins', sans-serif",
                                        fontSize: { xs: '9px', sm: '11px', md: '14px' },
                                        letterSpacing: '0.5px',
                                        textAlign: 'center'
                                    }}
                                >
                                    {step.label}
                                </Typography>
                            </Paper>

                            {/* Desktop Arrow */}
                            {index < steps.length - 1 && (
                                <Box sx={{ display: { xs: 'none', md: 'flex' }, mx: 1 }}>
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            transform: 'rotate(-5deg)',
                                            opacity: 0.8,
                                            flexShrink: 0,
                                        }}
                                    >
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#042E4B" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M18 11V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0" />
                                            <path d="M14 10V4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0" />
                                            <path d="M10 10.5V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0" />
                                            <path d="M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15" />
                                        </svg>
                                    </Box>
                                </Box>
                            )}
                        </React.Fragment>
                    ))}
                </Box>
            </Container>
        </Box >
    );
};

export default UserFlowSection;