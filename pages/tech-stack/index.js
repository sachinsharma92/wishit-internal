import React from 'react'
import BuildGreatBanner from '../../common/buildGreatBanner';
import LayoutPrimary from '../../common/LayoutPrimary'
import HeroTechSection from '../../components/techStack/heroTechSection';

export default function TechStackPage() {
  return (
    <LayoutPrimary>
      <HeroTechSection />
      <BuildGreatBanner />
    </LayoutPrimary>
  )
}
