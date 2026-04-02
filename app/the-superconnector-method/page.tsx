import React from 'react';
import Head from 'next/head';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import TheSuperconnectorMethodSection from '../../components/TheSuperconnectorMethodSection';

export default function TheSuperconnectorMethodPage() {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-[#FFFFFF]">
      <Head>
        <title>The Superconnector Method - Sari Superconnector</title>
      </Head>
      <Navbar />
      <main className="flex-grow">
        <TheSuperconnectorMethodSection />
      </main>
      <Footer />
    </div>
  );
}
