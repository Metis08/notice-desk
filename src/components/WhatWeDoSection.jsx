import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import phoneImg from '../assets/phone_mockup.png';

const WhatWeDoSection = () => {
    return (
        <Box sx={{ pb: 20, width: '85%', display: 'flex', justifyContent: 'flex-start', overflow: 'visible' }}>
            <Box
                sx={{
                    background: 'linear-gradient(135deg, #528362 0%, #3d634a 100%)',
                    borderTopRightRadius: { xs: '40px', md: '800px' },
                    borderBottomRightRadius: { xs: '40px', md: '800px' },
                    borderTopLeftRadius: '0px',
                    borderBottomLeftRadius: '0px',
                    overflow: 'visible',
                    display: 'flex',
                    flexDirection: { xs: 'column', md: 'row' },
                    alignItems: 'center',
                    position: 'relative',
                    py: { xs: 8, md: 0 },
                    width: { xs: 'calc(100% - 20px)', md: '85%' },
                    minHeight: '520px',
                    mt: 10,
                }}
            >
                {/* Left Content */}
                <Box
                    sx={{
                        flex: 1.2,
                        zIndex: 2,
                        textAlign: 'left',
                        pl: { xs: 4, md: 15 },
                        pr: { xs: 4, md: 8 },
                        color: '#FFFFFF'
                    }}
                >
                    <Typography
                        sx={{
                            fontWeight: 700,
                            fontFamily: "'Poppins', sans-serif",
                            fontSize: { xs: '32px', md: '56px' },
                            mb: 2,
                            lineHeight: 1.2
                        }}
                    >
                        What we do??
                    </Typography>
                    <Typography
                        sx={{
                            fontFamily: "'Poppins', sans-serif",
                            fontSize: { xs: '14px', md: '16px' },
                            maxWidth: '600px',
                            mb: 4,
                            lineHeight: 1.7,
                            opacity: 0.9,
                        }}
                    >
                        Contrast the typical complexity of tax filing with the streamlined, supportive process offered by WrapTax. Contrast the typical complexity of tax filing with the streamlined, supportive process offered by WrapTax. Contrast the typical complexity of tax filing with streamlined, supportive process offered by WrapTax. Contrast the typical complexity of tax filing with the streamlined, supportive process offered by WrapTax.
                    </Typography>
                    <Button
                        variant="contained"
                        sx={{
                            backgroundColor: '#FFFFFF',
                            color: '#528362',
                            borderRadius: '100px',
                            px: 5,
                            py: 1.5,
                            fontWeight: 600,
                            textTransform: 'none',
                            fontFamily: "'Poppins', sans-serif",
                            fontSize: '15px',
                            '&:hover': {
                                backgroundColor: '#f0f0f0',
                            },
                        }}
                    >
                        Read More
                    </Button>
                </Box>

                {/* Right Content (Image) - Positioned on the edge */}
                <Box
                    sx={{
                        flex: 0,
                        position: 'absolute',
                        right: { md: '-180px', xs: 'auto' },
                        bottom: { xs: '-50px', md: 'auto' },
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        zIndex: 3,
                    }}
                >
                    <Box
                        component="img"
                        src={phoneImg}
                        alt="Mobile App"
                        sx={{
                            width: { xs: '250px', md: '420px' },
                            height: 'auto',
                            filter: 'drop-shadow(0 30px 60px rgba(0,0,0,0.4))',
                        }}
                    />
                </Box>
            </Box>
        </Box>
    );
};

export default WhatWeDoSection;
