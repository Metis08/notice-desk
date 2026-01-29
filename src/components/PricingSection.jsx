import React from 'react';
import { Box, Typography, Container, Grid, Button, Paper } from '@mui/material';

const pricingPlans = [
    {
        name: 'Starter',
        price: '$0',
        period: '/month',
        description: 'Perfect For Small Teams',
        buttonText: 'Start Hiring',
        features: ['3 Projects', 'AI Applicant Screening', 'AI Recruiter'],
        isHighlighted: false,
    },
    {
        name: 'PROFESSIONAL',
        price: '$99',
        period: '/month',
        description: 'Perfect For Growing Teams',
        buttonText: 'Start Hiring',
        features: ['Unlimited Projects', 'AI Applicant Screening', 'AI Recruiter', 'Risk-Free Guarantee'],
        isHighlighted: true,
    },
    {
        name: 'ENTERPRISE',
        price: 'Custom',
        period: '',
        description: 'For Large Organizations',
        buttonText: 'Contact Us',
        features: ['Unlimited Projects', 'AI Applicant Screening', 'Custom Skill Assessments', 'Custom AI Recruiter'],
        isHighlighted: false,
    }
];

const PricingSection = () => {
    return (
        <Box
            sx={{
                pt: { xs: 8, sm: 10, md: 15 },
                pb: { xs: 4, sm: 6, md: 8 },
                backgroundColor: '#F5F7FA',
                px: { xs: 2, md: 4 }
            }}
        >
            {/* Big Outer Container with Rounded Edges */}
            <Box
                sx={{
                    maxWidth: '1840px',
                    margin: '0 auto',
                    bgcolor: '#042E4B',
                    borderRadius: { xs: '32px', md: '64px' },
                    p: { xs: 4, md: 8, lg: 10 },
                    boxShadow: '0 20px 60px rgba(4, 46, 75, 0.15)',
                    border: '1px solid rgba(255, 255, 255, 0.1)'
                }}
            >
                <Container maxWidth="lg">
                    {/* Header */}
                    <Box sx={{ mb: { xs: 6, md: 10 }, textAlign: 'center' }}>
                        <Typography
                            sx={{
                                color: 'white',
                                fontWeight: 800,
                                fontFamily: "'Poppins', sans-serif",
                                fontSize: { xs: 'clamp(2rem, 8vw, 3.5rem)' },
                                mb: 1,
                                textAlign: 'center'
                            }}
                        >
                            Pricing plans
                        </Typography>
                        <Typography
                            sx={{
                                color: 'rgba(255, 255, 255, 0.7)',
                                fontSize: '1.1rem',
                                fontWeight: 500
                            }}
                        >
                            Choose the right plan for your needs.
                        </Typography>
                    </Box>

                    {/* Pricing Cards - Single row on all screens, no scroll */}
                    <Box
                        sx={{
                            display: 'flex',
                            gap: { xs: 1.5, md: 4 },
                            justifyContent: 'center',
                            alignItems: 'stretch',
                            width: '100%',
                            px: { xs: 0, md: 0 }
                        }}
                    >
                        {pricingPlans.map((plan, index) => (
                            <Box
                                key={index}
                                sx={{
                                    flex: 1,
                                    minWidth: 0, // Allows shrinking below content size
                                    maxWidth: { md: '380px' },
                                    display: 'flex'
                                }}
                            >
                                <Paper
                                    elevation={0}
                                    sx={{
                                        p: { xs: 1.5, sm: 2 },
                                        width: '100%',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        borderRadius: '32px',
                                        backgroundColor: '#ffffff',
                                        border: plan.isHighlighted ? '2px solid #A6C85A' : '1px solid rgba(14, 42, 59, 0.1)',
                                        transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                                        '&:hover': {
                                            boxShadow: '0 30px 60px rgba(14, 42, 59, 0.08)'
                                        }
                                    }}
                                >
                                    {/* Top Gray Header Area */}
                                    <Box
                                        sx={{
                                            bgcolor: plan.isHighlighted ? 'rgba(166, 200, 90, 0.15)' : '#F3F4F6',
                                            borderRadius: '24px',
                                            p: 3,
                                            mb: 4,
                                            display: 'flex',
                                            flexDirection: 'column',
                                            alignItems: 'flex-start'
                                        }}
                                    >
                                        {/* Badge */}
                                        <Box
                                            sx={{
                                                px: 2.5,
                                                py: 1,
                                                borderRadius: '20px',
                                                bgcolor: 'white',
                                                color: '#0E2A3B',
                                                fontSize: '0.85rem',
                                                fontWeight: 800,
                                                mb: 4,
                                                boxShadow: '0 2px 8px rgba(0,0,0,0.04)'
                                            }}
                                        >
                                            {plan.name.charAt(0).toUpperCase() + plan.name.slice(1).toLowerCase()}
                                        </Box>

                                        {/* Price */}
                                        <Box sx={{ display: 'flex', alignItems: 'baseline' }}>
                                            <Typography
                                                sx={{
                                                    fontSize: { xs: 'clamp(2rem, 6vw, 3rem)' },
                                                    fontWeight: 800,
                                                    color: '#0E2A3B',
                                                    lineHeight: 1
                                                }}
                                            >
                                                {plan.price}
                                            </Typography>
                                            <Typography
                                                sx={{
                                                    fontSize: '1rem',
                                                    color: '#0E2A3B',
                                                    fontWeight: 700
                                                }}
                                            >
                                                {plan.period}
                                            </Typography>
                                        </Box>
                                    </Box>

                                    {/* Content Area */}
                                    <Box sx={{ px: 2 }}>
                                        <Typography
                                            sx={{
                                                mb: 3,
                                                color: '#0E2A3B',
                                                fontWeight: 700,
                                                fontSize: '1rem'
                                            }}
                                        >
                                            {plan.description}
                                        </Typography>

                                        {/* Button */}
                                        <Button
                                            fullWidth
                                            variant="contained"
                                            sx={{
                                                mb: 4,
                                                height: '64px',
                                                borderRadius: '32px',
                                                bgcolor: '#AFD450',
                                                color: 'black',
                                                fontSize: '1rem',
                                                fontWeight: 700,
                                                textTransform: 'none',
                                                boxShadow: '0 4px 14px rgba(0,0,0,0.15)',
                                                '&:hover': {
                                                    bgcolor: '#000000',
                                                    color: 'white',
                                                    boxShadow: '0 6px 20px rgba(0,0,0,0.25)'
                                                }
                                            }}
                                        >
                                            {plan.buttonText}
                                        </Button>

                                        {/* Features */}
                                        <Box sx={{ pb: 2 }}>
                                            {plan.features.map((feature, fIndex) => (
                                                <Box
                                                    key={fIndex}
                                                    sx={{
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        mb: 2,
                                                        '&:last-child': { mb: 0 }
                                                    }}
                                                >
                                                    <Box
                                                        sx={{
                                                            mr: 1.5,
                                                            display: 'flex',
                                                            color: 'rgba(14, 42, 59, 0.3)'
                                                        }}
                                                    >
                                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                                            <polyline points="20 6 9 17 4 12"></polyline>
                                                        </svg>
                                                    </Box>
                                                    <Typography
                                                        sx={{
                                                            color: '#0E2A3B',
                                                            fontWeight: 700,
                                                            fontSize: '0.95rem'
                                                        }}
                                                    >
                                                        {feature}
                                                    </Typography>
                                                </Box>
                                            ))}
                                        </Box>
                                    </Box>
                                </Paper>
                            </Box>
                        ))}
                    </Box>
                </Container>
            </Box>
        </Box>
    );
};

export default PricingSection;
