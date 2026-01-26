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
            backgroundColor: '#17426C', 
            pb: { xs: 4, md: 8 }, 
            position: 'relative',
            overflow: 'hidden' // Prevents whole-page horizontal scroll
        }}>
            {/* Header */}
            <Box sx={{ display: 'flex', justifyContent: 'center', mb: { xs: 4, md: 6 } }}>
                <Box
                    sx={{
                        backgroundColor: '#FFFFFF',
                        px: { xs: 5, md: 10 },
                        py: { xs: 1.5, md: 2.5 },
                        borderBottomLeftRadius: '30px',
                        borderBottomRightRadius: '30px',
                        boxShadow: '0 8px 25px rgba(0,0,0,0.12)',
                    }}
                >
                    <Typography
                        sx={{
                            color: '#17426C',
                            fontWeight: 700,
                            fontFamily: "'Poppins', sans-serif",
                            fontSize: { xs: '22px', md: '42px' },
                            textTransform: 'uppercase'
                        }}
                    >
                        The User Flow
                    </Typography>
                </Box>
            </Box>

            {/* 🔥 Scroll Container Wrapper */}
            <Container 
                maxWidth="lg" 
                sx={{ 
                    overflow: 'hidden', // Ensures no scrollbar leaked from the container
                    px: { xs: 0, md: 2 } // Remove padding on mobile to let cards touch edges if needed
                }}
            >
                <Box 
                    sx={{ 
                        display: 'flex', 
                        flexDirection: 'row', 
                        alignItems: 'center', 
                        justifyContent: { xs: 'flex-start', md: 'space-between' },
                        
                        // 🔥 THE FIX: Strict scrollbar removal
                        overflowX: 'auto',
                        overflowY: 'hidden',
                        WebkitOverflowScrolling: 'touch', // Smooth swipe for iOS
                        '&::-webkit-scrollbar': {
                            display: 'none',
                            width: 0,
                            height: 0,
                        },
                        msOverflowStyle: 'none', 
                        scrollbarWidth: 'none', 
                        
                        pb: { xs: 4, md: 0 }, // Bottom padding to prevent shadows being cut off
                        px: { xs: 3, md: 0 } 
                    }}
                >
                    {steps.map((step, index) => (
                        <React.Fragment key={index}>
                            <Paper
                                elevation={0}
                                sx={{
                                    width: { xs: '125px', md: '160px' },
                                    height: { xs: '125px', md: '160px' },
                                    flexShrink: 0, 
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    borderRadius: '20px',
                                    backgroundColor: '#FFFFFF',
                                    transition: 'transform 0.2s ease',
                                    '&:hover': {
                                        transform: 'translateY(-5px)',
                                    }
                                }}
                            >
                                <Box 
                                    component="img"
                                    src={step.icon}
                                    sx={{ width: 34, height: 34, mb: 1.5, objectFit: 'contain' }}
                                />
                                <Typography
                                    sx={{
                                        color: '#17426C ',
                                        fontWeight: 700,
                                        fontFamily: "'Poppins', sans-serif",
                                        fontSize: { xs: '11px', md: '13px' },
                                        letterSpacing: '0.5px'
                                    }}
                                >
                                    {step.label}
                                </Typography>
                            </Paper>

                            {index < steps.length - 1 && <HandIcon />}
                        </React.Fragment>
                    ))}
                </Box>
            </Container>
        </Box>
    );
};

export default UserFlowSection;