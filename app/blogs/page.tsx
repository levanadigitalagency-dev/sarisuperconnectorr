import React from 'react';
import Link from 'next/link';
import Footer from '@/components/Footer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'All Articles - Sari Superconnector',
};

const articlesData = Array(9).fill(null).map((_, i) => ({
  id: i + 1,
  title: "Why Strategic Networks Matter More Than Ever",
  excerpt: "Lorem ipsum dolor sit amet consectetur. Ultricies dolor fringilla tortor ultrices odio dictum. Fames adipiscing id etiam lorem egestas vel cursus.",
  linkText: "Read insights",
  href: `/blogs/${i + 1}`,
  isActive: false, // only the first one is active as shown in the image
}));

export default function ArticlesPage() {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-[#F9F7F2] pt-[80px]">
      <main className="flex-grow pt-[40px] pb-[80px] px-[16px] md:px-[70px]">
        <h1 className="font-[family-name:var(--font-poppins)] text-[40px] md:text-[56px] font-bold text-[#1A1A1A] mb-4">
          All Articles
        </h1>
        <p className="font-[family-name:var(--font-poppins)] text-[20px] md:text-[24px] lg:text-[28px] leading-[1.4] text-[#1A1A1A] mb-12 max-w-[1000px]">
          Insights and reflections on <span className="italic text-[#E65100] font-[family-name:var(--font-cormorant)]">leadership, reputation,</span> and <span className="italic text-[#E65100] font-[family-name:var(--font-cormorant)]">the power</span> of <span className="italic text-[#E65100] font-[family-name:var(--font-cormorant)]">strategic relationship</span> in a connected world.
        </p>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articlesData.map((article) => (
            <article
              key={article.id}
              className="bg-[#FDFDFD] group relative pt-10 pr-8 pb-10 pl-8 flex flex-col h-full shadow-sm"
            >
              {/* Top border inside - Terracotta #A64D3F */}
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
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </Link>
            </article>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center items-center mt-16 gap-4 font-[family-name:var(--font-poppins)] text-[15px]">
          <button className="text-[#1A1A1A] hover:text-[#A64D3F] transition-colors flex items-center justify-center p-2">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>
          <button className="text-[#1A1A1A] hover:text-[#A64D3F] transition-colors w-8 h-8 flex items-center justify-center">1</button>
          <button className="bg-[#A64D3F] text-white w-8 h-8 flex items-center justify-center rounded-sm">2</button>
          <button className="text-[#1A1A1A] hover:text-[#A64D3F] transition-colors w-8 h-8 flex items-center justify-center">3</button>
          <span className="text-[#1A1A1A] px-1">...</span>
          <button className="text-[#1A1A1A] hover:text-[#A64D3F] transition-colors w-8 h-8 flex items-center justify-center">15</button>
          <button className="text-[#1A1A1A] hover:text-[#A64D3F] transition-colors flex items-center justify-center p-2">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        </div>

      </main>

      <Footer />
    </div>
  );
}
