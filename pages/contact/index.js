import React from 'react'
import BuildGreatBanner from '../../common/buildGreatBanner';
import LayoutPrimary from '../../common/LayoutPrimary'
import ContactUs from '../../components/contactUs';

export default function ContactPage() {
  return (
    <LayoutPrimary>
      <ContactUs />
      <BuildGreatBanner />
    </LayoutPrimary>
  )
}
