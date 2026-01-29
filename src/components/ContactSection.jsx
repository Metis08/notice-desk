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
    ArrowForward
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
            {/* Map Pattern Overlay */}


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
                                    mb: 4, // Reduced margin to move content up
                                    mt: { md: -4 }, // Move slightly up
                                    lineHeight: 1.1,
                                }}
                            >
                                <Box component="span" sx={{ color: '#A6C85A' }}>Contact</Box> us
                            </Typography>


                            <Grid container spacing={4}>
                                <Grid item xs={12} sm={6}>
                                    <Typography
                                        variant="overline"
                                        sx={{ color: 'rgba(255,255,255,0.5)', letterSpacing: 2, mb: 2, display: 'block' }}
                                    >
                                        OUR ADDRESS
                                    </Typography>
                                    <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.7)', lineHeight: 1.8 }}>
                                        123456 Moscow<br />
                                        Lane Dyuzheva<br />
                                        building 47 office 202
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <Typography
                                        variant="overline"
                                        sx={{ color: 'rgba(255,255,255,0.5)', letterSpacing: 2, mb: 2, display: 'block' }}
                                    >
                                        OUR CONTACTS
                                    </Typography>
                                    <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.7)', lineHeight: 1.8 }}>
                                        hello@name.com<br />
                                        +7 900 800 70 60
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
