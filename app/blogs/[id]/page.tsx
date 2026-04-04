'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Footer from '@/components/Footer';

const articlesData = Array(3).fill(null).map((_, i) => ({
  id: i + 1,
  title: "Why Strategic Networks Matter More Than Ever",
  excerpt: "Lorem ipsum dolor sit amet consectetur. Ultricies dolor fringilla tortor ultrices odio dictum. Fames adipiscing id etiam lorem egestas vel cursus.",
  linkText: "Read insights",
  href: `/blogs/${i + 1}`,
}));

export default function ArticleDetailPage() {
  const [isTocOpen, setIsTocOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col font-sans bg-[#F9F7F2] pt-[120px]">
      <main className="flex-grow px-[16px] md:px-[70px] pb-[80px]">
        
        {/* Back Button */}
        <Link 
          href="/blogs" 
          className="flex items-center gap-2 text-[#1A1A1A] hover:text-[#E65100] transition-colors mb-6 text-[14px]"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="m15 18-6-6 6-6"/>
          </svg>
          Back
        </Link>

        {/* Title */}
        <h1 className="font-[family-name:var(--font-cormorant)] text-[40px] md:text-[56px] font-bold text-[#1A1A1A] leading-[1.1] mb-6 max-w-[800px]">
          Why Strategic Networks Matter More Than Ever
        </h1>

        {/* Meta Info */}
        <div className="flex flex-wrap items-center gap-6 mb-12 text-[#1A1A1A] opacity-80 text-[14px]">
          <div className="flex items-center gap-2">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#A64D3F]">
              <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/>
              <path d="m15 5 4 4"/>
            </svg>
            Sari Kusumaningrum
          </div>
          <div className="flex items-center gap-2">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#A64D3F]">
              <rect width="18" height="18" x="3" y="4" rx="2" ry="2"/>
              <line x1="16" x2="16" y1="2" y2="6"/>
              <line x1="8" x2="8" y1="2" y2="6"/>
              <line x1="3" x2="21" y1="10" y2="10"/>
            </svg>
            January 12, 2026
          </div>
        </div>

        {/* Hero Image Placeholder */}
        <div className="w-full aspect-[21/9] bg-[#E5E1D8] mb-12 rounded-sm" />

        {/* Content Section */}
        <div className="max-w-[1200px] mx-auto">
          
          {/* Table of Contents */}
          <div className="mb-12 border border-[#E5E1D8] rounded-sm bg-[#FDFDFD]">
            <button 
              onClick={() => setIsTocOpen(!isTocOpen)}
              className="w-full flex items-center justify-between p-6 text-[24px] font-bold text-[#1A1A1A] font-[family-name:var(--font-cormorant)]"
            >
              Table of contents
              <svg 
                className={`transition-transform duration-300 ${isTocOpen ? 'rotate-180' : ''}`}
                width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
              >
                <path d="m6 9 6 6 6-6"/>
              </svg>
            </button>
            {isTocOpen && (
              <div className="px-6 pb-6 text-[#444444]">
                {/* Content for TOC can go here */}
                <ul className="space-y-2 font-[family-name:var(--font-poppins)] text-[15px]">
                  <li><Link href="#point-1" className="hover:text-[#E65100]">1. Point 1</Link></li>
                  <li><Link href="#point-2" className="hover:text-[#E65100]">2. Point 2</Link></li>
                  <li><Link href="#point-3" className="hover:text-[#E65100]">3. Point 3</Link></li>
                </ul>
              </div>
            )}
          </div>

          {/* Article Text */}
          <div className="font-[family-name:var(--font-poppins)] text-[#444444] text-[16px] md:text-[18px] leading-[1.8] space-y-8">
            <p>
              Lorem ipsum dolor sit amet consectetur. Eget consequat neque dis a at sagittis tellus fermentum non. Vitae id cursus vestibulum urna metus sodales. Curabitur in risus quis sagittis scelerisque. Id posuere eleifend diam tortor nec vulputate nullam. Massa ut massa hendrerit mauris tristique in. Laoreet massa placerat tellus blandit. Cras ut non lectus risus. Lorem ipsum dolor sit amet consectetur. Eget consequat neque dis a at sagittis tellus fermentum non. Vitae id cursus vestibulum urna metus sodales. Curabitur in risus quis sagittis scelerisque. Id posuere eleifend diam tortor nec vulputate nullam. Massa ut massa hendrerit mauris tristique in. Laoreet massa placerat tellus blandit. Cras ut non lectus risus.
            </p>

            <div id="point-1" className="space-y-4">
              <h2 className="text-[24px] font-bold text-[#1A1A1A] font-[family-name:var(--font-cormorant)]">1. Point</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur. Eget consequat neque dis a at sagittis tellus fermentum non. Vitae id cursus vestibulum urna metus sodales. Curabitur in risus quis sagittis scelerisque. Id posuere eleifend diam tortor nec vulputate nullam.
              </p>
            </div>

            <div id="point-2" className="space-y-4">
              <h2 className="text-[24px] font-bold text-[#1A1A1A] font-[family-name:var(--font-cormorant)]">2. Point</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur. Eget consequat neque dis a at sagittis tellus fermentum non. Vitae id cursus vestibulum urna metus sodales. Curabitur in risus quis sagittis scelerisque. Id posuere eleifend diam tortor nec vulputate nullam. Massa ut massa hendrerit mauris tristique in. Laoreet massa placerat tellus blandit. Cras ut non lectus risus. Lorem ipsum dolor.
              </p>
            </div>

            <div id="point-3" className="space-y-4">
              <h2 className="text-[24px] font-bold text-[#1A1A1A] font-[family-name:var(--font-cormorant)]">3. Point</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur. Eget consequat neque dis a at sagittis tellus fermentum non. Vitae id cursus vestibulum urna metus sodales. Curabitur in risus quis sagittis scelerisque. Id posuere eleifend diam tortor nec vulputate nullam. Massa ut massa hendrerit mauris tristique in. Laoreet massa placerat tellus blandit. Cras ut non lectus risus. Lorem ipsum dolor sit amet consectetur. Eget consequat neque dis a at sagittis tellus fermentum non. Vitae id cursus vestibulum urna metus sodales.
              </p>
            </div>

            <p>
              Lorem ipsum dolor sit amet consectetur. Eget consequat neque dis a at sagittis tellus fermentum non. Vitae id cursus vestibulum urna metus sodales. Curabitur in risus quis sagittis scelerisque. Id posuere eleifend diam tortor nec vulputate nullam. Massa ut massa hendrerit mauris tristique in. Laoreet massa placerat tellus blandit. Cras ut non lectus risus.
            </p>
          </div>

          {/* Popular Articles Section */}
          <section className="mt-24">
            <h2 className="font-[family-name:var(--font-cormorant)] text-[32px] md:text-[40px] font-bold text-[#1A1A1A] mb-8">
              Popular Articles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {articlesData.map((article) => (
                <article
                  key={article.id}
                  className="bg-[#FDFDFD] group relative pt-10 pr-8 pb-10 pl-8 flex flex-col h-full shadow-sm"
                >
                  <div className="absolute top-0 left-0 right-0 h-[4px] bg-[#A64D3F]" />
                  <h3 className="font-[family-name:var(--font-cormorant)] text-[22px] md:text-[24px] font-bold text-[#1A1A1A] mb-6 leading-[1.2]">
                    {article.title}
                  </h3>
                  <p className="font-[family-name:var(--font-poppins)] text-[#444444] text-[15px] leading-[1.65] mb-8 flex-grow">
                    {article.excerpt}
                  </p>
                  <Link
                    href={article.href}
                    className="font-[family-name:var(--font-poppins)] text-[15px] font-medium transition-colors flex items-center gap-2 mt-auto w-fit text-[#1A1A1A] group-hover:text-[#E65100]"
                  >
                    {article.linkText}
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
                  </Link>
                </article>
              ))}
            </div>
          </section>

        </div>
      </main>
      <Footer />
    </div>
  );
}
