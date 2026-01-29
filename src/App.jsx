import React from 'react';
import { Box } from '@mui/material';
import HeroSection from './components/HeroSection';
import CarouselSection from './components/CarouselSection';
import MobileAppSection from './components/MobileAppSection';
import ComparisonSection from './components/ComparisonSection';
import WhatWeDoSection from './components/WhatWeDoSection';
import UserFlowSection from './components/UserFlowSection';
import FeaturesSection from './components/FeaturesSection';
import PricingSection from './components/PricingSection';
import FAQSection from './components/FAQSection';
import ContactSection from './components/ContactSection';

import Reveal from './components/Reveal';


function App() {
  return (
    <Box sx={{ width: '100%', overflowX: 'hidden', minHeight: '100vh' }}>
      <Reveal>
        <HeroSection />
      </Reveal>
      <Reveal>
        <CarouselSection />
      </Reveal>
      <Reveal>
        <MobileAppSection />
      </Reveal>
      <Reveal>
        <ComparisonSection />
      </Reveal>
      <Reveal>
        <WhatWeDoSection />
      </Reveal>
      <Reveal>
        <UserFlowSection />
      </Reveal>
      <Reveal>
        <FeaturesSection />
      </Reveal>
      <Reveal>
        <PricingSection />
      </Reveal>
      <Reveal>
        <FAQSection />
      </Reveal>
      <Reveal>
        <ContactSection />
      </Reveal>
    </Box>
  );
}

export default App;
