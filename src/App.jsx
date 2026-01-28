import React from 'react';
import { Box } from '@mui/material';
import HeroSection from './components/HeroSection';
import CarouselSection from './components/CarouselSection';
import MobileAppSection from './components/MobileAppSection';
import ComparisonSection from './components/ComparisonSection';
import WhatWeDoSection from './components/WhatWeDoSection';
import UserFlowSection from './components/UserFlowSection';
import FeaturesSection from './components/FeaturesSection';

function App() {
  return (
    <Box sx={{ width: '100%', overflowX: 'hidden', minHeight: '100vh' }}>
      <HeroSection />
      <CarouselSection />
      <MobileAppSection />
      <ComparisonSection />
      <WhatWeDoSection />
      <UserFlowSection />
      <FeaturesSection />
    </Box>
  );
}

export default App;
