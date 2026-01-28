import React, { useState, useEffect, useRef } from 'react';
import { Box, Typography, useTheme, useMediaQuery } from '@mui/material';
import { keyframes } from '@mui/system';
import phoneImg from '../assets/phone_mockup.png';
import appStoreIcons from '../assets/app_store_icons.png';

// Define the "Slide Up" entrance
const slideUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(80px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const MobileAppSection = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    // Intersection Observer Logic
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.2 } // Triggers when 20% of the section is visible
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <Box
            ref={sectionRef}
            sx={{ width: '100%', overflow: 'hidden', backgroundColor: '#F5F7FA' }}
        >
            {/* NAVY SECTION WITH CURVE */}
            <Box
                sx={{
                    position: 'relative',
                    backgroundColor: '#0E2A3B', // Key section: Deep Navy
                    pt: { xs: 8, md: 10 },
                    pb: { xs: 20, md: 26 },
                    textAlign: 'center',
                    color: '#F8F9FA', // Off-white for dark background
                }}
            >
                <Box sx={{ maxWidth: '1100px', width: '90%', mx: 'auto', mb: 2 }}>
                    <Typography
                        sx={{
                            fontFamily: "'Poppins', sans-serif",
                            fontWeight: 700,
                            fontSize: { xs: '26px', sm: '36px', md: '44px', lg: '52px' },
                            lineHeight: 1.2,
                            color: '#F8F9FA',
                        }}
                    >
                        Compliance on the go.
                    </Typography>
                </Box>

                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        gap: { xs: 1.5, md: 2 },
                        mb: 6,
                    }}
                >
                    <Box
                        sx={{
                            backgroundColor: '#AFD450',
                            border: '1px solid rgba(166, 200, 90, 0.4)',
                            color: '#042E4B', // Soft Lime accent
                            px: { xs: 9, md: 4 },
                            py: 0.5,
                            borderRadius: '100px',
                            fontWeight: 600,
                            fontSize: { xs: 14, md: 20 },
                        }}
                    >
                        Available On
                    </Box>
                    <Box
                        component="img"
                        src={appStoreIcons}
                        sx={{
                            height: { xs: 24, md: 32 },
                            width: 'auto',
                            objectFit: 'contain',
                            display: 'block'
                        }}
                        alt="Play Store and App Store"
                    />
                </Box>

                <Box
                    sx={{
                        position: 'absolute',
                        bottom: -1,
                        left: 0,
                        width: '100%',
                        height: { xs: '60px', sm: '100px', md: '180px' },
                        overflow: 'hidden',
                        zIndex: 1,
                    }}
                >
                    <svg viewBox="0 0 1440 180" preserveAspectRatio="none" width="100%" height="100%">
                        <path d="M0,0 H360 C520,0 620,120 720,120 C820,120 920,0 1080,0 H1440 V180 H0 Z" fill="#F5F7FA" />
                    </svg>
                </Box>
            </Box>

            {/* PHONES SECTION */}
            <Box
                sx={{
                    position: 'relative',
                    zIndex: 2,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'flex-end',
                    gap: { xs: 0, sm: 2, md: 5 },
                    mt: { xs: -10, sm: -14, md: -24 },
                    mb: { xs: 6, md: 14 },
                    px: 2,
                }}
            >
                {/* LEFT PHONE */}
                {!isMobile && (
                    <Box
                        component="img"
                        src={phoneImg}
                        sx={{
                            width: { sm: 180, md: 250, lg: 290 },
                            filter: 'drop-shadow(0 30px 40px rgba(14, 42, 59, 0.2))',
                            opacity: isVisible ? 1 : 0,
                            animation: isVisible ? `${slideUp} 0.8s ease-out 0.2s forwards` : 'none',
                        }}
                    />
                )}

                {/* CENTER PHONE */}
                <Box
                    component="img"
                    src={phoneImg}
                    sx={{
                        width: { xs: 200, sm: 240, md: 300, lg: 330 },
                        filter: 'drop-shadow(0 40px 60px rgba(14, 42, 59, 0.3))',
                        zIndex: 3,
                        opacity: isVisible ? 1 : 0,
                        animation: isVisible ? `${slideUp} 0.8s ease-out forwards` : 'none',
                        mb: { xs: -6, md: 0 }
                    }}
                />

                {/* RIGHT PHONE */}
                {!isMobile && (
                    <Box
                        component="img"
                        src={phoneImg}
                        sx={{
                            width: { sm: 180, md: 250, lg: 290 },
                            filter: 'drop-shadow(0 30px 40px rgba(14, 42, 59, 0.2))',
                            opacity: isVisible ? 1 : 0,
                            animation: isVisible ? `${slideUp} 0.8s ease-out 0.4s forwards` : 'none',
                        }}
                    />
                )}
            </Box>
        </Box>
    );
};

export default MobileAppSection;