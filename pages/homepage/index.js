import React from 'react'
import LayoutPrimary from '../../common/LayoutPrimary'
import Clients from '../../components/homepage/clients';
import HeroSection from '../../components/homepage/heroSection';
import HowWeWork from '../../components/homepage/howWeWork';
import OurWork from '../../components/homepage/ourWork';
import TechnologyStack from '../../components/homepage/technologyStack';

export default function Homepage() {
  return (
    <LayoutPrimary>
      <HeroSection />
      <HowWeWork />
      <OurWork />
      <Clients />
      <TechnologyStack />
    </LayoutPrimary>
  )
}
