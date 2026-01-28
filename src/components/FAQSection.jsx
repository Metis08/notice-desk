import React, { useState } from 'react';
import { Box, Typography, Container, Grid, Button, Collapse } from '@mui/material';

const faqData = [
    {
        question: "What compliance services do you offer for CAs?",
        answer: "We provide comprehensive digital infrastructure for CAs including automated tax filing, audit documentation management, and real-time client compliance tracking. Our platform is designed to streamline your practice and ensure you never miss a deadline."
    },
    {
        question: "How do I sync my client data with the platform?",
        answer: "Syncing data is effortless. Our platform integrates with popular accounting software and government portals. You can bulk-import client data or use our secure APIs for real-time synchronization with your existing workflow."
    },
    {
        question: "Is the documentation audit-ready and compliant?",
        answer: "Absolutely. All documents generated and stored on our platform follow the latest ICAI guidelines and legal requirements. We maintain a full audit trail for every action, making your audit processes faster and more reliable."
    },
    {
        question: "Can I manage multiple client portfolios under one account?",
        answer: "Yes, our dashboard is built for scale. You can manage hundreds of clients, assign team members to specific portfolios, and track the status of various filings from a single, centralized interface."
    },
    {
        question: "What security measures are in place for client confidentiality?",
        answer: "We use bank-grade encryption (AES-256) for all data. Our servers are SOC2 compliant, and we implement multi-factor authentication and role-based access controls to ensure that sensitive client information remains confidential."
    },
    {
        question: "How does the automated reminder system work?",
        answer: "Our system tracks all statutory deadlines for each client. It automatically sends notifications to both you and your clients well in advance, ensuring that all necessary documents are collected and filed on time."
    },
    {
        question: "How is the pricing for Chartered Accountants calculated?",
        answer: "Our pricing depends on several factors, including the number of client portfolios, the specific modules you require, and the level of automation needed. We offer competitive and transparent pricing tailored for CA firms of all sizes."
    }
];

const FAQSection = () => {
    const [expandedIndex, setExpandedIndex] = useState(6); // Default to the last one as per image

    const handleToggle = (index) => {
        setExpandedIndex(expandedIndex === index ? -1 : index);
    };

    return (
        <Box sx={{ pt: { xs: 4, md: 6 }, pb: { xs: 8, md: 15 }, bgcolor: '#F5F7FA', px: { xs: 1.5, sm: 3, md: 0 } }}>
            <Container maxWidth="xl">
                <Grid container spacing={{ xs: 4, md: 8 }} sx={{ alignItems: 'flex-start' }}>
                    {/* Left Column */}
                    <Grid item xs={12} md={5} lg={3.5} xl={3} sx={{
                        position: { md: 'sticky' },
                        top: { md: '120px' },
                        mb: { xs: 2, md: 0 },
                        pr: { md: 4 }
                    }}>
                        <Typography
                            sx={{
                                fontWeight: 900,
                                color: '#042E4B',
                                fontSize: {
                                    xs: 'clamp(3rem, 15vw, 4.5rem)',
                                    sm: 'clamp(4rem, 12vw, 5.5rem)',
                                    md: 'clamp(4.5rem, 6vw, 6.5rem)'
                                },
                                fontFamily: "'Poppins', sans-serif",
                                letterSpacing: '-0.04em',
                                lineHeight: 0.9,
                                textAlign: { xs: 'left', md: 'left' }
                            }}
                        >
                            FAQ'S
                        </Typography>
                    </Grid>

                    {/* Right Column - FAQ Accordion */}
                    <Grid item xs={12} md={7} lg={8.5} xl={9}>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: { xs: 1.5, md: 2.5 } }}>
                            {faqData.map((item, index) => {
                                const isExpanded = expandedIndex === index;
                                return (
                                    <Box
                                        key={index}
                                        onClick={() => handleToggle(index)}
                                        sx={{
                                            bgcolor: isExpanded ? '#AFD450' : 'white',
                                            borderRadius: isExpanded ? '32px' : '100px',
                                            p: isExpanded ? { xs: 3, md: 4 } : { xs: 2, md: 2.5 },
                                            px: { xs: 3, md: 4 },
                                            cursor: 'pointer',
                                            transition: 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
                                            boxShadow: isExpanded ? '0 30px 60px rgba(4, 46, 75, 0.2)' : '0 4px 6px rgba(0,0,0,0.02)',
                                            '&:hover': {
                                                transform: isExpanded ? 'none' : 'translateY(-2px)',
                                                boxShadow: isExpanded ? '0 30px 60px rgba(4, 46, 75, 0.2)' : '0 10px 20px rgba(0,0,0,0.04)'
                                            }
                                        }}
                                    >
                                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                            <Typography
                                                sx={{
                                                    fontWeight: 700,
                                                    fontSize: { xs: '0.95rem', sm: '1.1rem', md: '1.2rem' },
                                                    color: isExpanded ? 'white' : '#042E4B',
                                                    transition: 'all 0.3s ease',
                                                    pr: 2,
                                                    lineHeight: 1.3
                                                }}
                                            >
                                                {item.question}
                                            </Typography>

                                            <Box
                                                sx={{
                                                    width: { xs: 30, md: 36 },
                                                    height: { xs: 30, md: 36 },
                                                    bgcolor: isExpanded ? 'white' : '#AFD450',
                                                    borderRadius: '50%',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    color: isExpanded ? '#042E4B' : 'white',
                                                    flexShrink: 0,
                                                    transition: 'all 0.4s ease'
                                                }}
                                            >
                                                {isExpanded ? (
                                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                                        <line x1="18" y1="6" x2="6" y2="18"></line>
                                                        <line x1="6" y1="6" x2="18" y2="18"></line>
                                                    </svg>
                                                ) : (
                                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                                        <line x1="12" y1="5" x2="12" y2="19"></line>
                                                        <line x1="5" y1="12" x2="19" y2="12"></line>
                                                    </svg>
                                                )}
                                            </Box>
                                        </Box>

                                        <Collapse in={isExpanded} timeout={500}>
                                            <Box sx={{ mt: 3, pr: { xs: 0, md: 8 } }}>
                                                <Typography
                                                    sx={{
                                                        color: 'rgba(255, 255, 255, 0.85)',
                                                        lineHeight: 1.6,
                                                        fontSize: { xs: '0.9rem', md: '1.05rem' },
                                                        fontWeight: 500
                                                    }}
                                                >
                                                    {item.answer}
                                                </Typography>
                                            </Box>
                                        </Collapse>
                                    </Box>
                                );
                            })}
                        </Box>
                    </Grid>
                </Grid>

                {/* Call Section at the end */}
                <Box sx={{ mt: { xs: 8, md: 12 }, textAlign: { xs: 'center', md: 'left' } }}>
                    <Typography
                        sx={{
                            color: '#042E4B',
                            fontWeight: 700,
                            fontSize: { xs: '1.1rem', md: '1.25rem' },
                            mb: 3,
                            maxWidth: { md: '280px' },
                            lineHeight: 1.3,
                            mx: { xs: 'auto', md: 0 }
                        }}
                    >
                        Do you have any more questions?
                    </Typography>

                    <Box
                        sx={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            bgcolor: '#AFD450',
                            borderRadius: '100px',
                            p: 0.8,
                            pr: 1.5,
                            border: '1px solid rgba(0,0,0,0.06)',
                            boxShadow: '0 8px 20px rgba(175, 212, 80, 0.2)',
                            cursor: 'pointer',
                            transition: 'all 0.3s ease',
                            '&:hover': {
                                transform: 'translateY(-2px)',
                                boxShadow: '0 12px 25px rgba(175, 212, 80, 0.3)'
                            }
                        }}
                    >
                        <Typography sx={{ px: { xs: 2.5, md: 3.5 }, fontWeight: 700, color: '#042E4B', fontSize: '1rem' }}>
                            Call
                        </Typography>
                        <Box
                            sx={{
                                width: { xs: 36, md: 42 },
                                height: { xs: 36, md: 42 },
                                bgcolor: 'white',
                                borderRadius: '50%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: '#042E4B'
                            }}
                        >
                            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="5" y1="12" x2="19" y2="12"></line>
                                <polyline points="12 5 19 12 12 19"></polyline>
                            </svg>
                        </Box>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
};

export default FAQSection;
