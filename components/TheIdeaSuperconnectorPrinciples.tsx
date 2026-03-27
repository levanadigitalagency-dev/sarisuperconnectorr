"use client";

import React, { useRef, useState, useEffect } from "react";

interface Principle {
  number: string;
  title: string;
  description: string;
}

interface InfluencePillar {
  title: string;
  description: string;
}

interface TheIdeaSuperconnectorPrinciplesProps {
  headerLabel?: string;
  headerTitle?: string;
  headerDescription?: string;
  principles?: Principle[];
  carouselTitle?: string;
  pillars?: InfluencePillar[];
  footerText?: string;
}

const defaultPrinciples: Principle[] = [
  {
    number: "01",
    title: "Aligned Relationships",
    description:
      "Meaningful connections built on shared values and mutual understanding create stronger, more sustainable outcomes.",
  },
  {
    number: "02",
    title: "Trusted Network",
    description:
      "Trust within a network builds credibility, opening access to opportunities, partnerships, and influence.",
  },
  {
    number: "03",
    title: "Shared Vision",
    description:
      "A common direction aligns efforts, accelerates collaboration, and drives long-term impact.",
  },
];

const defaultPillars: InfluencePillar[] = [
  {
    title: "Credibility",
    description:
      "Earned through consistent actions, expertise, and the ability to deliver real value over time.",
  },
  {
    title: "Trust",
    description:
      "Built through reliability and integrity, forming the foundation of lasting relationships and influence.",
  },
  {
    title: "Right Connections",
    description:
      "The ability to connect the right people, ideas, and institutions to create meaningful opportunities.",
  },
  {
    title: "Long-Term Impact",
    description:
      "Sustained influence grows when trust, relevance, and strategic collaboration are maintained over time.",
  },
];

const TheIdeaSuperconnectorPrinciples = ({
  headerLabel = "The Idea",
  headerTitle = "The Superconnector Principles",
  headerDescription = "Opportunities rarely emerge from isolated effort. They are created through aligned relationships, trusted networks, and a shared vision.",
  principles = defaultPrinciples,
  carouselTitle = "True influence is not built through visibility alone, but through credibility and trust developed over time.",
  pillars = defaultPillars,
  footerText = "This is the work of a Superconnector—bringing the right people, ideas, and opportunities together at the right time.",
}: TheIdeaSuperconnectorPrinciplesProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      const progress = scrollWidth > clientWidth ? (scrollLeft / (scrollWidth - clientWidth)) * 100 : 0;
      setScrollProgress(progress);
    }
  };

  const onMouseDown = (e: React.MouseEvent) => {
    if (!scrollRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const onMouseUp = () => {
    setIsDragging(false);
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Scroll speed
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (el) {
      el.addEventListener("scroll", handleScroll);
      return () => el.removeEventListener("scroll", handleScroll);
    }
  }, []);

  return (
    <section className="w-full bg-[#f3eee7] text-[#333333]">
      {/* Upper Section */}
      <div className="w-full max-w-[1440px] mx-auto px-6 md:px-12 lg:px-[72px] pt-16 md:pt-24 pb-12">
        <header className="mb-10 md:mb-12">
          <p className="text-[16px] md:text-[20px] mb-3 text-[#333333]" style={{ fontFamily: "'Poppins', sans-serif" }}>
            {headerLabel}
          </p>
          <h2 
            className="text-[#b07b4d] text-[32px] md:text-[56px] lg:text-[64px] leading-[1.1] mb-5" 
            style={{ fontFamily: "'Cormorant', serif" }}
          >
            {headerTitle}
          </h2>
          <p className="text-[15px] md:text-[18px] leading-[1.6] max-w-[900px] text-[#333333]" style={{ fontFamily: "'Poppins', sans-serif" }}>
            {headerDescription}
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
          {principles.map((principle) => (
            <div key={principle.title} className="bg-[#f0e4d7] p-5 md:p-6 lg:p-7 rounded-sm">
              <span className="block text-[28px] md:text-[32px] font-bold mb-4 text-[#2f2d2d]" style={{ fontFamily: "'Courier Prime', monospace" }}>
                {principle.number}
              </span>
              <h3 className="text-[16px] md:text-[17px] font-bold mb-3 text-[#2f2d2d]" style={{ fontFamily: "'Courier Prime', monospace" }}>
                {principle.title}
              </h3>
              <p className="text-[14px] md:text-[15px] leading-[1.6] text-[#5a5a5a]" style={{ fontFamily: "'Poppins', sans-serif" }}>
                {principle.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full h-[1px] bg-[#e0d5c5] max-w-[1440px] mx-auto" />

      {/* Lower Section with Carousel */}
      <div className="w-full max-w-[1440px] mx-auto px-6 md:px-12 lg:px-[72px] py-16 md:py-20">
        <p className="text-[16px] md:text-[18px] leading-[1.6] mb-10 text-[#333333]" style={{ fontFamily: "'Poppins', sans-serif" }}>
          {carouselTitle}
        </p>

        <div 
          ref={scrollRef}
          onMouseDown={onMouseDown}
          onMouseUp={onMouseUp}
          onMouseLeave={onMouseUp}
          onMouseMove={onMouseMove}
          className="flex overflow-x-auto gap-3 md:gap-4 no-scrollbar snap-x snap-mandatory cursor-grab active:cursor-grabbing pb-8 scroll-smooth select-none"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {pillars.map((pillar) => (
            <div 
              key={pillar.title} 
              className="min-w-[80%] md:min-w-[40%] lg:min-w-[30%] snap-start bg-[#f0e4d7] p-4 md:p-5 rounded-sm flex flex-col"
            >
              <div className="text-[#b07b4d] mb-3">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  <path d="m9 12 2 2 4-4" />
                </svg>
              </div>
              <h3 className="text-[17px] md:text-[19px] font-bold mb-2 text-[#2f2d2d]" style={{ fontFamily: "'Courier Prime', monospace" }}>
                {pillar.title}
              </h3>
              <p className="text-[14px] md:text-[15px] leading-[1.6] text-[#5a5a5a]" style={{ fontFamily: "'Poppins', sans-serif" }}>
                {pillar.description}
              </p>
            </div>
          ))}
        </div>

        {/* Carousel indicator */}
        <div className="flex gap-2 mb-10 relative">
          <div className="w-10 h-[2px] bg-[#e0d5c5]" />
          <div className="w-10 h-[2px] bg-[#e0d5c5]" />
          <div 
            className="absolute left-0 top-0 h-[2px] bg-[#b07b4d] transition-all duration-300 ease-out"
            style={{ 
              width: '2.5rem', 
              transform: `translateX(${(scrollProgress / 100) * 3}rem)` 
            }}
          />
        </div>

        <p className="text-[16px] md:text-[18px] leading-[1.6] text-[#333333]" style={{ fontFamily: "'Poppins', sans-serif" }}>
          {footerText}
        </p>
      </div>
    </section>
  );
};

export default TheIdeaSuperconnectorPrinciples;
