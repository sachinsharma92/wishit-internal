import Head from 'next/head';
import React from 'react'
import BuildGreatBanner from '../../../common/buildGreatBanner';
import LayoutPrimary from '../../../common/LayoutPrimary'
import PortfolioDetail from '../../../components/portfolio/portfolioDetail';

export default function PortfolioDetailPage() {
  return (
    <>
      <Head>
        <title>WishIt : Portfolio Details</title>
      </Head>
      <LayoutPrimary>
        <PortfolioDetail />
        <BuildGreatBanner />
      </LayoutPrimary>
    </>
  )
}
