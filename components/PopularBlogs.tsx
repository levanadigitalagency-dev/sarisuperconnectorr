import Link from 'next/link';
import React from 'react';

const blogs = [
  {
    id: 1,
    title: "Why Strategic Networks Matter More Than Ever",
    excerpt: "Lorem ipsum dolor sit amet consectetur. Ultricies dolor fringilla tortor ultrices odio dictum. Fames adipiscing id etiam lorem egestas vel cursus.",
    linkText: "Read insights",
    href: "#",
    isActive: false,
  },
  {
    id: 2,
    title: "Why Strategic Networks Matter More Than Ever",
    excerpt: "Lorem ipsum dolor sit amet consectetur. Ultricies dolor fringilla tortor ultrices odio dictum. Fames adipiscing id etiam lorem egestas vel cursus.",
    linkText: "Read insights",
    href: "#",
    isActive: false, // Matches the middle card hover state in design
  },
  {
    id: 3,
    title: "Why Strategic Networks Matter More Than Ever",
    excerpt: "Lorem ipsum dolor sit amet consectetur. Ultricies dolor fringilla tortor ultrices odio dictum. Fames adipiscing id etiam lorem egestas vel cursus.",
    linkText: "Read insights",
    href: "#",
    isActive: false,
  }
];

export default function PopularBlogs() {
  return (
    <section className="bg-[#EDE3D2] py-[40px] px-[16px] md:px-[70px]">
      <h2 className="font-[family-name:var(--font-poppins)] text-[40px] md:text-[44px] font-bold text-[#333333] mb-2.5">
        Articles
      </h2>
      <p className="font-[family-name:var(--font-poppins)] text-[16px] md:text-[24px] text-base text-[#333333] mb-10">
        Insights and reflections on <span className="italic text-[#BC5A3D] font-[family-name:var(--font-cormorant)]">leadership, reputation,</span> and <span className="italic text-[#BC5A3D] font-[family-name:var(--font-cormorant)]">the power</span> of <span className="italic text-[#BC5A3D] font-[family-name:var(--font-cormorant)]">strategic relationship</span> in a connected world.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-7.5">
        {blogs.map((blog) => (
          <article
            key={blog.id}
            className="bg-[#F5F5F5] group relative pt-10 pr-8 pb-10 pl-8 flex flex-col h-full hover:-translate-y-1 transition-transform duration-300"
          >
            {/* Top border inside to exactly match design */}
            <div className="absolute top-0 left-0 right-0 h-[4px] bg-[#9C4D3F]" />

            <h3 className="font-[family-name:var(--font-cormorant)] italic text-[22px] md:text-[26px] font-bold text-[#333333] mb-6 leading-[1.1]">
              {blog.title}
            </h3>
            <p className="font-[family-name:var(--font-poppins)] text-[#666666] text-[15px] leading-[1.7] mb-8 flex-grow">
              {blog.excerpt}
            </p>

            <a
              href={blog.href}
              className={`font-[family-name:var(--font-poppins)] text-[15px] font-medium transition-colors flex items-center gap-2 mt-auto w-fit
                  ${blog.isActive ? 'text-[#BC5A3D]' : 'text-[#333333] group-hover:text-[#BC5A3D]'}`}
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
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </a>
          </article>
        ))}
      </div>

      <Link href="/blogs" className="bg-[#BC5A3D] text-[#F5F5F5] font-[family-name:var(--font-poppins)] font-semibold text-[16px] py-[12px] px-[24px] rounded-[6px] hover:opacity-90 transition-opacity mt-10 inline-flex items-center gap-2">
        Read more articles
        <svg
          width="18"
          height="18"
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
    </section>
  );
}
