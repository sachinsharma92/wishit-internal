import React from 'react'
import BuildGreatBanner from '../../common/buildGreatBanner';
import LayoutPrimary from '../../common/LayoutPrimary'
import Clients from '../../components/homepage/clients';
import ClientsSay from '../../components/homepage/clientsSay';
import HeroSection from '../../components/homepage/heroSection';
import HowWeWork from '../../components/homepage/howWeWork';
import OurWork from '../../components/homepage/ourWork';
import TechnologyStack from '../../components/homepage/technologyStack';
import UsTrue from '../../components/homepage/usTrue';

export default function Homepage() {
  return (
    <LayoutPrimary>
      <HeroSection />
      <HowWeWork />
      <OurWork />
      <Clients />
      <TechnologyStack />
      <ClientsSay />
      <UsTrue />
      <BuildGreatBanner />
    </LayoutPrimary>
  )
}
