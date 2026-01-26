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
                width: '100vw',
                height: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#fff',
                p: { xs: 1, md: 3 },
                fontFamily: "'Poppins', sans-serif",
                boxSizing: 'border-box',
            }}
        >
            <Box
                sx={{
                    width: '100%',
                    height: '100%',
                    backgroundColor: '#fff',
                    borderRadius: { xs: '24px', md: '44px' },
                    border: '1px solid #D1D1D1',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'space-around', 
                    pt: { xs: 5, md: 8 }, 
                    position: 'relative',
                    overflow: 'hidden', 
                }}
            >
                <Box sx={{ textAlign: 'center', maxWidth: '1250px', px: 2, zIndex: 10 }}>
                    <Typography
                        variant="h1"
                        sx={{
                            fontSize: { xs: '1.6rem', sm: '2.2rem', md: '3.4rem', lg: '4rem' },
                            fontWeight: 600,
                            color: '#000',
                            lineHeight: 1.4, 
                            whiteSpace: { md: 'nowrap' }, 
                            mb: { xs: 2, md: 3 }
                        }}
                    >
                        Technology based{' '}
                        <Box component="span" sx={{ color: '#17426C', fontWeight: 700 }}>compliance</Box>{' '}
                        solutions
                        <br />
                        for{' '}
                        <Box
                            component="span"
                            sx={{
                                backgroundColor: '#AFD450',
                                color: '#17426C',
                                px: { xs: 2.5, md: 4.5 },
                                py: 0.5,
                                borderRadius: '100px',
                                display: 'inline-flex',
                                verticalAlign: 'middle',
                                // 🔥 THE SECRET: overflow: hidden creates the 'mask' 
                                // so the word looks like it pops out of nowhere
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

                    <Typography sx={{ fontSize: { xs: '0.9rem', md: '1.25rem' }, color: '#555', maxWidth: '900px', mx: 'auto', lineHeight: 1.5, mt: 2 }}>
                        We are India's First Platform to use Blockchain Technology for Audit/
                        <br style={{ display: { xs: 'none', md: 'block' } }} />
                        Balance Confirmations.
                    </Typography>
                </Box>

                {/* Monitor Section */}
                <Box sx={{ width: '100%', flex: 1, display: 'flex', alignItems: 'flex-end', justifyContent: 'center', position: 'relative', pb: { xs: 3, md: 4, lg: 5 }, minHeight: 0 }}>
                    <Box component="img" src={dashboardImg} alt="Dashboard Monitor" sx={{ width: 'auto', maxWidth: { xs: '98%', md: '95%', lg: '1350px' }, height: 'auto', maxHeight: { xs: '50vh', md: '60vh', lg: '65vh' }, objectFit: 'contain', zIndex: 1, display: 'block', transform: { md: 'scale(1.1)', lg: 'scale(1.15)' }, transformOrigin: 'bottom center' }} />
                    <Box sx={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '100%', background: 'linear-gradient(180deg, rgba(255,255,255,0) 40%, rgba(23, 66, 108, 1) 100%)', zIndex: 5, pointerEvents: 'none' }} />
                </Box>
            </Box>
        </Box>
    );
};

export default HeroSection;