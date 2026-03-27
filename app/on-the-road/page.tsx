import React from 'react';
import Head from 'next/head';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import OnTheRoad from '../../components/OnTheRoad';

export default function OnTheRoadPage() {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-[#FFFFFF]">
      <Head>
        <title>On The Road - Sari Superconnector</title>
      </Head>
      <Navbar />
      <main className="flex-grow">
        <OnTheRoad />
      </main>
      <Footer />
    </div>
  );
}
