'use client';

import React, { useState, useRef, useCallback } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

import Footer from '../../components/Footer';

const networkItems = [
  {
    id: "archipelago",
    date: "January 01, 2026",
    title: "Archipelago International",
    role: "Senior Director, Corporate Communications & PR",
    image: "/images/two-people.jpg"
  },
  {
    id: "kadin",
    date: "January 01, 2026",
    title: "KADIN Indonesia",
    role: "Chair, Argentina-Chile-Peru Bilateral Committee",
    image: "/images/two-people.jpg"
  },
  {
    id: "thesmedia",
    date: "January 01, 2026",
    title: "thesmedia.id",
    role: "Media platform exploring business, culture, and global perspectives.",
    image: "/images/two-people.jpg"
  }
];

const TOTAL = networkItems.length;

export default function GlobalNetwork() {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);
  const isProgrammatic = useRef(false);

  const handleScroll = useCallback(() => {
    if (!scrollRef.current || isProgrammatic.current) return;
    const { scrollLeft, clientWidth } = scrollRef.current;
    let index = Math.round(scrollLeft / clientWidth);
    index = Math.max(0, Math.min(index, TOTAL - 1));
    if (index !== activeIndex) setActiveIndex(index);
  }, [activeIndex]);

  const scrollTo = useCallback((index: number) => {
    if (!scrollRef.current) return;
    const normalized = ((index % TOTAL) + TOTAL) % TOTAL;
    isProgrammatic.current = true;
    scrollRef.current.scrollTo({ left: scrollRef.current.clientWidth * normalized, behavior: 'smooth' });
    setActiveIndex(normalized);
    setTimeout(() => { isProgrammatic.current = false; }, 600);
  }, []);

  return (
    <div className="min-h-screen flex flex-col font-sans bg-[#FFFFFF]">
      <Head>
        <title>Global Network - Sari Superconnector</title>
      </Head>

      {/* Header Section */}
      <section className="bg-[#F5F5F5] py-[40px] px-[16px] md:px-[70px] md:mt-20">
        <h1 className="font-[family-name:var(--font-cormorant)] text-[40px] md:text-[44px] font-bold text-[#AA7D55] mb-2.5">
          Global Network
        </h1>
        <p className="font-[family-name:var(--font-poppins)] text-[16px] text-[#333333] max-w-3xl leading-relaxed">
          My work connects leaders, institutions, and communities across industries and regions.<br className="hidden md:block" />
          These roles and platforms reflect the ecosystems where collaboration and opportunity continue to grow.
        </p>
      </section>

      {/* Cards Section */}
      <section className="bg-[#F5EFE6] py-[40px] px-[16px] md:px-[70px] flex-grow">

        {/* Pill Indicator — same style as Connect, infinite loop */}
        <div className="flex gap-3 mb-5 items-center">
          {networkItems.map((_, idx) => (
            <button
              key={idx}
              onClick={() => scrollTo(idx)}
              aria-label={`Go to item ${idx + 1}`}
              className="p-2 -m-2 flex items-center justify-center"
            >
              <span className={`block h-[3px] rounded-full transition-all duration-300 ${activeIndex === idx ? 'w-6 bg-[#AA7D55]' : 'w-4 bg-[#D1D5DC] hover:bg-[#AA7D55]/60'
                }`} />
            </button>
          ))}
        </div>

        {/* Mobile: horizontal scroll */}
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex md:hidden gap-4 overflow-x-auto snap-x snap-mandatory pb-4 px-[16px]"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {networkItems.map((item) => (
            <Link
              href={`/global-network/${item.id}`}
              key={item.id}
              className="flex-shrink-0 w-[78vw] flex flex-col snap-start"
            >
              <div className="relative w-full aspect-[4/3] rounded-[20px] overflow-hidden mb-2.5">
                <Image src={item.image} alt={item.title} fill className="object-cover" />
              </div>
              <span className="font-[family-name:var(--font-poppins)] text-gray-500 text-sm mb-1">{item.date}</span>
              <h3 className="font-[family-name:var(--font-poppins)] font-semibold text-[#333333] text-base">{item.title}</h3>
              <p className="font-[family-name:var(--font-poppins)] text-gray-500 text-sm leading-relaxed">{item.role}</p>
            </Link>
          ))}
        </div>

        {/* Desktop: grid */}
        <div className="hidden md:grid grid-cols-3 gap-10">
          {networkItems.map((item) => (
            <Link
              href={`/global-network/${item.id}`}
              key={item.id}
              className="group flex flex-col cursor-pointer hover:-translate-y-1 transition-transform duration-300"
            >
              <div className="relative w-full aspect-[4/3] rounded-[20px] overflow-hidden mb-2.5">
                <Image src={item.image} alt={item.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <span className="font-[family-name:var(--font-poppins)] text-gray-500 text-base mb-2.5">{item.date}</span>
              <h3 className="font-[family-name:var(--font-poppins)] font-semibold text-[#333333] text-lg">{item.title}</h3>
              <p className="font-[family-name:var(--font-poppins)] text-gray-500 text-base leading-relaxed">{item.role}</p>
            </Link>
          ))}
        </div>

      </section>

      <Footer />
    </div>
  );
}
