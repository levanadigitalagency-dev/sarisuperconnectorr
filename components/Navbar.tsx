'use client';

import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

const aboutMenuItems = [
  {
    title: 'About',
    desc: 'Lorem ipsum dolor sit amet consectetur. Suspendisse magna vulputate proin varius lectus nec.',
    href: '/about'
  },
  {
    title: 'Global Network',
    desc: 'Lorem ipsum dolor sit amet consectetur. Suspendisse magna vulputate proin varius lectus nec.',
    href: '/global-network'
  },
  {
    title: 'Quotes',
    desc: 'Lorem ipsum dolor sit amet consectetur. Suspendisse magna vulputate proin varius lectus nec.',
    href: '/quotes'
  },
];

const mainMenuItems = [
  { label: 'The Superconnector Method', href: '/the-superconnector-method' },
  { label: 'Speaking & Advisory', href: '/speaking-advisory' },
  { label: 'Articles', href: '/blogs' },
  { label: 'Connect', href: '/#connect' },
];

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileAboutOpen, setIsMobileAboutOpen] = useState(false);

  return (
    <nav className="relative flex justify-between items-center px-[16px] md:px-[70px] py-5 bg-[#f8f9fa] border-b border-gray-200 z-50">

      {/* Logo Section */}
      <Link href="/" className="flex items-center gap-3">
        <div className="w-8 h-8 rounded-full bg-blue-500 overflow-hidden flex-shrink-0">
          <Image
            src="/images/eclipse.png"
            width={150}
            height={150}
            alt="Logo"
            className="w-full h-full object-cover"
          />
        </div>
        <span className="font-[family-name:var(--font-poppins)] text-black text-[18px] leading-[23px] font-semibold">
          Sari Superconnector
        </span>
      </Link>

      {/* Desktop Menu */}
      <div
        className="hidden lg:flex items-center font-[family-name:var(--font-poppins)] font-normal text-[16px] leading-[20px]"
        style={{ gap: '30px' }}
      >
        <div className="relative group py-4">
          <button className="text-black flex items-center gap-2 hover:opacity-80 transition-opacity">
            About
            <svg strokeWidth={2} className="w-3 h-3 text-black transition-transform duration-300 group-hover:rotate-180" fill="currentColor" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {/* Mega Menu Dropdown */}
          <div className="absolute top-full left-[50%] -translate-x-[30%] mt-2 w-[1000px] bg-[#F8F9FA] rounded-[16px] shadow-lg p-6 grid grid-cols-2 gap-x-6 gap-y-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
            {aboutMenuItems.map((item, idx) => (
              <Link
                key={idx}
                href={item.href}
                className="group/item p-4 rounded-[12px] hover:bg-[#EAEFF5] transition-colors flex flex-col items-start text-left"
              >
                <h3 className="font-[family-name:var(--font-poppins)] text-[17px] text-black group-hover/item:text-[#EF4444] mb-1.5 font-semibold transition-colors">
                  {item.title}
                </h3>
                <p className="font-[family-name:var(--font-poppins)] text-[13px] text-black leading-relaxed transition-colors">
                  {item.desc}
                </p>
              </Link>
            ))}
          </div>
        </div>

        {mainMenuItems.map((item) => {
          const isConnect = item.label === 'Connect';
          return (
            <Link
              key={item.label}
              href={item.href}
              className={`text-base text-black hover:opacity-80 transition-opacity ${isConnect ? "font-[family-name:var(--font-poppins)] font-medium text-black" : ""}`}
            >
              {item.label}
            </Link>
          );
        })}
      </div>

      {/* Mobile Menu Button (Hamburger) */}
      <div className="lg:hidden">
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="text-black p-2"
        >
          {isMobileMenuOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`lg:hidden absolute top-full left-0 w-full bg-[#f8f9fa] shadow-lg transition-all duration-300 overflow-y-auto ${isMobileMenuOpen ? 'max-h-[85vh] opacity-100 border-b border-gray-200' : 'max-h-0 opacity-0'
          }`}
      >
        <div className="flex flex-col px-[16px] py-4 gap-4 font-[family-name:var(--font-poppins)] pb-8">

          {/* Mobile About Accordion */}
          <div className="flex flex-col border-b border-gray-200 pb-4">
            <button
              onClick={() => setIsMobileAboutOpen(!isMobileAboutOpen)}
              className="flex justify-between items-center text-black py-2 text-lg font-semibold"
            >
              About
              <svg strokeWidth={2} className={`w-4 h-4 transition-transform duration-300 ${isMobileAboutOpen ? 'rotate-180 text-[#AA7D55]' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div className={`flex flex-col pl-4 mt-2 gap-4 transition-all duration-300 overflow-hidden ${isMobileAboutOpen ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0'}`}>
              {aboutMenuItems.map((item, idx) => (
                <Link key={idx} href={item.href} className="flex flex-col gap-1 py-1" onClick={() => setIsMobileMenuOpen(false)}>
                  <span className="text-base text-black font-semibold">{item.title}</span>
                  <span className="text-[13px] text-black font-[family-name:var(--font-poppins)] leading-relaxed">{item.desc}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Main Mobile Links */}
          <div className="flex flex-col gap-5 pt-2">
            {mainMenuItems.map((item) => {
              const isConnect = item.label === 'Connect';
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`text-lg transition-opacity ${isConnect ? "font-[family-name:var(--font-poppins)] font-medium text-black" : "text-black"}`}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
