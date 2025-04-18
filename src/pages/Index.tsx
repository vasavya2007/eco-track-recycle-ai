
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/home/Hero';
import Features from '@/components/home/Features';
import HowItWorks from '@/components/home/HowItWorks';
import AiRecognitionSection from '@/components/home/AiRecognitionSection';
import EnvironmentalImpact from '@/components/home/EnvironmentalImpact';
import CTASection from '@/components/home/CTASection';
import CorporateCollaboration from '@/components/home/CorporateCollaboration';
import ImpactStats from '@/components/home/ImpactStats';
import RecyclingCoupons from '@/components/home/RecyclingCoupons';
import CommunityInitiatives from '@/components/home/CommunityInitiatives';
import EwasteGallery from '@/components/home/EwasteGallery';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-white to-eco-soft/30">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <ImpactStats />
        <Features />
        <EwasteGallery />
        <HowItWorks />
        <RecyclingCoupons />
        <AiRecognitionSection />
        <CommunityInitiatives />
        <CorporateCollaboration />
        <EnvironmentalImpact />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
