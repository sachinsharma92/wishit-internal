import React from 'react'
import BuildGreatBanner from '../../common/buildGreatBanner';
import LayoutPrimary from '../../common/LayoutPrimary'
import HeroServiceSection from '../../components/services/heroServiceSection';
import OurExpertise from '../../components/services/ourExpertise';

export default function ServicesPage() {
  return (
    <LayoutPrimary>
      <HeroServiceSection />
      <OurExpertise />
      <BuildGreatBanner />
    </LayoutPrimary>
  )
}
