import React from 'react';
import Head from 'next/head';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import TheIdeaSuperconnectorPrinciples from '../../components/TheIdeaSuperconnectorPrinciples';

export default function TheIdeaPage() {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-[#FFFFFF]">
      <Head>
        <title>The Idea - Sari Superconnector</title>
      </Head>
      <Navbar />
      <main className="flex-grow">
        <TheIdeaSuperconnectorPrinciples />
      </main>
      <Footer />
    </div>
  );
}
