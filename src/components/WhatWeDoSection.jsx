import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import phoneImg from '../assets/phone_mockup.png';

const WhatWeDoSection = () => {
    return (
        <Box sx={{ 
            pb: { xs: 5, md: 20 }, 
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
                    width: { xs: '92%', md: '75%' }, 
                    minHeight: { xs: 'auto', md: '480px' }, 
                    mt: 10,
                }}
            >
                {/* Left Content */}
                <Box
                    sx={{
                        flex: 1,
                        zIndex: 2,
                        textAlign: 'left',
                        // 🔥 Added a clear gap from the left edge on mobile
                        pl: { xs: 4.5, sm: 6, md: 12 }, 
                        // Right padding to ensure text doesn't hit the right curve
                        pr: { xs: 3, md: 15 }, 
                        color: '#FFFFFF',
                        py: { xs: 4, md: 0 }
                    }}
                >
                    <Typography
                        sx={{
                            fontWeight: 700,
                            fontFamily: "'Poppins', sans-serif",
                            // 🔥 Increased heading size slightly
                            
                            fontSize: { xs: '30px', sm: '38px', md: '44px' },
                            mb: 2.5,
                            lineHeight: 1.1
                        }}
                    >
                        What we do??
                    </Typography>
                    <Typography
                        sx={{
                            fontFamily: "'Poppins', sans-serif",
                            // 🔥 Increased content size slightly
                            fontSize: { xs: '15.5px', md: '16px' },
                            maxWidth: '500px',
                            mb: 4,
                            lineHeight: 1.7,
                            opacity: 0.95, // Made text slightly more vivid
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
                            px: 5,
                            py: 1.4,
                            fontWeight: 600,
                            textTransform: 'none',
                            fontFamily: "'Poppins', sans-serif",
                            fontSize: '15px',
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