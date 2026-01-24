import React from 'react';
import { Box, Typography, keyframes } from '@mui/material';
import dashboardImg from '../assets/dashboard-monitor.png';

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
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#fff',
                p: { xs: 2, sm: 3, md: 3 },
                fontFamily: "'Poppins', sans-serif",
                boxSizing: 'border-box',
            }}
        >
            <Box
                sx={{
                    width: '100%',
                    minHeight: { xs: '85vh', md: '95vh' },
                    backgroundColor: '#fff',
                    borderRadius: { xs: '24px', md: '44px' },
                    border: '1px solid #D1D1D1',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    pt: { xs: 8, md: 8 },
                    position: 'relative',
                    overflow: 'hidden',
                }}
            >
                <Box sx={{ textAlign: 'center', maxWidth: '1250px', px: 2, zIndex: 10 }}>
                    <Typography
                        variant="h1"
                        sx={{
                            fontSize: { xs: '1.8rem', sm: '2.5rem', md: '3.4rem', lg: '4rem' },
                            fontWeight: 600,
                            color: '#000',
                            lineHeight: 1.3,
                            mb: { xs: 2, md: 3 }
                        }}
                    >
                        Technology based{' '}
                        <Box component="span" sx={{ color: '#4a6b54', fontWeight: 700, whiteSpace: 'nowrap' }}>compliance</Box>{' '}
                        solutions
                        <br />
                        for{' '}
                        <Box
                            component="span"
                            sx={{
                                backgroundColor: '#4a6b54',
                                color: '#fff',
                                px: { xs: 2, md: 4.5 },
                                py: { xs: 0, md: 0.5 },
                                borderRadius: '100px',
                                display: 'inline-flex',
                                verticalAlign: 'middle',
                                overflow: 'hidden',
                                position: 'relative'
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

                    <Typography sx={{ fontSize: { xs: '1rem', md: '1.25rem' }, color: '#555', maxWidth: '900px', mx: 'auto', lineHeight: 1.5, mt: 2, px: 1 }}>
                        We are India's First Platform to use Blockchain Technology for Audit/
                        <br style={{ display: { xs: 'none', md: 'block' } }} />
                        Balance Confirmations.
                    </Typography>
                </Box>

                {/* Monitor Section */}
                <Box sx={{ width: '100%', flex: 1, display: 'flex', alignItems: 'flex-end', justifyContent: 'center', position: 'relative', pb: { xs: 4, md: 4, lg: 5 }, mt: { xs: 4, md: 0 } }}>
                    <Box component="img" src={dashboardImg} alt="Dashboard Monitor" sx={{ width: 'auto', maxWidth: { xs: '95%', md: '95%', lg: '1350px' }, height: 'auto', maxHeight: { xs: '45vh', md: '60vh', lg: '65vh' }, objectFit: 'contain', zIndex: 1, display: 'block', transform: { md: 'scale(1.1)', lg: 'scale(1.15)' }, transformOrigin: 'bottom center' }} />
                    <Box sx={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: { xs: '40%', md: '60%' }, background: 'linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(32, 90, 54, 0.95) 100%)', zIndex: 5, pointerEvents: 'none' }} />
                </Box>
            </Box>
        </Box>
    );
};

export default HeroSection;