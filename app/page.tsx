'use client';

import { useEffect } from 'react';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { HeroSection } from '@/components/hero-section';
import { PropertiesSection } from '@/components/properties-section';
import { DaoSection } from '@/components/dao-section';
import { WhatsAppButton } from '@/components/whatsapp-button';
import '../lib/i18n';

export default function Home() {
  useEffect(() => {
    // Initialize i18n on client side
  }, []);

  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <PropertiesSection />
      <DaoSection />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}