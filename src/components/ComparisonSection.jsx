import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import rocketIcon from '../assets/rocket_icon.png';
import checkIcon from '../assets/check_icon.png';
import supportIcon from '../assets/support_icon.png';

const ComparisonSection = () => {
    const features = [
        {
            title: 'Fast Process',
            description: 'Finish your tax return in minutes with our user-friendly interface designed for speed and efficiency.',
            icon: rocketIcon,
        },
        {
            title: 'Guaranteed Accuracy',
            description: 'Our system double-checks every entry to ensure your taxes are filed correctly and maximize your refund.',
            icon: checkIcon,
        },
        {
            title: 'Expert Support',
            description: 'Access real tax professionals whenever you have questions or need guidance through complex situations.',
            icon: supportIcon,
        },
    ];

    return (
        <Box sx={{ py: { xs: 6, md: 10 }, backgroundColor: '#F5F7FA' }}>
            <Container maxWidth="lg">
                {/* Header Section */}
                <Box sx={{ textAlign: 'center', mb: { xs: 4, md: 8 } }}>
                    <Typography
                        sx={{
                            fontWeight: 700,
                            fontFamily: "'Poppins', sans-serif",
                            fontSize: { xs: '26px', sm: '36px', md: '52px' },
                            color: '#0E2A3B',
                            lineHeight: 1.2,
                            mb: 2,
                            px: 2
                        }}
                    >
                        The old way Vs. The <Box component="span" sx={{ color: '#A6C85A' }}>WrapTax</Box> Way
                    </Typography>
                    <Typography
                        sx={{
                            color: '#546E7A',
                            maxWidth: '800px',
                            mx: 'auto',
                            fontFamily: "'Poppins', sans-serif",
                            fontSize: { xs: '14px', md: '18px' },
                            lineHeight: 1.5,
                            px: 2
                        }}
                    >
                        Contrast the typical complexity of tax filing with the streamlined, supportive process offered by WrapTax.
                    </Typography>
                </Box>

                {/* Cards Grid - Responsive Grid */}
                <Box
                    sx={{
                        display: 'grid',
                        gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' },
                        gap: { xs: 3, md: 4 },
                        px: { xs: 2, md: 0 },
                    }}
                >
                    {features.map((feature, index) => (
                        <Box
                            key={index}
                            sx={{
                                width: '100%',
                                p: { xs: 3, md: 4 },
                                borderRadius: '24px',
                                border: '1px solid rgba(14, 42, 59, 0.05)',
                                textAlign: 'center',
                                backgroundColor: '#A6C85A',
                                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                boxShadow: '0 10px 30px rgba(14, 42, 59, 0.04)',
                                '&:hover': {
                                    transform: 'translateY(-5px)',
                                    borderColor: 'rgba(166, 200, 90, 0.5)',
                                    boxShadow: '0 20px 40px rgba(14, 42, 59, 0.08)',
                                },
                            }}
                        >
                            <Box sx={{ mb: 3, display: 'flex', justifyContent: 'center' }}>
                                <Box
                                    component="img"
                                    src={feature.icon}
                                    sx={{
                                        width: 48,
                                        height: 48,
                                        objectFit: 'contain'
                                    }}
                                    alt={feature.title}
                                />
                            </Box>
                            <Typography
                                sx={{
                                    fontWeight: 700,
                                    mb: 1.5,
                                    color: '#0E2A3B',
                                    fontFamily: "'Poppins', sans-serif",
                                    fontSize: { xs: '18px', md: '20px' },
                                }}
                            >
                                {feature.title}
                            </Typography>
                            <Typography
                                sx={{
                                    color: '#303030ff',
                                    lineHeight: 1.6,
                                    fontFamily: "'Poppins', sans-serif",
                                    fontSize: { xs: '13px', md: '15px' },
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