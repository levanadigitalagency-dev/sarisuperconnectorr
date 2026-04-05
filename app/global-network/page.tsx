import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { networkItems } from '../../data/networkContent';

export const metadata = {
  title: 'Global Network - Sari Superconnector',
};

export default function GlobalNetwork() {
  return (
    <div className="min-h-screen flex flex-col bg-white pt-[80px]">
      <Navbar />

      <section className="px-[16px] md:px-[70px] pt-[36px] md:pt-[44px] pb-[24px] md:pb-[30px] bg-white">
        <h1 className="font-[family-name:var(--font-poppins)] text-[36px] md:text-[44px] lg:text-[48px] font-semibold text-[#222222] leading-[1.1] mb-2 md:mb-4">
          Global Network
        </h1>
        <p className="max-w-none font-[family-name:var(--font-poppins)] text-[18px] md:text-[20px] lg:text-[22px] leading-[1.55] text-[#2b2b2b] tracking-[-0.01em] mb-8">
          My work connects <span className="font-semibold">leaders, institutions,</span> and <span className="font-semibold">communities</span> across industries and regions.<br className="hidden lg:block" />
          These roles and platforms <span className="italic text-[#fe5a00] font-[family-name:var(--font-cormorant)] text-[22px] md:text-[24px] lg:text-[26px]">reflect the ecosystems</span> where <span className="italic text-[#fe5a00] font-[family-name:var(--font-cormorant)] text-[22px] md:text-[24px] lg:text-[26px]">collaboration</span> and <span className="italic text-[#fe5a00] font-[family-name:var(--font-cormorant)] text-[22px] md:text-[24px] lg:text-[26px]">opportunity</span><br className="hidden lg:block" />
          continue to <span className="italic text-[#fe5a00] font-[family-name:var(--font-cormorant)] text-[22px] md:text-[24px] lg:text-[26px]">grow.</span>
        </p>
      </section>

      <section className="pb-[76px] md:pb-[96px] px-[16px] md:px-[70px] pt-[28px] md:pt-[34px] bg-[#f2ede7] flex-grow">
        <div className="flex md:hidden gap-2 mb-7 md:mb-5 items-center">
          {[...Array(6)].map((_, idx) => (
            <div
              key={idx}
              className={`h-[2px] w-[24px] md:w-[20px] transition-all duration-300 ${
                idx === 0 ? 'bg-[#5f5a55]' : 'bg-[#9f9994]'
              }`}
            />
          ))}
        </div>

        <div className="flex md:hidden gap-6 overflow-x-auto snap-x snap-mandatory pb-4 -mx-[16px] px-[16px] [scrollbar-width:none]">
          {networkItems.map((item) => (
            <Link
              href={`/global-network/${item.id}`}
              key={item.id}
              className="flex-shrink-0 w-[85vw] flex flex-col snap-start"
            >
              <div className="relative w-full rounded-[12px] overflow-hidden mb-4 aspect-[16/10]">
                <Image 
                  src={item.image} 
                  alt={item.title} 
                  fill 
                  unoptimized
                  className="object-cover" 
                />
              </div>
              <h3 className="font-[family-name:var(--font-poppins)] font-semibold text-[#2a2a2a] text-[20px] leading-[1.2] mt-3 mb-1">{item.title}</h3>
              {item.id === 'the-s-media-group' ? (
                <p className="font-[family-name:var(--font-cormorant)] italic text-[#fe5a00] text-[20px] leading-tight">
                  Founder of <span className="underline">thesmedia.id</span>, <span className="underline">rsvpclique.com</span>, <span className="underline">rsvpjakarta.com</span>
                </p>
              ) : (
                <p className="font-[family-name:var(--font-cormorant)] italic text-[#FE5001] text-[20px] leading-tight">{item.subtitle}</p>
              )}
            </Link>
          ))}
        </div>

        {/* Desktop View Slider Indicator */}
        <div className="hidden md:flex gap-2 mb-6 xl:mb-8">
          <div className="w-7 h-0.5 bg-[#5f5a55]"></div>
          <div className="w-7 h-0.5 bg-[#9f9994]"></div>
          <div className="w-7 h-0.5 bg-[#9f9994]"></div>
          <div className="w-7 h-0.5 bg-[#9f9994]"></div>
          <div className="w-7 h-0.5 bg-[#9f9994]"></div>
        </div>

        <div className="hidden md:grid grid-cols-3 gap-6 xl:gap-8">
          {networkItems.map((item) => (
            <Link
              href={`/global-network/${item.id}`}
              key={item.id}
              className="group flex flex-col cursor-pointer"
            >
              <div className="relative w-full aspect-[16/10] rounded-[16px] overflow-hidden mb-3">
                <Image 
                  src={item.image} 
                  alt={item.title} 
                  fill 
                  unoptimized
                  className="object-cover" 
                />
              </div>
              <h3 className="font-[family-name:var(--font-poppins)] font-semibold text-[#2a2a2a] text-[18px] leading-[1.2] mt-4 mb-1">{item.title}</h3>
              {item.id === 'the-s-media-group' ? (
                <p className="font-[family-name:var(--font-cormorant)] italic text-[#fe5a00] text-[16px] leading-[1.2]">
                  Founder of <span className="underline cursor-pointer">thesmedia.id</span>, <span className="underline cursor-pointer">rsvpclique.com</span>, <span className="underline cursor-pointer">rsvpjakarta.com</span>
                </p>
              ) : (
                <p className="font-[family-name:var(--font-cormorant)] italic text-[#fe5a00] text-[16px] leading-[1.2]">{item.subtitle}</p>
              )}
            </Link>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}