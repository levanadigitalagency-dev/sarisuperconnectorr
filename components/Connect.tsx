'use client';

import React from 'react';

// Data untuk Quotes
const quotesData = [
  {
    id: 0,
    text: "Success isn't about making one big move, but about showing up consistently, learning from mistakes, and improving a little every day.",
    author: "Sari Kusumaningrum"
  }
];

export default function Connect() {
  return (
    <section id='connect' className="bg-[#F5EFE6] py-[40px] px-[16px] md:px-[70px]">
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
              <button
                type="reset"
                className="bg-transparent border border-[#A44A3F] text-[#A44A3F] font-[family-name:var(--font-poppins)] font-semibold text-[15px] py-[10px] px-[20px] rounded-[6px] hover:bg-[#A44A3F]/5 transition-colors"
              >
                Clear form
              </button>
            </div>
          </form>
        </div>

        {/* Right Column: Static Quote & Dummy Pills */}
        <div className="flex-1 w-full flex-col justify-center pt-8 md:pt-12 overflow-hidden hidden md:flex">
          <div className="relative w-full overflow-hidden">

            {/* Static Quote Container */}
            <div className="w-full">
              <div className="min-h-[180px] md:min-h-[200px] flex items-start">
                <p className="font-[family-name:var(--font-poppins)] text-[22px] md:text-[28px] text-[#22333B] leading-[1.6]">
                  &ldquo;{quotesData[0].text}&rdquo;
                </p>
              </div>
            </div>

            {/* Static Indicator (Pills) */}
            <div className="flex gap-3 mb-6 items-center">
              {[...Array(5)].map((_, idx) => (
                <div
                  key={idx}
                  className={`h-[3px] w-4 rounded-full transition-all duration-300 ${idx === 0 ? 'bg-[#AA7D55]' : 'bg-[#D1D5DC]'
                    }`}
                />
              ))}
            </div>

            <p className="font-[family-name:var(--font-cormorant)] text-2xl text-[#0F2A44]">
              {quotesData[0].author}
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
