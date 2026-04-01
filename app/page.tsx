import React from 'react';
import Head from 'next/head';
import Hero from '../components/Hero';
import OnTheRoad from '../components/OnTheRoad';
import PopularBlogs from '../components/PopularBlogs';
import Connect from '../components/Connect';
import Footer from '../components/Footer';
import TheIdeaSuperconnectorPrinciples from '@/components/TheIdeaSuperconnectorPrinciples';

export default function PortfolioHero() {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-[#f8f9fa] animate-fade-in-up">
      <Head>
        <title>Sari Superconnector</title>
      </Head>

      <div className="animate-fade-in-scale animate-delay-300">
        <Hero />
      </div>
      <div className="animate-fade-in-scale animate-delay-450">
        <TheIdeaSuperconnectorPrinciples />
      </div>
      <div className="animate-fade-in-scale animate-delay-600">
        <PopularBlogs />
      </div>
      <div className="animate-fade-in-scale animate-delay-750">
        <OnTheRoad
          images={[
            '/ontheroad/traveling2.png',
            '/ontheroad/traveling1.png',
            '/ontheroad/traveling3.png',
          ]}
        />
      </div>
      <div className="animate-fade-in-scale animate-delay-900">
        <Connect />
      </div>
      <div className="animate-fade-in-scale animate-delay-1050">
        <Footer />
      </div>
    </div>
  );
}