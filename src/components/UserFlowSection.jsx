import React, { useEffect, useRef, useState } from 'react';
import { Box, Typography, Container, Paper, keyframes } from '@mui/material';

const drawLine = keyframes`
  from { width: 0; }
  to { width: 100%; }
`;

const fadeIn = keyframes`
  from { opacity: 0; transform: scale(0.5); }
  to { opacity: 1; transform: scale(1); }
`;

const UserFlowSection = () => {
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
            { threshold: 0.3 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    const steps = [
        { label: 'login', icon: '/assets/logo_arrow.png' },
        { label: 'create org', icon: '/assets/logo_window.png' },
        { label: 'add path', icon: '/assets/logo_split.png' },
        { label: 'fetch', icon: '/assets/logo_folder.png' },
        { label: 'report', icon: '/assets/logo_pdf.png' },
    ];

    return (
        <Box
            ref={sectionRef}
            sx={{
                width: '100%',
                backgroundColor: '#F5F7FA',
                pb: { xs: 8, md: 12 },
                position: 'relative',
                overflow: 'hidden'
            }}
        >
            {/* Header */}
            <Box sx={{ display: 'flex', justifyContent: 'center', mb: { xs: 6, md: 10 } }}>
                <Box
                    sx={{
                        backgroundColor: '#042E4B',
                        px: { xs: 5, md: 10 },
                        py: { xs: 1.5, md: 2.5 },
                        borderBottomLeftRadius: '40px',
                        borderBottomRightRadius: '40px',
                        boxShadow: '0 10px 30px rgba(14, 42, 59, 0.04)',
                        border: '1px solid rgba(14, 42, 59, 0.03)',
                    }}
                >
                    <Typography
                        sx={{
                            color: '#ffffffff',
                            fontWeight: 700,
                            fontFamily: "'Poppins', sans-serif",
                            fontSize: { xs: '20px', md: '32px' },
                            textTransform: 'uppercase',
                            letterSpacing: '2px'
                        }}
                    >
                        The User Flow
                    </Typography>
                </Box>
            </Box>

            {/* Cards Grid */}
            <Container maxWidth="lg" sx={{ px: { xs: 2, md: 4 } }}>
                <Box
                    sx={{
                        display: 'flex',
                        flexWrap: 'nowrap',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        width: '100%',
                        position: 'relative',
                    }}
                >
                    {steps.map((step, index) => (
                        <React.Fragment key={index}>
                            {/* Card */}
                            <Paper
                                elevation={0}
                                sx={{
                                    width: { xs: '60px', sm: '100px', md: '160px' },
                                    height: { xs: '60px', sm: '100px', md: '160px' },
                                    flexShrink: 0,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    borderRadius: { xs: '12px', md: '24px' },
                                    backgroundColor: '#AFD450',
                                    border: '1px solid rgba(14, 42, 59, 0.05)',
                                    boxShadow: '0 10px 30px rgba(14, 42, 59, 0.05)',
                                    opacity: isVisible ? 1 : 0,
                                    transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                                    transition: `all 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${index * 0.4}s`,
                                    zIndex: 2,
                                    '&:hover': {
                                        transform: 'translateY(-10px) scale(1.05)',
                                        boxShadow: '0 25px 60px rgba(14, 42, 59, 0.1)',
                                    }
                                }}
                            >
                                <Box
                                    component="img"
                                    src={step.icon}
                                    sx={{
                                        width: { xs: 18, sm: 24, md: 36 },
                                        height: { xs: 18, sm: 24, md: 36 },
                                        mb: { xs: 0.5, md: 1.5 },
                                        objectFit: 'contain',
                                        filter: 'grayscale(1) brightness(0.2)',
                                    }}
                                />
                                <Typography
                                    sx={{
                                        color: '#1a1a1aff',
                                        fontWeight: 700,
                                        fontFamily: "'Poppins', sans-serif",
                                        fontSize: { xs: '8px', sm: '10px', md: '13px' },
                                        textAlign: 'center',
                                        lineHeight: 1.2,
                                        px: 0.5
                                    }}
                                >
                                    {step.label}
                                </Typography>
                            </Paper>

                            {/* Sequential Connector Line and Arrow */}
                            {index < steps.length - 1 && (
                                <Box
                                    sx={{
                                        flex: 1,
                                        height: '2px',
                                        position: 'relative',
                                        mx: { xs: 0.5, md: 1 },
                                        display: 'flex',
                                        alignItems: 'center'
                                    }}
                                >
                                    {/* Line */}
                                    <Box
                                        sx={{
                                            height: '2.5px',
                                            backgroundColor: '#042E4B',
                                            width: isVisible ? '100%' : '0',
                                            transition: `width 0.4s ease-out ${(index * 0.4) + 0.3}s`,
                                            position: 'relative',
                                            '&::after': {
                                                content: '""',
                                                position: 'absolute',
                                                right: 0,
                                                top: '50%',
                                                transform: 'translateY(-50%)',
                                                width: { xs: '6px', md: '10px' },
                                                height: { xs: '6px', md: '10px' },
                                                borderTop: '2.5px solid #042E4B',
                                                borderRight: '2.5px solid #042E4B',
                                                transformOrigin: 'center',
                                                rotate: '45deg',
                                                opacity: isVisible ? 1 : 0,
                                                transition: `opacity 0.2s ease-out ${(index * 0.4) + 0.6}s`,
                                            }
                                        }}
                                    />
                                </Box>
                            )}
                        </React.Fragment>
                    ))}
                </Box>
            </Container>
        </Box>
    );
};

export default UserFlowSection;