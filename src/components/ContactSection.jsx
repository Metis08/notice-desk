import React from 'react';
import {
    Box,
    Container,
    Grid,
    Typography,
    TextField,
    Button,
    Paper,
    IconButton,
    Checkbox,
    FormControlLabel,
    Stack,
    useTheme,
    useMediaQuery
} from '@mui/material';
import {
    Facebook,
    Instagram,
    Twitter,
    YouTube,
    ArrowForward,
    Room,         // Location Icon
    Email,        // Email/Contact Icon
    AccessTime    // Time Icon
} from '@mui/icons-material';

const ContactSection = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    const mapPattern = `
    <svg width="100%" height="100%" viewBox="0 0 800 400" xmlns="http://www.w3.org/2000/svg">
      <path d="M100 100 Q 150 50, 200 100 T 300 100" stroke="rgba(255,255,255,0.1)" fill="none" />
      <path d="M400 200 Q 450 150, 500 200 T 600 200" stroke="rgba(255,255,255,0.05)" fill="none" />
      <path d="M50 300 Q 100 250, 150 300 T 250 300" stroke="rgba(255,255,255,0.08)" fill="none" />
      <circle cx="450" cy="180" r="4" fill="white" opacity="0.5" />
      <path d="M450 180 L 450 170 L 445 165 L 455 165 L 450 170" fill="white" opacity="0.8" />
    </svg>
  `;

    return (
        <Box
            id="contact"
            sx={{
                bgcolor: '#0E2A3B',
                color: 'white',
                py: { xs: 8, md: 12 },
                position: 'relative',
            }}

        >
            <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
                <Grid container spacing={4} alignItems="center">
                    {/* Left Side: Contact Info */}
                    <Grid item xs={12} md={6}>
                        <Box sx={{ pr: { md: 14 } }}>
                            <Typography
                                variant="h2"
                                sx={{
                                    color: 'white',
                                    fontSize: { xs: '3rem', md: '5rem' },
                                    fontWeight: 600,
                                    mb: 4, 
                                    mt: { md: -4 }, 
                                    lineHeight: 1.1,
                                }}
                            >
                                <Box component="span" sx={{ color: '#A6C85A' }}>Contact</Box> us
                            </Typography>


                            <Grid container spacing={4}>
                                <Grid item xs={12} sm={6}>
                                    {/* Address Header with Icon */}
                                    <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 2 }}>
                                        <Room sx={{ color: '#A6C85A', fontSize: '1.2rem' }} />
                                        <Typography
                                            variant="overline"
                                            sx={{ color: 'rgba(255,255,255,0.5)', letterSpacing: 2, display: 'block' }}
                                        >
                                            OUR ADDRESS
                                        </Typography>
                                    </Stack>
                                    <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.7)', lineHeight: 1.8 }}>
                                        Sector 105, Rajendra Park<br />
                                        Gurgaon 122001,<br />
                                        Haryana, India
                                    </Typography>
                                </Grid>
                                
                                <Grid item xs={12} sm={6}>
                                    {/* Contacts Header with Icon */}
                                    <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 2 }}>
                                        <Email sx={{ color: '#A6C85A', fontSize: '1.2rem' }} />
                                        <Typography
                                            variant="overline"
                                            sx={{ color: 'rgba(255,255,255,0.5)', letterSpacing: 2, display: 'block' }}
                                        >
                                            OUR CONTACTS
                                        </Typography>
                                    </Stack>
                                    <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, mb: 3 }}>
                                        support@wraptax.com<br />
                                        +91-9999 260234
                                    </Typography>

                                    {/* Timing Section with Icon */}
                                    <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 1 }}>
                                        <AccessTime sx={{ color: '#A6C85A', fontSize: '1rem' }} />
                                        <Typography
                                            variant="overline"
                                            sx={{ color: 'rgba(255,255,255,0.5)', letterSpacing: 2 }}
                                        >
                                            Timing
                                        </Typography>
                                    </Stack>
                                    <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.8 }}>
                                        Mon - Fri : 10:00 AM - 5:00 PM
                                        <br />
                                        Sat : 10:00 AM - 2:00 PM
                                        <br />
                                        Sunday | Public Holiday : Closed
                                    </Typography>
                                </Grid>
                            </Grid>

                            <Stack direction="row" spacing={2} sx={{ mt: 8 }}>
                                {[Facebook, Instagram, Twitter, YouTube].map((Icon, index) => (
                                    <IconButton
                                        key={index}
                                        sx={{
                                            color: 'rgba(255,255,255,0.5)',
                                            bgcolor: 'rgba(255,255,255,0.05)',
                                            '&:hover': {
                                                color: 'white',
                                                bgcolor: 'rgba(255,255,255,0.1)',
                                            },
                                        }}
                                    >
                                        <Icon fontSize="small" />
                                    </IconButton>
                                ))}
                                <Box sx={{ flexGrow: 1 }} />
                                <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.5)', alignSelf: 'center' }}>
                                    — follow us
                                </Typography>
                            </Stack>
                        </Box>
                    </Grid>

                    {/* Right Side: Form Card */}
                    <Grid item xs={12} md={6}>
                        <Paper
                            elevation={0}
                            sx={{
                                p: { xs: 10, md: 10 },
                                borderRadius: '0 0 24px 24px',
                                bgcolor: '#F5F7FA',
                                color: 'text.primary',
                                position: 'relative',
                                transform: { md: 'translate(100px, -150px)' },
                                boxShadow: 'none',
                                overflow: 'hidden',
                            }}
                        >
                            <form>
                                <Stack spacing={4}>
                                    <TextField
                                        fullWidth
                                        label="Name"
                                        variant="standard"
                                        InputLabelProps={{ shrink: false }}
                                        placeholder="Name"
                                    />
                                    <TextField
                                        fullWidth
                                        label="E-mail"
                                        variant="standard"
                                        InputLabelProps={{ shrink: false }}
                                        placeholder="E-mail"
                                    />
                                    <TextField
                                        fullWidth
                                        label="Phone"
                                        variant="standard"
                                        InputLabelProps={{ shrink: false }}
                                        placeholder="Phone"
                                    />
                                    <TextField
                                        fullWidth
                                        label="Company"
                                        variant="standard"
                                        InputLabelProps={{ shrink: false }}
                                        placeholder="Company"
                                    />
                                    <TextField
                                        fullWidth
                                        label="Message"
                                        variant="standard"
                                        multiline
                                        rows={1}
                                        InputLabelProps={{ shrink: false }}
                                        placeholder="Message"
                                    />

                                    <Box sx={{ display: 'flex', alignItems: 'center', py: 2 }}>
                                        <FormControlLabel
                                            control={
                                                <Checkbox
                                                    sx={{
                                                        color: 'divider',
                                                        '&.Mui-checked': { color: 'primary.main' },
                                                    }}
                                                />
                                            }
                                            label={
                                                <Typography variant="body2" color="text.secondary">
                                                    I am not a robot
                                                </Typography>
                                            }
                                        />
                                    </Box>

                                    <Box sx={{
                                        display: 'flex',
                                        justifyContent: 'center',
                                        mr: { md: -5 },
                                        mb: { md: -20 },
                                        mt: 10
                                    }}>
                                        <Button
                                            variant="contained"
                                            endIcon={<ArrowForward />}
                                            sx={{
                                                bgcolor: '#A6C85A',
                                                color: '#051d41ff',
                                                px: 6,
                                                py: 2.5,
                                                borderRadius: 2,
                                                textTransform: 'uppercase',
                                                fontSize: '0.9rem',
                                                fontWeight: 700,
                                                letterSpacing: 1,
                                                '&:hover': {
                                                    bgcolor: '#0E2A3B',
                                                    color: 'white',
                                                },
                                            }}
                                        >
                                            Send Message
                                        </Button>
                                    </Box>
                                </Stack>
                            </form>
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default ContactSection;