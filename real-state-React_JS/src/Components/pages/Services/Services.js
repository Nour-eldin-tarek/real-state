import React from 'react';
import Header from '../../shared/Header';
import Footer from '../../shared/Footer';
import HeroSection from './HeroSection';
import ServicesSection from './ServicesSection';
import './Services.css';

function Services() {
  return (
    <>
      <Header />
      <HeroSection />
      <ServicesSection />
      <Footer />
    </>
  );
}

export default Services;
