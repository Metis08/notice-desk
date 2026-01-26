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
            overflow: 'visible'
        }}>
            <Box
                sx={{
                    background: 'linear-gradient(135deg, #17426C 0%, #17426C 100%)',
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
                        color: '#FFFFFF',
                        py: { xs: 2, md: 0 }
                    }}
                >
                    <Typography
                        sx={{
                            fontWeight: 700,
                            fontFamily: "'Poppins', sans-serif",
                            // 🔥 Increased heading size slightly
                            fontSize: { xs: '30px', sm: '38px', md: '44px' },
                            mb: 2.5,
                            lineHeight: 1.2
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
                            opacity: 0.95,
                        }}
                    >
                        Contrast the typical complexity of tax filing with the streamlined, supportive process offered by WrapTax. Contrast the typical complexity of tax filing with the streamlined, supportive process offered by WrapTax. Contrast the typical complexity of tax filing with streamlined, supportive process offered by WrapTax. Contrast the typical complexity of tax filing with the streamlined, supportive process offered by WrapTax.
                    </Typography>
                    <Button
                        variant="contained"
                        sx={{
                            backgroundColor: '#AFD450',
                            color: '#17426C',
                            borderRadius: '100px',
                            px: { xs: 4, md: 5 },
                            py: 1.4,
                            fontWeight: 600,
                            textTransform: 'none',
                            fontFamily: "'Poppins', sans-serif",
                            fontSize: { xs: '14px', md: '15px' },
                            '&:hover': { backgroundColor: '#f0f0f0' },
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
                            filter: 'drop-shadow(0 25px 50px rgba(0,0,0,0.35))',
                        }}
                    />
                </Box>
            </Box>
        </Box>
    );
};

export default WhatWeDoSection;