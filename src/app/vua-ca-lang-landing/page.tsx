import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import VCLHero from './components/VCLHero';
import VCLStory from './components/VCLStory';
import VCLProducts from './components/VCLProducts';
import VCLReviews from './components/VCLReviews';
import VCLOrderForm from './components/VCLOrderForm';

export default function VuaCaLangLanding() {
  return (
    <main className="min-h-screen">
      <Header variant="transparent" theme="dark" />
      <VCLHero />
      <VCLStory />
      <VCLProducts />
      <VCLReviews />
      <VCLOrderForm />
      <Footer />
    </main>
  );
}