'use client';

import React, { useState, useRef } from 'react';

// Data untuk Quotes Carousel
const quotesData = [
  {
    id: 0,
    text: "Success isn't about making one big move, but about showing up consistently, learning from mistakes, and improving a little every day.",
    author: "Sari Kusumaningrum"
  },
  {
    id: 1,
    text: "True connection happens when we listen to understand, not just to reply.",
    author: "Sari Kusumaningrum"
  },
  {
    id: 2,
    text: "Leadership is not about being in charge. It is about taking care of those in your charge.",
    author: "Sari Kusumaningrum"
  },
  {
    id: 3,
    text: "The best way to predict the future is to create it together through meaningful collaboration.",
    author: "Sari Kusumaningrum"
  },
  {
    id: 4,
    text: "In a world full of noise, authenticity is the only frequency that truly resonates.",
    author: "Sari Kusumaningrum"
  }
];

export default function Connect() {
  const [activeQuoteIndex, setActiveQuoteIndex] = useState(0);
  const quoteScrollContainerRef = useRef<HTMLDivElement>(null);

  // Fungsi saat container di-scroll
  const handleQuoteScroll = () => {
    if (!quoteScrollContainerRef.current) return;
    const { scrollLeft, clientWidth } = quoteScrollContainerRef.current;

    // Menghitung index
    let index = Math.round(scrollLeft / clientWidth);

    // PERBAIKAN 1: Clamping Index!
    // Mencegah index menjadi -1 atau lebih dari jumlah data saat terjadi overscroll/bouncing di Mac/HP
    index = Math.max(0, Math.min(index, quotesData.length - 1));

    if (index !== activeQuoteIndex) {
      setActiveQuoteIndex(index);
    }
  };

  // Fungsi saat pill indicator diklik
  const scrollToQuote = (index: number) => {
    if (!quoteScrollContainerRef.current) return;
    const { clientWidth } = quoteScrollContainerRef.current;
    quoteScrollContainerRef.current.scrollTo({
      left: clientWidth * index,
      behavior: 'smooth'
    });
    setActiveQuoteIndex(index);
  };

  return (
    <section className="bg-[#F5EFE6] py-[40px] px-[16px] md:px-[70px]">
      <div className="flex flex-col md:flex-row gap-16 md:gap-24 items-start">

        {/* Left Column: Form */}
        <div className="flex-1 w-full flex flex-col">
          <h2 className="font-[family-name:var(--font-cormorant)] text-[40px] md:text-[44px] font-bold text-[#22333B] mb-2 leading-tight">
            Connect
          </h2>
          <p className="font-[family-name:var(--font-poppins)] text-[15px] md:text-lg text-[#4A5565] mb-5">
            For strategic advisory, speaking invitations, and institutional collaboration:
          </p>

          <form className="flex flex-col gap-4 w-full">
            <input
              type="email"
              placeholder="Enter your email here"
              className="w-full h-12 px-4 rounded-[6px] border border-gray-400 bg-transparent text-[#333333] font-[family-name:var(--font-poppins)] placeholder:text-[#94A3B8] focus:outline-none focus:border-[#A44A3F] focus:ring-1 focus:ring-[#A44A3F] transition-all"
            />

            <textarea
              placeholder="Your message..."
              className="w-full h-32 px-4 py-3 rounded-[6px] border border-gray-400 bg-transparent text-[#333333] font-[family-name:var(--font-poppins)] placeholder:text-[#94A3B8] focus:outline-none focus:border-[#A44A3F] focus:ring-1 focus:ring-[#A44A3F] transition-all resize-none"
            />

            <div className="flex gap-4 mt-2">
              <button
                type="submit"
                className="bg-[#A44A3F] text-[#F5F5F5] font-[family-name:var(--font-poppins)] font-semibold text-[15px] py-[10px] px-[28px] rounded-[6px] hover:opacity-90 transition-opacity"
              >
                Submit
              </button>
              {/* PERBAIKAN 2: Ubah type="button" menjadi type="reset" agar tombol berfungsi */}
              <button
                type="reset"
                className="bg-transparent border border-[#A44A3F] text-[#A44A3F] font-[family-name:var(--font-poppins)] font-semibold text-[15px] py-[10px] px-[20px] rounded-[6px] hover:bg-[#A44A3F]/5 transition-colors"
              >
                Clear form
              </button>
            </div>
          </form>
        </div>

        {/* Right Column: Quotes Carousel */}
        <div className="flex-1 w-full flex-col justify-center pt-8 md:pt-12 overflow-hidden hidden md:flex">
          <div className="relative w-full overflow-hidden"> {/* Tambah overflow-hidden di sini */}

            {/* Scrollable Container */}
            <div
              ref={quoteScrollContainerRef}
              onScroll={handleQuoteScroll}
              className="flex overflow-x-auto snap-x snap-mandatory w-full"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {quotesData.map((quote) => (
                <div
                  key={quote.id}
                  className="w-full flex-shrink-0 snap-center" // Ganti min-w-full → w-full, hapus pr-4
                  style={{ minWidth: '100%' }} // Pastikan lebar eksplisit
                >
                  {/* Tambah min-height agar layout tidak bergeser */}
                  <div className="min-h-[180px] md:min-h-[200px] flex items-start">
                    <p className="font-[family-name:var(--font-poppins)] text-[22px] md:text-[28px] text-[#22333B] leading-[1.6]">
                      &ldquo;{quote.text}&rdquo;
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Quote indicator (Pills) */}
            <div className="flex gap-3 mb-6 items-center">
              {quotesData.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => scrollToQuote(idx)}
                  aria-label={`Go to quote ${idx + 1}`}
                  className={`h-[3px] w-4 rounded-full transition-all duration-300 ${activeQuoteIndex === idx ? 'bg-[#AA7D55]' : 'bg-[#D1D5Dc] hover:bg-[#AA7D55]/60'
                    }`}
                />
              ))}
            </div>

            <p className="font-[family-name:var(--font-cormorant)] text-2xl text-[#0F2A44]">
              {/* PERBAIKAN 4: Tambahkan Optional Chaining (?.) sebagai pengaman ganda */}
              {quotesData[activeQuoteIndex]?.author}
            </p>
          </div>
        </div>

      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}} />
    </section>
  );
}
