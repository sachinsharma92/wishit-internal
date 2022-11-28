import React from 'react'
import BuildGreatBanner from '../../common/buildGreatBanner';
import LayoutPrimary from '../../common/LayoutPrimary'
import HeroTechSection from '../../components/techStack/heroTechSection';
import StackSection from '../../components/techStack/stackSection';

export default function TechStackPage() {
  return (
    <LayoutPrimary>
      <HeroTechSection />
      <StackSection />
      <BuildGreatBanner />
    </LayoutPrimary>
  )
}
