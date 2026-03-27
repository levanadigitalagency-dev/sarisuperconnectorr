import React from 'react';
import Head from 'next/head';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const blogsData = Array(9).fill(null).map((_, i) => ({
  id: i + 1,
  title: "Why Strategic Networks Matter More Than Ever",
  excerpt: "Lorem ipsum dolor sit amet consectetur. Ultricies dolor fringilla tortor ultrices odio dictum. Fames adipiscing id etiam lorem egestas vel cursus.",
  linkText: "Read insights",
  href: "#",
  isActive: false, // only the first one is active as shown in the image
}));

export default function BlogsPage() {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-[#EDE3D2]">
      <Head>
        <title>Popular blogs</title>
      </Head>

      <Navbar />

      <main className="flex-grow pt-[40px] pb-[80px] px-[16px] md:px-[70px]">
        <h1 className="font-[family-name:var(--font-cormorant)] text-[40px] md:text-[44px] font-bold text-[#333333] mb-2.5">
          Popular blogs
        </h1>
        <p className="font-[family-name:var(--font-poppins)] text-base text-[#333333] mb-10">
          Insights and reflections on leadership, reputation, and the power of strategic relationship in a connected world.
        </p>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7.5">
          {blogsData.map((blog) => (
            <article
              key={blog.id}
              className="bg-[#F5F5F5] group relative pt-10 pr-8 pb-10 pl-8 flex flex-col h-full hover:-translate-y-1 transition-transform duration-300"
            >
              {/* Top border inside to exactly match design - Mutted Terracotta #A44A3F */}
              <div className="absolute top-0 left-0 right-0 h-[4px] bg-[#A44A3F]" />

              <h3 className="font-[family-name:var(--font-cormorant)] text-[22px] md:text-[24px] font-semibold text-[#333333] mb-6 leading-[1.3]">
                {blog.title}
              </h3>
              <p className="font-[family-name:var(--font-poppins)] text-[#666666] text-[15px] leading-[1.7] mb-8 flex-grow">
                {blog.excerpt}
              </p>

              <a
                href={blog.href}
                className={`font-[family-name:var(--font-poppins)] text-[15px] font-medium transition-colors flex items-center gap-2 mt-auto w-fit
                      ${blog.isActive ? 'text-[#E8AA73]' : 'text-[#333333] group-hover:text-[#E8AA73]'}`}
              >
                {blog.linkText}
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className={blog.isActive ? 'text-[#E8AA73]' : ''}
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </a>
            </article>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center items-center mt-12 gap-4 font-[family-name:var(--font-poppins)] text-[14px]">
          <button className="text-[#333333] hover:text-[#A44A3F] transition-colors flex items-center justify-center">
            {/* Chevron Left */}
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>
          <button className="text-[#333333] hover:text-[#A44A3F] transition-colors">1</button>
          <button className="bg-[#A44A3F] text-white w-8 h-8 flex items-center justify-center rounded-sm">2</button>
          <button className="text-[#333333] hover:text-[#A44A3F] transition-colors">3</button>
          <span className="text-[#333333]">...</span>
          <button className="text-[#333333] hover:text-[#A44A3F] transition-colors">15</button>
          <button className="text-[#333333] hover:text-[#A44A3F] transition-colors flex items-center justify-center">
            {/* Chevron Right */}
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        </div>

      </main>

      <Footer />
    </div>
  );
}
