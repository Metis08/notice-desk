import React, { useState, useEffect } from 'react';
import { Box, Typography, useMediaQuery, useTheme } from '@mui/material';
import cardImg from '../assets/card_image.png';
import browserLogos from '../assets/browser_logos.png';

const CarouselSection = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const theme = useTheme();

    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const isTablet = useMediaQuery(theme.breakpoints.down('md'));

    const cards = [
        { id: 1, img: cardImg },
        { id: 2, img: cardImg },
        { id: 3, img: cardImg },
        { id: 4, img: cardImg },
        { id: 5, img: cardImg },
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prevIndex) => (prevIndex + 1) % cards.length);
        }, 2000); // ⚡ Faster rotation (from 3000 to 2000)
        return () => clearInterval(interval);
    }, [cards.length]);

    const getCardWidth = () => {
        if (isMobile) return Math.min(window.innerWidth * 0.75, 280);
        if (isTablet) return 350;
        return 500;
    };

    const getGap = () => {
        if (isMobile) return 15;
        if (isTablet) return 25;
        return 40;
    };

    const CARD_WIDTH = getCardWidth();
    const GAP = getGap();
    const CENTER_SCALE = isMobile ? 1.1 : 1.2;
    const SIDE_SCALE = isMobile ? 0.7 : 0.9;

    return (
        <Box
            sx={{
                pt: { xs: 6, md: 10 },
                pb: 10,
                backgroundColor: '#F5F7FA',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                minHeight: { xs: '450px', md: '600px' },
                width: '100%',
            }}
        >
            {/* Heading */}
            <Box sx={{ textAlign: 'center', mb: { xs: 4, md: 8 }, maxWidth: '1100px', width: '90%', mx: 'auto' }}>
                <Typography
                    variant="h2"
                    sx={{
                        fontFamily: "'Poppins', sans-serif",
                        fontSize: { xs: '24px', sm: '32px', md: '44px', lg: '52px' },
                        fontWeight: 700,
                        color: '#0E2A3B',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: 1.5,
                        lineHeight: 1.2,
                    }}
                >
                    Available on{' '}
                    <Box
                        component="span"
                        sx={{
                            backgroundColor: '#AFD450',
                            border: '1px solid rgba(166, 200, 90, 0.4)',
                            color: '#042E4B',
                            px: { xs: 2.5, md: 3.5 },
                            py: 0.5,
                            borderRadius: '100px',
                            fontWeight: 700,
                        }}
                    >
                        Web
                    </Box>
                </Typography>

                <Box sx={{ display: 'flex', justifyContent: 'center', mt: 3, opacity: 0.6 }}>
                    <Box
                        component="img"
                        src={browserLogos}
                        alt="Browser Support"
                        sx={{
                            height: { xs: '35px', md: '50px' },
                            width: 'auto',
                            objectFit: 'contain',
                        }}
                    />
                </Box>
            </Box>

            {/* Carousel Container */}
            <Box
                sx={{
                    position: 'relative',
                    width: '100%',
                    height: { xs: '300px', md: '450px' },
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    perspective: '1200px',
                }}
            >
                {cards.map((card, index) => {
                    let offset = index - activeIndex;
                    if (offset > cards.length / 2) offset -= cards.length;
                    if (offset < -cards.length / 2) offset += cards.length;

                    let scale = SIDE_SCALE;
                    let opacity = 1;
                    let zIndex = 5;
                    let x = 0;
                    let transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)';

                    if (offset === 0) {
                        scale = CENTER_SCALE;
                        zIndex = 10;
                        x = 0;
                    } else {
                        const distFromCenter =
                            (CARD_WIDTH * CENTER_SCALE) / 2 +
                            GAP +
                            (CARD_WIDTH * SIDE_SCALE) / 2;

                        const sideSpacing = CARD_WIDTH * SIDE_SCALE + GAP;
                        const absOffset = Math.abs(offset);
                        const totalDist =
                            distFromCenter + (absOffset - 1) * sideSpacing;

                        x = Math.sign(offset) * totalDist;
                        zIndex = 5 - absOffset;

                        if (isMobile) {
                            if (absOffset > 1) opacity = 0;
                        } else {
                            if (absOffset > 2) opacity = 0;
                        }

                        if (offset === 2) transition = 'none';
                    }

                    return (
                        <Box
                            key={card.id}
                            sx={{
                                position: 'absolute',
                                width: `${CARD_WIDTH}px`,
                                transition,
                                zIndex,
                                opacity,
                                transform: `translateX(${x}px) scale(${scale})`,
                                borderRadius: { xs: '12px', md: '20px' },
                                overflow: 'hidden',

                            }}
                        >
                            <Box
                                component="img"
                                src={card.img}
                                alt={`Card ${index}`}
                                sx={{
                                    width: '100%',
                                    display: 'block',
                                    border: 'none',
                                    outline: 'none',
                                }}
                            />
                        </Box>
                    );
                })}

                {/* Gradient Overlay Replaced with subtle fade */}
                <Box
                    sx={{
                        position: 'absolute',
                        inset: 0,
                        bottom: -2,
                        background:
                            'linear-gradient(180deg, rgba(245, 247, 250, 0) 0%, rgba(245, 247, 250, 0) 60%, rgba(245, 247, 250, 1) 100%)',
                        zIndex: 20,
                        pointerEvents: 'none',
                    }}
                />
            </Box>
        </Box>
    );
};

export default CarouselSection;