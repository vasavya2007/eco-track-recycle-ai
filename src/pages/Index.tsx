
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/home/Hero';
import Features from '@/components/home/Features';
import HowItWorks from '@/components/home/HowItWorks';
import AiRecognitionSection from '@/components/home/AiRecognitionSection';
import EnvironmentalImpact from '@/components/home/EnvironmentalImpact';
import CTASection from '@/components/home/CTASection';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Features />
        <HowItWorks />
        <AiRecognitionSection />
        <EnvironmentalImpact />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
