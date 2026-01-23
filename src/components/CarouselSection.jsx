import React, { useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import cardImg from '../assets/card_image.png';
import browserLogos from '../assets/browser_logos.png';

const CarouselSection = () => {
    const [activeIndex, setActiveIndex] = useState(0);

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
        }, 3000);

        return () => clearInterval(interval);
    }, [cards.length]);

    return (
        <Box
            sx={{
                pt: 10,
                pb: 0, // 🔥 CRITICAL: no bottom padding
                backgroundColor: '#ffffffff', // 🔥 matches gradient end
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                minHeight: '600px',
            }}
        >
            {/* Heading */}
            <Box sx={{ textAlign: 'center', mb: 8 }}>
                <Typography
                    variant="h2"
                    sx={{
                        fontFamily: "'Poppins', sans-serif",
                        fontSize: { xs: '32px', md: '48px' },
                        fontWeight: 600,
                        color: '#000',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: 1,
                    }}
                >
                    Available on{' '}
                    <Box
                        component="span"
                        sx={{
                            backgroundColor: '#257C42',
                            color: '#fff',
                            px: 3,
                            py: 0.5,
                            borderRadius: '100px',
                            fontWeight: 600,
                        }}
                    >
                        Web
                    </Box>
                </Typography>

                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        gap: 2,
                        mt: 2,
                    }}
                >
                    <Box
                        component="img"
                        src={browserLogos}
                        alt="Browser Support"
                        sx={{
                            height: '50px',
                            width: 'auto',
                            objectFit: 'contain'
                        }}
                    />
                </Box>
            </Box>

            {/* Carousel Container */}
            <Box
                sx={{
                    position: 'relative',
                    width: '100%',
                    height: '400px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    perspective: '1000px',
                }}
            >
                {/* Cards — LOGIC UNTOUCHED */}
                {cards.map((card, index) => {
                    let offset = index - activeIndex;
                    if (offset > cards.length / 2) offset -= cards.length;
                    if (offset < -cards.length / 2) offset += cards.length;

                    const CARD_WIDTH = 500;
                    const GAP = 40;
                    const CENTER_SCALE = 1.2;
                    const SIDE_SCALE = 0.9;

                    let scale = SIDE_SCALE;
                    let opacity = 1;
                    let zIndex = 5;
                    let x = 0;
                    let transition = 'all 0.5s ease-in-out';

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

                        if (absOffset > 2) opacity = 0;
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
                                borderRadius: '12px',
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
                                }}
                            />
                        </Box>
                    );
                })}

                {/* 🌿 Gradient Overlay — blends INTO next section */}
                <Box
                    sx={{
                        position: 'absolute',
                        inset: 0,
                        background:
                            'linear-gradient(180deg, rgba(255, 255, 255, 0) 5%, rgba(82, 131, 98, 1) 100%)',
                        zIndex: 20,
                        pointerEvents: 'none',
                    }}
                />
            </Box>
        </Box>
    );
};

export default CarouselSection;
