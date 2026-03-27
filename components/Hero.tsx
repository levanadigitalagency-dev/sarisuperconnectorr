"use client";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen w-full flex-col md:flex-row bg-[#1a1a1a] overflow-hidden"
    >
      {/* Left Column: Image */}
      <div className="relative w-full md:w-[40%] h-[60vh] md:h-screen min-h-[400px] order-1 md:order-1">
        <Image
          src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
          alt="Portrait of Sari Kusumaningrum"
          fill
          className="object-cover object-top"
          unoptimized
        />
        {/* Gradient overlays to blend image with background */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-[#1a1a1a]/20 to-transparent md:hidden"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#1a1a1a]/40 to-[#1a1a1a] hidden md:block"></div>
      </div>

      {/* Right Column: Content */}
      <div className="flex space-y-8 md:space-y-10 w-full md:w-[60%] flex-col items-center justify-center px-[20px] py-12 md:px-[60px] lg:px-[80px] text-center order-2 md:order-2 z-10 bg-[#1a1a1a] md:bg-transparent">

        <div>
          <h1 className="text-[36px] md:text-[48px] lg:text-[60px] font-bold text-white leading-[1.1] mb-4 tracking-tight">
            Global Strategic Connector
          </h1>

          <p className="max-w-[580px] mx-auto text-[#cccccc] text-[16px] md:text-[18px] leading-relaxed">
            Connecting brands, governments, and global opportunities through strategic communication, diplomacy, and hospitality leadership.
          </p>
        </div>

        <div className="text-[32px] md:text-[52px] text-white font-signature">
          Sari Kusumaningrum
        </div>

        {/* Call to Action Buttons */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-3 md:gap-6 w-full max-w-[800px]">
          <button
            onClick={() => document.getElementById('advisory')?.scrollIntoView({ behavior: 'smooth' })}
            className="w-full md:w-auto px-[24px] py-[14px] bg-white text-[#1a1a1a] font-inter font-semibold text-base md:text-lg hover:bg-zinc-200 transition-colors whitespace-nowrap"
          >
            Strategic Advisory
          </button>

          <button
            onClick={() => document.getElementById('advisory')?.scrollIntoView({ behavior: 'smooth' })}
            className="w-full md:w-auto px-[24px] py-[14px] bg-white text-[#1a1a1a] font-inter font-semibold text-base md:text-lg hover:bg-zinc-200 transition-colors whitespace-nowrap"
          >
            Speaking Engagements
          </button>

          <button
            onClick={() => document.getElementById('connect')?.scrollIntoView({ behavior: 'smooth' })}
            className="w-full md:w-auto px-[24px] py-[14px] bg-white text-[#1a1a1a] font-inter font-semibold text-base md:text-lg hover:bg-zinc-200 transition-colors whitespace-nowrap"
          >
            Connect
          </button>
        </div>
      </div>
    </section>
  );
}
