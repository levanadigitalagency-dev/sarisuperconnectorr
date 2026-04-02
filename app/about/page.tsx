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
            <>
              Sari Kusumaningrum is a <span className="text-2xl md:text-[40px] text-[#FE5001] italic font-bold" style={{ fontFamily: "'Cormorant', serif" }}>Senior Communications Strategist, Global Business Connector,</span> and <span className="text-2xl md:text-[40px] text-[#FE5001] italic font-bold" style={{ fontFamily: "'Cormorant', serif" }}>Hospitality Leader</span> {" "}with over two decades of experience spanning media, corporate reputation, and international relations. She currently serves as Senior Director of Corporate Communications &amp; PR at Archipelago International, Southeast Asia&apos;s largest privately owned hotel management company, overseeing regional communications strategy across multiple markets.
            </>,
            <>
              Sari is <span className="text-2xl md:text-[40px] text-[#FE5001] italic font-bold" style={{ fontFamily: "'Cormorant', serif" }}>Chair of the Argentina–Chile–Peru Bilateral Committee</span> at KADIN, where she facilitates cross-border dialogue and business collaboration between Indonesia and Latin America. A former Editor-in-Chief of The Peak Indonesia under Beritasatu Media Holdings, she brings deep expertise in media leadership and strategic positioning.
            </>,
            <>
              She is also the <span className="text-2xl md:text-[40px] text-[#FE5001] italic font-bold" style={{ fontFamily: "'Cormorant', serif" }}>Founder of multiple Communications</span> and <span className="text-2xl md:text-[40px] text-[#FE5001] italic font-bold" style={{ fontFamily: "'Cormorant', serif" }}>Media Platforms</span>, and leads a hospitality-focused training initiative dedicated to developing industry-ready professionals. Sari is recognized for building high-level networks that translate into strategic partnerships, reputational growth, and sustainable global opportunities.
            </>
          ]}
        />
      </main>
      <Footer />
    </div>
  );
}
