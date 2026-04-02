import React from 'react';
import Head from 'next/head';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import SpeakingAdvisorPage from '../../components/SpeakingAdvisorPage';

export default function SpeakingAdvisoryRoute() {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-[#FFFFFF]">
      <Head>
        <title>Speaking & Advisory - Sari Superconnector</title>
      </Head>
      
      <Navbar />

      <main className="flex-grow">
        <SpeakingAdvisorPage />
      </main>

      <Footer />
    </div>
  );
}
