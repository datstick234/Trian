import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import GTHero from './components/GTHero';
import GTExperiences from './components/GTExperiences';
import GTHealing from './components/GTHealing';
import GTGallery from './components/GTGallery';
import GTBooking from './components/GTBooking';

export default function GreenTravelLanding() {
  return (
    <main className="min-h-screen">
      <Header variant="transparent" theme="dark" />
      <GTHero />
      <GTExperiences />
      <GTHealing />
      <GTGallery />
      <GTBooking />
      <Footer />
    </main>
  );
}