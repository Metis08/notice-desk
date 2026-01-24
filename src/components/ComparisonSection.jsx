import React from 'react';
import { Box, Typography, Container } from '@mui/material';

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
        <Box sx={{ py: { xs: 6, md: 10 }, backgroundColor: '#ffffff' }}>
            <Container maxWidth="lg">
                {/* Header Section */}
                <Box sx={{ textAlign: 'center', mb: { xs: 4, md: 8 } }}>
                    <Typography
                        sx={{
                            fontWeight: 700,
                            fontFamily: "'Poppins', sans-serif",
                            fontSize: { xs: '28px', sm: '36px', md: '52px' },
                            color: '#1a1a1a',
                            lineHeight: 1.2,
                            mb: 2
                        }}
                    >
                        The old way Vs. The <Box component="span" sx={{ color: '#4a6b54' }}>WrapTax</Box> Way
                    </Typography>
                    <Typography
                        sx={{
                            color: '#999',
                            maxWidth: '800px',
                            mx: 'auto',
                            fontFamily: "'Poppins', sans-serif",
                            fontSize: { xs: '14px', md: '18px' },
                            lineHeight: 1.4,
                        }}
                    >
                        Contrast the typical complexity of tax filing with the streamlined, supportive process offered by WrapTax.
                    </Typography>
                </Box>

                {/* Cards Container - Responsive Scroll */}
                <Box
                    sx={{
                        display: 'flex',
                        gap: { xs: 2, md: 3 },
                        overflowX: { xs: 'auto', md: 'visible' }, // Scroll on mobile, static on desktop
                        pb: { xs: 4, md: 0 },
                        px: { xs: 2, md: 0 },
                        // Hide scrollbar but keep functionality
                        scrollbarWidth: 'none', 
                        '&::-webkit-scrollbar': { display: 'none' },
                        justifyContent: { md: 'center' }
                    }}
                >
                    {features.map((feature, index) => (
                        <Box
                            key={index}
                            sx={{
                                // Card Dimensions
                                flex: { xs: '0 0 280px', sm: '0 0 320px', md: '1 1 350px' },
                                maxWidth: { md: '400px' },
                                p: { xs: 3, md: 4 },
                                borderRadius: '12px',
                                border: '1px solid #BDBDBD',
                                textAlign: 'center',
                                backgroundColor: '#fff',
                                transition: 'all 0.3s ease',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                '&:hover': {
                                    borderColor: '#4a6b54',
                                    boxShadow: '0 8px 24px rgba(74, 107, 84, 0.1)',
                                },
                            }}
                        >
                            <Box sx={{ mb: 3, display: 'flex', justifyContent: 'center' }}>
                                {feature.icon}
                            </Box>
                            <Typography
                                sx={{
                                    fontWeight: 700,
                                    mb: 1.5,
                                    color: '#4a6b54',
                                    fontFamily: "'Poppins', sans-serif",
                                    fontSize: { xs: '18px', md: '20px' },
                                }}
                            >
                                {feature.title}
                            </Typography>
                            <Typography
                                sx={{
                                    color: '#888',
                                    lineHeight: 1.6,
                                    fontFamily: "'Poppins', sans-serif",
                                    fontSize: { xs: '13px', md: '14.5px' },
                                }}
                            >
                                {feature.description}
                            </Typography>
                        </Box>
                    ))}
                </Box>
            </Container>
        </Box>
    );
};

export default ComparisonSection;