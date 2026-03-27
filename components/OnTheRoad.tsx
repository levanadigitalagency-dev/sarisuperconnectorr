'use client';

import React, { useState, useRef, useCallback } from 'react';
import Image from 'next/image';

const slidesData = [
  {
    id: 0,
    content: (
      <>
        <div className="text-[#A44A3F] mb-5">
          The world has always been one of my greatest teachers.
        </div>
        <div className="text-[#333333] mb-5">
          Beyond boardrooms and conferences,
        </div>
        <div className="mb-5 text-[#333333]">
          <span className="text-[#A44A3F]">travel</span> offers moments of discovery that deepen understanding of <span className="text-[#A44A3F]">cultures, people, and perspectives.</span>
        </div>
        <div className="text-[#333333]">
          Here are some of the places and journeys that continue{' '}
          <span className="text-[#A44A3F]">to inspire my work and worldview.</span>
        </div>
      </>
    )
  },
  {
    id: 1,
    content: (
      <>
        <div className="text-[#A44A3F] mb-5">
          Another perspective on the journey.
        </div>
        <div className="text-[#333333] mb-5">
          Finding inspiration in unexpected places,
        </div>
        <div className="mb-5 text-[#333333]">
          <span className="text-[#A44A3F]">experience</span> teaches us more than we could ever learn from <span className="text-[#A44A3F]">books alone.</span>
        </div>
        <div className="text-[#333333]">
          These global experiences shape{' '}
          <span className="text-[#A44A3F]">my vision for the future.</span>
        </div>
      </>
    )
  },
  {
    id: 2,
    content: (
      <>
        <div className="text-[#A44A3F] mb-5">
          Building connections across borders.
        </div>
        <div className="text-[#333333] mb-5">
          Every conversation is a new opportunity,
        </div>
        <div className="mb-5 text-[#333333]">
          <span className="text-[#A44A3F]">human connection</span> is the ultimate catalyst for <span className="text-[#A44A3F]">meaningful change.</span>
        </div>
        <div className="text-[#333333]">
          Witness the power of collaboration{' '}
          <span className="text-[#A44A3F]">driving global impact.</span>
        </div>
      </>
    )
  },
  {
    id: 3,
    content: (
      <>
        <div className="text-[#A44A3F] mb-5">
          Continuous learning mindsets.
        </div>
        <div className="text-[#333333] mb-5">
          Through diverse environments,
        </div>
        <div className="mb-5 text-[#333333]">
          <span className="text-[#A44A3F]">adaptability</span> allows us to thrive in <span className="text-[#A44A3F]">any situation.</span>
        </div>
        <div className="text-[#333333]">
          Adapt and grow{' '}
          <span className="text-[#A44A3F]">no matter where you are.</span>
        </div>
      </>
    )
  },
  {
    id: 4,
    content: (
      <>
        <div className="text-[#A44A3F] mb-5">
          A life of exploration.
        </div>
        <div className="text-[#333333] mb-5">
          Pushing boundaries and exploring,
        </div>
        <div className="mb-5 text-[#333333]">
          <span className="text-[#A44A3F]">curiosity</span> is what leads to <span className="text-[#A44A3F]">unmatched innovation.</span>
        </div>
        <div className="text-[#333333]">
          Stay curious and{' '}
          <span className="text-[#A44A3F]">keep exploring the world.</span>
        </div>
      </>
    )
  }
];

const TOTAL = slidesData.length;

export default function OnTheRoad() {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const isScrollingProgrammatically = useRef(false);

  const handleScroll = useCallback(() => {
    if (!scrollContainerRef.current || isScrollingProgrammatically.current) return;
    const { scrollLeft, clientWidth } = scrollContainerRef.current;
    let index = Math.round(scrollLeft / clientWidth);
    index = Math.max(0, Math.min(index, TOTAL - 1));
    if (index !== activeIndex) {
      setActiveIndex(index);
    }
  }, [activeIndex]);

  const scrollToSlide = useCallback((index: number) => {
    if (!scrollContainerRef.current) return;
    const normalized = ((index % TOTAL) + TOTAL) % TOTAL;
    isScrollingProgrammatically.current = true;
    scrollContainerRef.current.scrollTo({
      left: scrollContainerRef.current.clientWidth * normalized,
      behavior: 'smooth'
    });
    setActiveIndex(normalized);
    setTimeout(() => { isScrollingProgrammatically.current = false; }, 600);
  }, []);

  return (
    <section className="bg-[#F5EFE6] py-[40px] px-[16px] md:px-[70px] overflow-hidden">
      {/* Dashed line */}
      <div className="flex gap-3 mb-6">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="h-[2px] w-3 md:w-4 bg-[#D1D5DC] opacity-60" />
        ))}
      </div>

      <h2 className="text-[#333333] font-[family-name:var(--font-poppins)] text-[22px] md:text-4xl mb-6">
        On The Road :
      </h2>

      {/* Swipeable Text */}
      <div className="relative -mx-[16px] md:mx-0">
        <div
          ref={scrollContainerRef}
          onScroll={handleScroll}
          className="flex overflow-x-auto snap-x snap-mandatory w-full"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {slidesData.map((slide) => (
            <div
              key={slide.id}
              className="w-full flex-shrink-0 snap-center px-[16px] md:px-0 font-[family-name:var(--font-poppins)] text-[16px] md:text-[28px] leading-[1.4] md:leading-[1.6]"
              style={{ minWidth: '100%' }}
            >
              {slide.content}
            </div>
          ))}
        </div>
      </div>

      {/* Pill Indicator — infinite loop, same style as Connect */}
      <div className="flex gap-3 my-6 items-center">
        {slidesData.map((_, idx) => (
          <button
            key={idx}
            onClick={() => scrollToSlide(idx)}
            aria-label={`Go to slide ${idx + 1}`}
            className="p-2 -m-2 flex items-center justify-center"
          >
            <span
              className={`block h-[3px] rounded-full transition-all duration-300 ${
                activeIndex === idx ? 'w-6 bg-[#AA7D55]' : 'w-4 bg-[#D1D5DC] hover:bg-[#AA7D55]/60'
              }`}
            />
          </button>
        ))}
      </div>

      {/* Images — horizontal scroll on mobile, side-by-side on desktop */}
      <div className="mt-4">
        <div className="flex md:hidden gap-4 overflow-x-auto pb-4 snap-x snap-mandatory -mx-[16px] px-[16px]" style={{ scrollbarWidth: 'none' }}>
          {[1, 2, 3].map((item) => (
            <div key={item} className="flex-shrink-0 w-[72vw] h-[200px] relative rounded-xl overflow-hidden shadow-sm snap-start">
              <Image src="/images/placeholder.png" alt={`On the road location ${item}`} fill className="object-cover" />
            </div>
          ))}
        </div>
        <div className="hidden md:flex w-full gap-6 pb-8">
          {[1, 2, 3].map((item) => (
            <div key={item} className="flex-1 h-[300px] relative rounded-xl overflow-hidden shadow-sm">
              <Image src="/images/placeholder.png" alt={`On the road location ${item}`} fill className="object-cover" />
            </div>
          ))}
        </div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `.hide-scrollbar::-webkit-scrollbar { display: none; }`}} />
    </section>
  );
}
