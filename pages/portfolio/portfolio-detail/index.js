import React from 'react'
import BuildGreatBanner from '../../../common/buildGreatBanner';
import LayoutPrimary from '../../../common/LayoutPrimary'
import PortfolioDetail from '../../../components/portfolio/portfolioDetail';

export default function PortfolioDetailPage() {
  return (
    <LayoutPrimary>
      <PortfolioDetail />
      <BuildGreatBanner />
    </LayoutPrimary>
  )
}
