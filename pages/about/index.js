import React from 'react'
import BuildGreatBanner from '../../common/buildGreatBanner';
import LayoutPrimary from '../../common/LayoutPrimary'
import AboutInfo from '../../components/aboutpage/aboutInfo';
import OurExpertise from '../../components/aboutpage/ourExpertise';
import OurLeadershipTeam from '../../components/aboutpage/ourLeadershipTeam';
import TheEnergy from '../../components/aboutpage/theEnergy';
import TheValuesAbout from '../../components/aboutpage/theValuesAbout';

export default function AboutPage() {
  return (
    <LayoutPrimary>
      <AboutInfo />
      <TheEnergy />
      <OurExpertise />
      <TheValuesAbout />
      {/* <OurLeadershipTeam /> */}
      <BuildGreatBanner />
    </LayoutPrimary>
  )
}
