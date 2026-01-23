import React from 'react';
import { Box, Typography } from '@mui/material';
import dashboardImg from '../assets/dashboard-monitor.png';

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
            }}
        >
            {/* Main Rounded Container */}
            <Box
                sx={{
                    width: '100%',
                    height: '100%',
                    backgroundColor: '#fff',
                    borderRadius: '44px',
                    border: '1px solid #D1D1D1',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    pt: { xs: 6, md: 9 },
                    position: 'relative',
                    overflow: 'hidden',
                }}
            >
                {/* Heading */}
                <Box
                    sx={{
                        textAlign: 'center',
                        maxWidth: '1100px',
                        px: 2,
                        mb: 1,
                        zIndex: 3,
                        position: 'relative',
                    }}
                >
                    <Typography
                        variant="h1"
                        sx={{
                            fontSize: { xs: '24px', sm: '32px', md: '46px' },
                            fontWeight: 600,
                            color: '#000',
                            lineHeight: 1.1,
                            mb: 0.5,
                        }}
                    >
                        Technology based{' '}
                        <Box component="span" sx={{ color: '#257C42', fontWeight: 700 }}>
                            compliance
                        </Box>{' '}
                        solutions
                        <br />
                        for{' '}
                        <Box
                            component="span"
                            sx={{
                                backgroundColor: '#76A089',
                                color: '#fff',
                                px: 4,
                                py: 0.5,
                                borderRadius: '100px',
                                display: 'inline-block',
                                mx: 1,
                            }}
                        >
                            businesses
                        </Box>
                    </Typography>

                    <Typography
                        sx={{
                            fontSize: { xs: '12px', md: '20px' },
                            color: '#555',
                            fontWeight: 400,
                            maxWidth: '900px',
                            mx: 'auto',
                            lineHeight: 1.3,
                            mt: 4,
                        }}
                    >
                        We are India's First Platform to use Blockchain Technology for Audit/
                        <br />
                        Balance Confirmations.
                    </Typography>
                </Box>

                {/* Floating Elements */}
                <Box
                    sx={{
                        position: 'absolute',
                        left: '22%',
                        top: '30%',
                        width: '320px',
                        height: '70px',
                        backgroundColor: '#fff',
                        borderRadius: '100px',
                        border: '1px solid #a8a8a8ff',
                        boxShadow: '0px 14px 20px rgba(0, 0, 0, 0.04)',
                        zIndex: 4,
                        display: { xs: 'none', lg: 'block' },
                    }}
                />

                <Box
                    sx={{
                        position: 'absolute',
                        right: '20%',
                        bottom: '18%',
                        width: '320px',
                        height: '70px',
                        backgroundColor: '#fff',
                        borderRadius: '100px',
                        border: '1px solid #a8a8a8ff',
                        boxShadow: '0px 14px 20px rgba(0, 0, 0, 0.04)',
                        zIndex: 4,
                        display: { xs: 'none', lg: 'block' },
                    }}
                />

                {/* Monitor Section */}
                <Box
                    sx={{
                        width: '100%',
                        flex: 1,
                        display: 'flex',
                        alignItems: 'flex-end',
                        justifyContent: 'center',
                        px: { xs: 2, md: 4 },
                        position: 'relative',
                        zIndex: 2,
                        minHeight: 0,
                    }}
                >
                    {/* Monitor Image */}
                    <Box
                        component="img"
                        src={dashboardImg}
                        alt="Dashboard Monitor"
                        sx={{
                            maxWidth: '100%',
                            maxHeight: '130%',
                            objectFit: 'contain',
                            display: 'block',
                            mb: 0.2,
                            position: 'relative',
                            zIndex: 1,
                        }}
                    />

                    {/* Green Gradient OVER the monitor */}
                    <Box
                        sx={{
                            position: 'absolute',
                            inset: 0,
                            background:
                                'linear-gradient(180deg, rgba(101, 168, 130, 0) 20%, rgba(32, 90, 54, 0.95) 100%)',
                            zIndex: 2,
                            pointerEvents: 'none',
                        }}
                    />
                </Box>
            </Box>
        </Box>
    );
};

export default HeroSection;
