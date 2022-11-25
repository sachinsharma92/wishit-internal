import React from 'react'
import BuildGreatBanner from '../../common/buildGreatBanner';
import LayoutPrimary from '../../common/LayoutPrimary'
import PrivacyPolicy from '../../components/privacyPolicy';
import OurServices from '../../components/servicesPage/OurServices';

export default function PrivacyPolicyPage() {
  return (
    <LayoutPrimary>
      <PrivacyPolicy />
      <BuildGreatBanner />
    </LayoutPrimary>
  )
}
