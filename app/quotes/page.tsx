import React from 'react';
import Head from 'next/head';
import Footer from '../../components/Footer';
import QuotesPage from '../../components/QuotesPage';

export default function QuotesRoute() {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-[#FFFFFF] pt-[80px]">
      <Head>
        <title>Quotes - Sari Superconnector</title>
      </Head>

      <main className="flex-grow">
        <QuotesPage />
      </main>

      <Footer />
    </div>
  );
}
