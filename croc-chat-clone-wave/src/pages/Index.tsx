
import React from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Hero } from '../components/Hero';
import { FeaturedProducts } from '../components/FeaturedProducts';
import { AboutPreview } from '../components/AboutPreview';
import { InstagramFeed } from '../components/InstagramFeed';
import { Testimonials } from '../components/Testimonials';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50">
      <Header />
      <main>
        <Hero />
        <FeaturedProducts />
        <AboutPreview />
        <Testimonials />
        <InstagramFeed />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
