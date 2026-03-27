import React from 'react';
import Head from 'next/head';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import AboutSection from '../../components/AboutSection';

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-[#FFFFFF]">
      <Head>
        <title>About - Sari Superconnector</title>
      </Head>
      <Navbar />
      <main className="flex-grow">
        <AboutSection
          imageSrc="/white-shirt-woman.png"
          paragraphs={[
            "Sari Kusumaningrum is a senior communications strategist with over 20 years of experience bridging the worlds of corporate leadership, international diplomacy, and strategic communication.",
            "She currently serves as Senior Director of Corporate Communications & PR at Archipelago International, Southeast Asia's largest privately owned hotel management company, and leads bilateral trade initiatives across Latin America through KADIN Indonesia.",
            "Her work is built on the belief that real influence is not about titles — it's about trust, positioning, and meaningful relationships that create lasting impact."
          ]}
        />
      </main>
      <Footer />
    </div>
  );
}
