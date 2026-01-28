import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import phoneImg from '../assets/phone_mockup.png';

const WhatWeDoSection = () => {
    return (
        <Box sx={{
            pb: { xs: 8, md: 20 },
            width: '100%',
            display: 'flex',
            justifyContent: 'flex-start',
            overflow: 'visible',
            backgroundColor: '#F5F7FA'
        }}>
            <Box
                sx={{
                    background: '#0E2A3B', // Main Notice Desk Panel: Deep Navy
                    borderTopRightRadius: { xs: '40px', md: '800px' },
                    borderBottomRightRadius: { xs: '40px', md: '800px' },
                    borderTopLeftRadius: '0px',
                    borderBottomLeftRadius: '0px',
                    overflow: 'visible',
                    display: 'flex',
                    alignItems: 'center',
                    position: 'relative',
                    py: { xs: 6, md: 0 },
                    width: { xs: '95%', sm: '90%', md: '75%' },
                    minHeight: { xs: 'auto', md: '480px' },
                    mt: { xs: 6, md: 10 },
                    boxShadow: '20px 20px 60px rgba(14, 42, 59, 0.15)',
                }}
            >
                {/* Left Content */}
                <Box
                    sx={{
                        flex: 1,
                        zIndex: 2,
                        textAlign: 'left',
                        pl: { xs: 3, sm: 6, md: 12 },
                        pr: { xs: 3, md: 15 },
                        color: '#F8F9FA', // Off-white text inside dark panel
                        py: { xs: 2, md: 0 }
                    }}
                >
                    <Typography
                        sx={{
                            fontWeight: 700,
                            fontFamily: "'Poppins', sans-serif",
                            fontSize: { xs: '30px', sm: '38px', md: '44px' },
                            mb: 2.5,
                            lineHeight: 1.2,
                            color: '#F8F9FA'
                        }}
                    >
                        What we do??
                    </Typography>
                    <Typography
                        sx={{
                            fontFamily: "'Poppins', sans-serif",
                            fontSize: { xs: '14px', md: '16px' },
                            maxWidth: '500px',
                            mb: 4,
                            lineHeight: 1.7,
                            color: 'rgba(245, 247, 250, 0.8)',
                        }}
                    >
                        Contrast the typical complexity of tax filing with the streamlined, supportive process offered by WrapTax. Contrast the typical complexity of tax filing with the streamlined, supportive process offered by WrapTax. Contrast the typical complexity of tax filing with streamlined, supportive process offered by WrapTax. Contrast the typical complexity of tax filing with the streamlined, supportive process offered by WrapTax.
                    </Typography>
                    <Button
                        variant="contained"
                        sx={{
                            backgroundColor: '#A6C85A', // Soft Lime Green
                            color: '#000',
                            borderRadius: '100px',
                            px: { xs: 4, md: 5 },
                            py: 1.4,
                            fontWeight: 700,
                            textTransform: 'none',
                            fontFamily: "'Poppins', sans-serif",
                            fontSize: { xs: '14px', md: '15px' },
                            '&:hover': {
                                backgroundColor: '#92B14C', // Darker lime for hover
                                color: '#fff',
                                boxShadow: '0 8px 24px rgba(166, 200, 90, 0.4)'
                            },
                        }}
                    >
                        Read More
                    </Button>
                </Box>

                {/* Right Content (Image) - Hidden on Mobile */}
                <Box
                    sx={{
                        display: { xs: 'none', md: 'flex' },
                        position: 'absolute',
                        right: { md: '-130px', lg: '-140px' },
                        top: '50%',
                        transform: 'translateY(-50%)',
                        zIndex: 3,
                    }}
                >
                    <Box
                        component="img"
                        src={phoneImg}
                        alt="Mobile App"
                        sx={{
                            width: { md: '380px' },
                            height: 'auto',
                            filter: 'drop-shadow(0 40px 60px rgba(14, 42, 59, 0.3))',
                        }}
                    />
                </Box>
            </Box>
        </Box>
    );
};

export default WhatWeDoSection;