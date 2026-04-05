import Image from 'next/image';
import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#6C0608] py-[40px] px-[16px] md:px-[70px]">
      <div className="flex flex-col">

        {/* Top 3 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 mb-10">

          {/* Left Column (Logo & Description) */}
          <div className="md:col-span-5 flex flex-col">
            <div className="flex items-center gap-3 mb-3.5">
              <div className="w-[48px] h-[48px] rounded-full bg-blue-500 overflow-hidden flex-shrink-0 relative">
                <Image src="/images/eclipse.png"
                  height={150}
                  width={150}
                  alt=''
                />
              </div>
              <div className="flex flex-col">
                <h3 className="text-[#F5F5F5] font-[family-name:var(--font-poppins)] font-semibold text-[18px]">
                  Sari Kusumaningrum
                </h3>
                <span className="text-[#FE5001] font-bold font-[family-name:var(--font-poppins)] text-lg">
                  Superconnector
                </span>
              </div>
            </div>
            <p className="text-[#F5F5F5] font-[family-name:var(--font-poppins)] text-base leading-relaxed max-w-md">
              Sari Kusumaningrum is a senior communications strategist with over 20 years of experience. She currently leads Corporate Communications & PR at Archipelago International and actively drives global collaboration through KADIN.
            </p>
          </div>

          {/* Middle Column (About Menu) */}
          <div className="md:col-span-4 flex flex-col">
            <h4 className="text-[#F5F5F5] font-[family-name:var(--font-poppins)] font-bold mb-2.5 text-lg">
              About
            </h4>
            <ul className="flex flex-col gap-2.5">
              {[
                { label: 'The idea - The Superconnector principle', href: '/the-idea' },
                { label: 'What I do', href: '/about' },
                { label: 'Global Network', href: '/global-network' },
                { label: 'Quotes', href: '/quotes' }
              ].map((item, index) => (
                <li key={index}>
                  <Link href={item.href} className="group flex items-center text-[#F5F5F5] hover:text-[#FE5001] font-[family-name:var(--font-poppins)] text-base transition-colors duration-300">
                    {/* Arrow dengan animasi group-hover */}
                    <span className="opacity-0 -translate-x-2 w-0 group-hover:w-5 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-[#fe5001]">
                      &rarr;
                    </span>
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column (Other Menu) */}
          <div className="md:col-span-3 flex flex-col ">
            <ul className="flex flex-col gap-2.5">
              {[
                { label: 'The Superconnector Method', href: '/the-superconnector-method' },
                { label: 'Speaking & Advisory', href: '/speaking-advisory' },
                { label: 'On The Road', href: '/about' },
                { label: 'Articles', href: '/blogs' },
                { label: 'Connect', href: '/' }
              ].map((item, index) => (
                <li key={index}>
                  <Link href={item.href} className="group flex items-center text-[#F5F5F5] hover:text-[#FE5001] font-[family-name:var(--font-poppins)] text-base transition-colors duration-300">
                    {/* Arrow dengan animasi group-hover */}
                    <span className="opacity-0 -translate-x-2 w-0 group-hover:w-5 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-[#FE5001]">
                      &rarr;
                    </span>
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom Line */}
        <div className="w-full h-px bg-[#F5F5F5] mb-10" />

        {/* Socials & Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">

          <div className="flex gap-4">
            {/* Instagram Icon */}
            <a href="https://www.instagram.com/sarisuperconnector" target="_blank" rel="noopener noreferrer" className="text-[#F5F5F5] hover:text-[#E8AA73] transition-colors" aria-label="Instagram">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
            {/* LinkedIn Icon */}
            <a href="https://www.linkedin.com/in/sarikusumaningrum" target="_blank" rel="noopener noreferrer" className="text-[#F5F5F5] hover:text-[#E8AA73] transition-colors" aria-label="LinkedIn">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>
          </div>

          <p className="text-[#F5F5F5] font-[family-name:var(--font-poppins)] text-base text-center md:text-right">
            © 2026 Sari Kusumaningrum. All right reserved
          </p>
        </div>

      </div>
    </footer>
  );
}
