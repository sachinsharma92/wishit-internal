import Head from 'next/head';
import React from 'react'
import BuildGreatBanner from '../../common/buildGreatBanner';
import LayoutPrimary from '../../common/LayoutPrimary'
import PrivacyPolicy from '../../components/privacyPolicy';

export default function PrivacyPolicyPage() {
  return (
    <>
      <Head>
        <title>WishIt : Privacy Policy</title>
      </Head>
      <LayoutPrimary>
        <PrivacyPolicy />
        <BuildGreatBanner />
      </LayoutPrimary>
    </>
  )
}
