import React from 'react';
import { Box, Typography, Grid, Container } from '@mui/material';

const ComparisonSection = () => {
    const features = [
        {
            title: 'Fast Process',
            description: 'Finish your tax return in minutes with our user-friendly interface designed for speed and efficiency.',
            icon: (
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#999" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                </svg>
            ),
        },
        {
            title: 'Guaranteed Accuracy',
            description: 'Our system double-checks every entry to ensure your taxes are filed correctly and maximize your refund.',
            icon: (
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#999" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                </svg>
            ),
        },
        {
            title: 'Expert Support',
            description: 'Access real tax professionals whenever you have questions or need guidance through complex situations.',
            icon: (
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#999" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                </svg>
            ),
        },
    ];

    return (
        <Box sx={{ py: 3, backgroundColor: '#ffffff' }}>
            <Container maxWidth="xl">
                <Typography
                    align="center"
                    sx={{
                        fontWeight: 700,
                        mb: 1.5,
                        fontFamily: "'Poppins', sans-serif",
                        fontSize: { xs: '28px', md: '40px' },
                        color: '#1a1a1a',
                    }}
                >
                    The old way Vs. The <span style={{ color: '#528362' }}>WrapTax</span> Way
                </Typography>
                <Typography
                    align="center"
                    sx={{
                        color: '#999',
                        maxWidth: '800px',
                        mx: 'auto',
                        mb: 6,
                        fontFamily: "'Poppins', sans-serif",
                        fontSize: '18px',
                        lineHeight: 1.4,
                    }}
                >
                    Contrast the typical complexity of tax filing with the streamlined, supportive process offered by WrapTax.
                </Typography>

                <Grid container spacing={1.5} justifyContent="center" wrap="nowrap">
                    {features.map((feature, index) => (
                        <Grid item xs={4} key={index}>
                            <Box
                                sx={{
                                    p: { xs: 1.5, md: 3 },
                                    height: '100%',
                                    borderRadius: '12px',
                                    border: '1px solid #BDBDBD',
                                    textAlign: 'center',
                                    transition: 'border-color 0.2s ease',
                                    '&:hover': {
                                        borderColor: '#528362',
                                    },
                                }}
                            >
                                <Box sx={{ mb: 2.5, display: 'flex', justifyContent: 'center' }}>
                                    {feature.icon}
                                </Box>
                                <Typography
                                    sx={{
                                        fontWeight: 600,
                                        mb: 1,
                                        color: '#528362',
                                        fontFamily: "'Poppins', sans-serif",
                                        fontSize: { xs: '12px', md: '17px' },
                                    }}
                                >
                                    {feature.title}
                                </Typography>
                                <Typography
                                    sx={{
                                        color: '#888',
                                        lineHeight: 1.4,
                                        fontFamily: "'Poppins', sans-serif",
                                        fontSize: { xs: '10px', md: '12.5px' },
                                    }}
                                >
                                    {feature.description}
                                </Typography>
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
};

export default ComparisonSection;
