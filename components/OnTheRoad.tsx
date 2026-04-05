'use client';

import React, { useState, useRef, useCallback } from 'react';
import Image from 'next/image';

interface OnTheRoadProps {
  images?: string[];
}

const DEFAULT_IMAGES = [
  '/images/placeholder.png',
  '/images/placeholder.png',
  '/images/placeholder.png',
  '/images/placeholder.png',
  '/images/placeholder.png',
];

export default function OnTheRoad({ images = DEFAULT_IMAGES }: OnTheRoadProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const isScrollingProgrammatically = useRef(false);

  const totalImages = images.length;

  const handleScroll = useCallback(() => {
    if (!scrollContainerRef.current || isScrollingProgrammatically.current) return;
    const container = scrollContainerRef.current;
    const { scrollLeft } = container;
    const firstItem = container.children[0] as HTMLElement;
    if (!firstItem) return;

    let index = activeIndex;
    let minDistance = Infinity;
    const items = Array.from(container.children);

    items.forEach((item, i) => {
      const htmlItem = item as HTMLElement;
      // Calculate distance from scroll offset to item's absolute inner offset
      const dist = Math.abs((htmlItem.offsetLeft - firstItem.offsetLeft) - scrollLeft);
      if (dist < minDistance) {
        minDistance = dist;
        index = i;
      }
    });

    if (index !== activeIndex) {
      setActiveIndex(index);
    }
  }, [activeIndex]);

  const scrollToSlide = useCallback((index: number) => {
    if (!scrollContainerRef.current) return;
    const container = scrollContainerRef.current;

    // Bounds check
    const safeIndex = Math.max(0, Math.min(index, totalImages - 1));
    const firstItem = container.children[0] as HTMLElement;
    const targetItem = container.children[safeIndex] as HTMLElement;
    if (!targetItem || !firstItem) return;

    isScrollingProgrammatically.current = true;
    container.scrollTo({
      left: targetItem.offsetLeft - firstItem.offsetLeft,
      behavior: 'smooth'
    });
    setActiveIndex(safeIndex);
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

      <h2 className="text-[#333333] font-semibold font-[family-name:var(--font-poppins)] text-[22px] md:text-4xl mb-6">
        On The Road :
      </h2>

      {/* Static Quotes Text exactly like screenshot */}
      <div className=" text-[16px] md:text-[48px] leading-[1.6]">
        <div className="text-[#FE5001] italic font-semibold font-[family-name:var(--font-cormorant)] mb-4">
          The world has always been one of my greatest teachers.
        </div>
        <div className="text-[#333333] mb-4  leading-[1.3]">
          <div className='text-[16px] md:text-[34px]'>Beyond boardrooms and conferences, travel offers moments of discovery that deepen understanding of</div>
          <div className="text-[#FE5001] italic font-semibold font-[family-name:var(--font-cormorant)]">cultures, people, and perspectives.</div>
        </div>
        <div className="text-[#333333] mb-4 text-[16px] md:text-[34px] leading-[1.5]">
          Here are some of the places and journeys that continue
        </div>
        <div className="text-[#FE5001] font-semibold italic font-[family-name:var(--font-cormorant)]">
          to inspire my work and worldview.
        </div>
      </div>

      {/* Pill Indicator — immediately below the text */}
      <div className="flex gap-3 mt-8 mb-6 items-center justify-start">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => scrollToSlide(idx)}
            aria-label={`Go to slide ${idx + 1}`}
            className="p-2 -m-2 flex items-center justify-center cursor-pointer"
          >
            <span
              className={`block h-[3px] w-4 rounded-full transition-all duration-300 ${activeIndex === idx ? 'bg-[#AA7D55]' : 'bg-[#D1D5DC] hover:bg-[#AA7D55]/60'
                }`}
            />
          </button>
        ))}
      </div>

      {/* Images Carousel — Scrollable controlled by Pills */}
      <div className="relative -mx-[16px] px-[16px] md:mx-0 md:px-0">
        <div
          ref={scrollContainerRef}
          onScroll={handleScroll}
          className="relative flex gap-4 md:gap-6 overflow-x-auto pb-4 snap-x snap-mandatory"
          style={{ scrollbarWidth: 'none' }}
        >
          {images.map((src, idx) => (
            <div key={idx} className="flex-shrink-0 w-[80vw] md:w-[calc((100%-48px)/3)] h-[250px] md:h-[300px] relative rounded-xl overflow-hidden shadow-sm snap-start">
              <Image src={src} alt={`On the road location ${idx + 1}`} fill className="object-cover" />
            </div>
          ))}
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `.hide-scrollbar::-webkit-scrollbar { display: none; }` }} />
    </section>
  );
}
