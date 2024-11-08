import Dashboard from '@/components/Dashboard';
import FeatureSection from '@/components/FeatureSection';
import Footer from '@/components/Footer';
import HeroSection from '@/components/hero-section';
import LatestNews from '@/components/LatestNews';
import PricingSection from '@/components/PricingSelection';
import SiteHeader from '@/components/site-head';
import TrustedBySection from '@/components/TrustedBySection';
import React from 'react'

const HomePage = () => {
  return (
    <div>
    <SiteHeader />
    
    <HeroSection />
    
    <Dashboard />
    
    <TrustedBySection />
    
    <FeatureSection />
    <LatestNews />
    
    <PricingSection />
    
    <Footer />
    </div>
  )
}

export default HomePage;