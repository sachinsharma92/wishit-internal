import React from 'react'
import BuildGreatBanner from '../../common/buildGreatBanner';
import LayoutPrimary from '../../common/LayoutPrimary'
import PrivacyPolicy from '../../components/privacyPolicy';

export default function PrivacyPolicyPage() {
  return (
    <LayoutPrimary>
      <PrivacyPolicy />
      <BuildGreatBanner />
    </LayoutPrimary>
  )
}
