import React from 'react'
import BuildGreatBanner from '../../common/buildGreatBanner';
import LayoutPrimary from '../../common/LayoutPrimary'
import HeroServiceSection from '../../components/services/heroServiceSection';
import OurServices from '../../components/services/ourServices';

export default function ServicesPage() {
  return (
    <LayoutPrimary>
      <HeroServiceSection />
      <OurServices />
      <BuildGreatBanner />
    </LayoutPrimary>
  )
}
