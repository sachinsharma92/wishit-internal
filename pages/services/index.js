import React from 'react'
import BuildGreatBanner from '../../common/buildGreatBanner';
import LayoutPrimary from '../../common/LayoutPrimary'
import HeroServiceSection from '../../components/servicesPage/heroServiceSection';
import OurServices from '../../components/servicesPage/OurServices';

export default function ServicesPage() {
  return (
    <LayoutPrimary>
      <HeroServiceSection />
      <OurServices />
      <BuildGreatBanner />
    </LayoutPrimary>
  )
}
