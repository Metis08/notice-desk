import React from 'react';
import { Box, Typography } from '@mui/material';
import phoneImg from '../assets/phone_mockup.png';

const MobileAppSection = () => {
  return (
    <Box sx={{ width: '100%', overflow: 'hidden' }}>
      {/* GREEN SECTION */}
      <Box
        sx={{
          position: 'relative',
          backgroundColor: '#528362',
          pt: 10,
          pb: 26,
          textAlign: 'center',
          color: '#fff',
        }}
      >
        {/* TEXT */}
        <Typography
          sx={{
            fontFamily: "'Poppins', sans-serif",
            fontWeight: 600,
            fontSize: { xs: '32px', md: '56px' },
            mb: 2,
          }}
        >
          Complynce on the go.
        </Typography>

        {/* BADGES */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 2,
            mb: 6,
          }}
        >
          <Box
            sx={{
              backgroundColor: '#fff',
              color: '#528362',
              px: 3,
              py: 0.5,
              borderRadius: '100px',
              fontWeight: 700,
              fontSize: 14,
            }}
          >
            Available
          </Box>
          <Box sx={{ fontSize: 26 }}>▶</Box>
          <Box sx={{ fontSize: 26 }}></Box>
        </Box>

        {/* INWARD CURVE CUT */}
        <Box
          sx={{
            position: 'absolute',
            bottom: -1,
            left: 0,
            width: '100%',
            height: '180px',
            overflow: 'hidden',
            zIndex: 1,
          }}
        >
          <svg
            viewBox="0 0 1440 180"
            preserveAspectRatio="none"
            width="100%"
            height="100%"
          >
            <path
              d="
                M0,0
                H360
                C520,0 620,120 720,120
                C820,120 920,0 1080,0
                H1440
                V180
                H0
                Z
              "
              fill="#ffffff"
            />
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
          gap: { xs: 1, md: 5 },
          mt: -24,
          mb: 12,
          px: 2,
        }}
      >
        {/* LEFT PHONE */}
        <Box
          component="img"
          src={phoneImg}
          sx={{
            width: { xs: 140, md: 290 },
            transform: 'translateY(20px)',
            filter: 'drop-shadow(0 20px 30px rgba(0,0,0,0.25))',
          }}
        />

        {/* CENTER PHONE */}
        <Box
          component="img"
          src={phoneImg}
          sx={{
            width: { xs: 240, md: 330 },
            filter: 'drop-shadow(0 25px 40px rgba(0,0,0,0.3))',
          }}
        />

        {/* RIGHT PHONE */}
        <Box
          component="img"
          src={phoneImg}
          sx={{
            width: { xs: 140, md: 290 },
            transform: 'translateY(20px)',
            filter: 'drop-shadow(0 20px 30px rgba(0,0,0,0.25))',
          }}
        />
      </Box>
    </Box>
  );
};

export default MobileAppSection;
