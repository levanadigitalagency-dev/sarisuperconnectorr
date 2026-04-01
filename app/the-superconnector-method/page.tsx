import React from 'react';
import Head from 'next/head';

import Footer from '../../components/Footer';
import TheSuperconnectorMethodSection from '../../components/TheSuperconnectorMethodSection';

export default function TheSuperconnectorMethodPage() {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-[#FFFFFF] pt-[80px]">
      <Head>
        <title>The Superconnector Method - Sari Superconnector</title>
      </Head>

      <main className="flex-grow">
        <TheSuperconnectorMethodSection />
      </main>
      <Footer />
    </div>
  );
}
