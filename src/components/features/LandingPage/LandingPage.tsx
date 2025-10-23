import React from 'react';

import './LandingPage.scss';
import HeroSection from '../HeroSection/HeroSection';
import HeroImage from '@/assets/images/professionals/hero_section_banner.png';

interface LandingPageProps {
  variant: 'professionals' | 'obesity' | 'home' | 'metabolic-test';
}

const LandingPage: React.FC<LandingPageProps> = ({ variant }) => {
  const renderHeroSection = () => {
    switch (variant) {
      case 'professionals':
        return (
          <HeroSection
            title="Science-backed weight loss for lasting results"
            subtitle="Take control of your weight with clinically proven, FDA-approved treatments guided by expert doctors and tailored to your lifestyle"
            variant="split"
            buttons={[{ text: 'Check My Eligibility', href: '/' }]}
            heroImage={{ src: HeroImage, alt: 'Hero Image' }}
          />
        );
      case 'obesity':
        return (
          <HeroSection
            title="Lose weight with experts by your side"
            subtitle="A prescription weight loss program with GLP-1 treatment and 1:1 coaching, tailored to your lifestyle"
            variant="split"
            buttons={[{ text: 'Start Your Journey', href: '/' }]}
            heroImage={{ src: HeroImage, alt: 'Hero Image' }}
          />
        );
      case 'home':
        return (
          <HeroSection
            title="Science-backed weight loss for lasting results"
            subtitle="Take control of your weight with clinically proven, FDA-approved treatments guided by expert doctors and tailored to your lifestyle"
            variant="split"
            buttons={[{ text: 'Check My Eligibility', href: '/' }]}
            heroImage={{ src: HeroImage, alt: 'Hero Image' }}
          />
        );
      case 'metabolic-test':
        return (
          <HeroSection
            title="Science-backed weight loss for lasting results"
            subtitle="Take control of your weight with clinically proven, FDA-approved treatments guided by expert doctors and tailored to your lifestyle"
            variant="split"
            buttons={[{ text: 'Check My Eligibility', href: '/' }]}
            heroImage={{ src: HeroImage, alt: 'Hero Image' }}
          />
        );
      default:
        return null;
    }
  };
  return <div className="landing-page-wrapper">{renderHeroSection()}</div>;
};

export default LandingPage;
