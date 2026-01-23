import React from 'react';
import HeroSection from './components/HeroSection';
import CarouselSection from './components/CarouselSection';
import MobileAppSection from './components/MobileAppSection';
import ComparisonSection from './components/ComparisonSection';
import WhatWeDoSection from './components/WhatWeDoSection';
import UserFlowSection from './components/UserFlowSection';

function App() {
  return (
    <div className="app">
      <HeroSection />
      <CarouselSection />
      <MobileAppSection />
      <ComparisonSection />
      <WhatWeDoSection />
      <UserFlowSection />
    </div>
  );
}

export default App;
