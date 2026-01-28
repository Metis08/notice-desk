import React, { useEffect, useRef, useState } from 'react';
import { Box, Typography, Container, Grid } from '@mui/material';

const features = [
    {
        number: '01',
        title: 'Timeline View',
        description: 'Track your compliance journey with a clear, chronological overview of all activities and milestones.',
        color: '#AFD450',
        icon: (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 6 12 12 16 14"></polyline>
            </svg>
        )
    },
    {
        number: '02',
        title: 'Real-time Dashboard',
        description: 'Monitor your business health with instant updates and comprehensive analytics at your fingertips.',
        color: '#AFD450',
        icon: (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                <line x1="3" y1="9" x2="21" y2="9"></line>
                <line x1="9" y1="21" x2="9" y2="9"></line>
            </svg>
        )
    },
    {
        number: '03',
        title: 'Auto Sync',
        description: 'Seamlessly integrate and synchronize your data across platforms with our intelligent automation engine.',
        color: '#AFD450',
        icon: (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17 1l4 4-4 4"></path>
                <path d="M3 11V9a4 4 0 0 1 4-4h14"></path>
                <path d="M7 23l-4-4 4-4"></path>
                <path d="M21 13v2a4 4 0 0 1-4 4H3"></path>
            </svg>
        )
    },
];

const FeaturesSection = () => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            { threshold: 0.1 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <Box
            ref={sectionRef}
            sx={{
                py: { xs: 8, md: 15 },
                backgroundColor: '#F5F7FA', // Fixed background color typo
                position: 'relative',
                overflow: 'hidden',
                fontFamily: "'Poppins', sans-serif"
            }}
        >
            <Container maxWidth="lg">
                <Box sx={{ display: 'flex', justifyContent: 'center', mb: { xs: 8, md: 12 } }}>
                    <Box>
                        <Typography
                            sx={{
                                color: '#042E4B',
                                fontWeight: 700,
                                fontFamily: "'Poppins', sans-serif",
                                fontSize: { xs: '2rem', sm: '2.5rem', md: '3.2rem' }, // Responsive font size
                                textTransform: 'uppercase',
                                letterSpacing: '2px',
                                textAlign: 'center'
                            }}
                        >
                            Powerful <Box component="span" sx={{ color: '#A6C85A' }}>Features</Box>
                        </Typography>
                    </Box>
                </Box>

                <Grid container spacing={{ xs: 6, md: 6 }} justifyContent="center">
                    {features.map((feature, index) => (
                        <Grid item xs={12} sm={6} md={4} key={index}>
                            <Box
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    textAlign: 'center',
                                    px: { xs: 2, md: 3 },
                                    opacity: isVisible ? 1 : 0,
                                    transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
                                    transition: `all 1s cubic-bezier(0.16, 1, 0.3, 1) ${index * 0.25}s`,
                                }}
                            >
                                {/* Infographic Number with Slit/Sunk Effect */}
                                <Box
                                    sx={{
                                        color: '#AFD450',
                                        position: 'relative',
                                        height: { xs: '80px', md: '130px' },
                                        overflow: 'hidden',
                                        mb: { xs: 3, md: 4 },
                                        width: '100%',
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'flex-start'
                                    }}
                                >
                                    <Typography
                                        sx={{
                                            fontSize: { xs: '100px', md: '180px' },
                                            fontWeight: 900,
                                            color: feature.color,
                                            lineHeight: 0.75, // Keeps crop at bottom
                                            letterSpacing: '-5px',
                                            userSelect: 'none',
                                            opacity: 0.9
                                        }}
                                    >
                                        {feature.number}
                                    </Typography>
                                    {/* The Horizontal Line (The "Slit") */}
                                    <Box
                                        sx={{
                                            position: 'absolute',
                                            bottom: 0,
                                            left: '15%',
                                            right: '15%',
                                            height: '2px',
                                            background: 'rgba(0,0,0,0.08)',
                                            boxShadow: '0 -3px 15px rgba(0,0,0,0.2)',
                                            zIndex: 2
                                        }}
                                    />
                                </Box>

                                <Typography
                                    sx={{
                                        fontSize: { xs: '1.1rem', md: '1.25rem' },
                                        fontWeight: 800,
                                        mb: 2,
                                        color: '#0E2A3B',
                                        textTransform: 'uppercase',
                                        letterSpacing: '1.5px'
                                    }}
                                >
                                    {feature.title}
                                </Typography>

                                <Typography
                                    sx={{
                                        color: 'rgba(14, 42, 59, 0.65)',
                                        lineHeight: 1.8,
                                        fontSize: '0.95rem',
                                        mb: { xs: 4, md: 6 },
                                        maxWidth: '300px'
                                    }}
                                >
                                    {feature.description}
                                </Typography>

                                {/* Icon at bottom (consistent with infographic) */}
                                <Box
                                    sx={{
                                        color: '#0E2A3B',
                                        mt: 'auto',
                                        p: 2,
                                        borderRadius: '50%',
                                        backgroundColor: 'rgba(14, 42, 59, 0.03)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        transition: 'all 0.3s ease',
                                        '&:hover': {
                                            backgroundColor: '#A6C85A',
                                            color: '#ffffffff',
                                            transform: 'scale(1.1)'
                                        }
                                    }}
                                >
                                    {feature.icon}
                                </Box>
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
};

export default FeaturesSection;
