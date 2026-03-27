import React from 'react';
import Head from 'next/head';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import OnTheRoad from '../components/OnTheRoad';
import PopularBlogs from '../components/PopularBlogs';
import Connect from '../components/Connect';
import Footer from '../components/Footer';

export default function PortfolioHero() {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-[#f8f9fa]">
      <Head>
        <title>Sari Superconnector</title>
      </Head>

      <Navbar />
      <Hero />
      <OnTheRoad />
      <PopularBlogs />
      <Connect />
      <Footer />
    </div>
  );
}