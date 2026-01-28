import React from 'react';
import { Box, Typography, keyframes } from '@mui/material';
import dashboardImg from '../assets/new-dashboard.png';

// 🔥 The Subtle Reveal: Slides from below, starts invisible
const slideReveal = keyframes`
  0% {
    transform: translateY(100%);
    opacity: 0;
  }
  20% {
    opacity: 1;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
`;

const HeroSection = () => {
    return (
        <Box
            sx={{
                width: '100%',
                minHeight: '95vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#F5F7FA', // Soft Light Background
                p: { xs: 2, sm: 3, md: 3 },
                fontFamily: "'Poppins', sans-serif",
                boxSizing: 'border-box',
            }}
        >
            <Box
                sx={{
                    width: '100%',
                    minHeight: { xs: '85vh', md: '95vh' },
                    backgroundColor: '#ffffffff', // Main Notice Desk Panel: Deep Navy
                    borderRadius: { xs: '24px', md: '44px' },
                    border: '1px solid rgba(255, 255, 255, 0.05)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    pt: { xs: 8, md: 8 },
                    position: 'relative',
                    overflow: 'hidden',
                    boxShadow: '0 20px 60px rgba(9, 27, 37, 0.15)', // Soft shadow for depth
                }}
            >
                <Box sx={{ textAlign: 'center', maxWidth: '1250px', px: 2, zIndex: 10 }}>
                    <Typography
                        variant="h1"
                        sx={{
                            fontSize: { xs: '1.8rem', sm: '2.5rem', md: '3.4rem', lg: '4rem' },
                            fontWeight: 600,
                            color: '#202020ff', // Off-white text inside dark panel
                            lineHeight: 1.3,
                            mb: { xs: 2, md: 3 }
                        }}
                    >
                        Technology based{' '}
                        <Box component="span" sx={{ color: '#A6C85A', fontWeight: 700 }}>compliance</Box>{' '}
                        solutions
                        <br />
                        for{' '}
                        <Box
                            component="span"
                            sx={{
                                backgroundColor: '#A6C85A', // Soft Lime Green background
                                border: '1px solid rgba(166, 200, 90, 0.4)',
                                color: '#042E4B', // Soft Lime Green
                                px: { xs: 2.5, md: 4.5 },
                                py: 0.5,
                                borderRadius: '100px',
                                display: 'inline-flex',
                                verticalAlign: 'middle',
                                overflow: 'hidden',
                                position: 'relative',
                                fontWeight: 700
                            }}
                        >
                            <Box
                                component="span"
                                sx={{
                                    display: 'inline-block',
                                    animation: `${slideReveal} 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards`,
                                    animationDelay: '0.6s',
                                    opacity: 0,
                                }}
                            >
                                businesses
                            </Box>
                        </Box>
                    </Typography>

                    <Typography sx={{ fontSize: { xs: '1rem', md: '1.25rem' }, color: 'rgba(32, 32, 32, 0.7)', maxWidth: '900px', mx: 'auto', lineHeight: 1.5, mt: 2, px: 1 }}>
                        We are India's First Platform to use Blockchain Technology for Audit/
                        <br style={{ display: { xs: 'none', md: 'block' } }} />
                        Balance Confirmations.
                    </Typography>
                </Box>

                {/* Monitor Section */}
                <Box sx={{ width: '100%', flex: 1, display: 'flex', alignItems: 'flex-end', justifyContent: 'center', position: 'relative', mb: { xs: -4, md: -6, lg: -8 }, minHeight: 0, zIndex: 5 }}>
                    {/* Atmospheric Navy Glow Effect (Main Center) */}
                    <Box
                        sx={{
                            position: 'absolute',
                            bottom: '15%',
                            left: '50%',
                            transform: 'translateX(-50%)',
                            width: { xs: '130%', md: '110%', lg: '90%' },
                            height: '75%',
                            background: 'radial-gradient(circle, rgba(14, 42, 59, 0.55) 0%, rgba(14, 42, 59, 0) 85%)',
                            filter: 'blur(90px)',
                            zIndex: 0,
                            pointerEvents: 'none'
                        }}
                    />
                    {/* Secondary Left Glow */}
                    <Box
                        sx={{
                            position: 'absolute',
                            bottom: '25%',
                            left: '15%',
                            width: { xs: '60%', md: '40%' },
                            height: '50%',
                            background: 'radial-gradient(circle, rgba(14, 42, 59, 0.4) 0%, rgba(14, 42, 59, 0) 70%)',
                            filter: 'blur(70px)',
                            zIndex: 0,
                            pointerEvents: 'none'
                        }}
                    />
                    <Box
                        component="img"
                        src={dashboardImg}
                        alt="Dashboard Mockup"
                        sx={{
                            width: 'auto',
                            maxWidth: { xs: '100%', md: '100%', lg: '1500px' },
                            height: 'auto',
                            maxHeight: { xs: '60vh', md: '75vh', lg: '85vh' },
                            objectFit: 'contain',
                            zIndex: 1,
                            display: 'block',
                            transform: {
                                xs: 'translateY(15px)',
                                md: 'translateY(40px) scale(1.1)',
                                lg: 'translateY(60px) scale(1.15)'
                            },
                            transformOrigin: 'bottom center'
                        }}
                    />
                </Box>
            </Box>
        </Box>
    );
};

export default HeroSection;