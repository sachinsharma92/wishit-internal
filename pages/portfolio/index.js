import React from 'react'
import BuildGreatBanner from '../../common/buildGreatBanner';
import LayoutPrimary from '../../common/LayoutPrimary'
import PortfolioInfo from '../../components/portfolio/portfolioInfo';

export default function PortfolioPage() {
  return (
    <LayoutPrimary>
      <PortfolioInfo />
      <BuildGreatBanner />
    </LayoutPrimary>
  )
}
