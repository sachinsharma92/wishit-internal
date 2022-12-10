import Head from 'next/head';
import React from 'react'
import BuildGreatBanner from '../../common/buildGreatBanner';
import LayoutPrimary from '../../common/LayoutPrimary'
import ContactUs from '../../components/contactUs';

export default function ContactPage() {
  return (
    <>
      <Head>
        <title>WishIt : Contact US</title>
      </Head>
      <LayoutPrimary>
        <ContactUs />
        <BuildGreatBanner />
      </LayoutPrimary>
    </>
  )
}
