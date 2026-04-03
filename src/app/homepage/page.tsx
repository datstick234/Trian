import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from './components/HeroSection';
import EcosystemSection from './components/EcosystemSection';
import JourneySection from './components/JourneySection';
import VuaCaLangSection from './components/VuaCaLangSection';
import GreenTravelSection from './components/GreenTravelSection';
import B2BSection from './components/B2BSection';
import CommunitySection from './components/CommunitySection';
import TrustSection from './components/TrustSection';
import CRMSection from './components/CRMSection';

export default function Homepage() {
  return (
    <main className="min-h-screen">
      <Header variant="transparent" theme="dark" />
      <HeroSection />
      <EcosystemSection />
      <JourneySection />
      <VuaCaLangSection />
      <GreenTravelSection />
      <B2BSection />
      <CommunitySection />
      <TrustSection />
      <CRMSection />
      <Footer />
    </main>
  );
}