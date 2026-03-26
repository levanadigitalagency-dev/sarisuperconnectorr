"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isLightMode = pathname.startsWith("/blog");

  const textColorClass = isLightMode ? "text-[#1d1d1d]" : "text-white";
  
  const linkColorClass = isLightMode ? "text-zinc-600" : "text-zinc-300";
  const hoverColorClass = isLightMode ? "hover:text-[#1d1d1d]" : "hover:text-white";
  const mobileBgClass = isLightMode ? "bg-[#f5f5f5]" : "bg-[#1a1a1a]";

  return (
    <nav className="absolute top-0 left-0 right-0 z-50 px-[16px] py-6 md:py-8 md:px-[80px] bg-transparent">
      <div className="flex flex-row items-center justify-between w-full">
        <div className={`${textColorClass} text-3xl md:text-4xl font-signature`}>
          <Link href="/">Sari Kusumaningrum</Link>
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          className={`md:hidden p-2 ${textColorClass}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            {isMobileMenuOpen ? (
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            ) : (
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            )}
          </svg>
        </button>

        {/* Desktop Menu */}
        <div className={`hidden md:flex items-center gap-x-[30px] md:text-lg font-medium font-inter ${linkColorClass}`}>
          <Link href="/#home" className={`transition-colors ${hoverColorClass}`}>Home</Link>
          <Link href="/#about" className={`transition-colors ${hoverColorClass}`}>About</Link>
          <Link href="/#services" className={`transition-colors ${hoverColorClass}`}>Service</Link>
          <Link href="/#leadership" className={`transition-colors ${hoverColorClass}`}>Leadership roles</Link>
          <Link href="/#advisory" className={`transition-colors ${hoverColorClass}`}>Speaking & advisory</Link>
          <Link href="/blog" className={`transition-colors ${hoverColorClass}`}>Blog</Link>
          <Link href="/theIdeoTheSuperconnectorPeinciples" className={`transition-colors ${hoverColorClass}`}>Method</Link>
          <Link href="/#connect" className={`transition-colors ${hoverColorClass}`}>Connect</Link>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div 
        className={`md:hidden absolute top-full left-0 right-0 ${mobileBgClass} shadow-lg px-[16px] flex flex-col gap-y-4 text-base font-medium font-inter ${linkColorClass} overflow-hidden transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'max-h-[400px] py-4 opacity-100' : 'max-h-0 py-0 opacity-0'}`}
      >
        <Link href="/#home" onClick={() => setIsMobileMenuOpen(false)} className={`transition-colors ${hoverColorClass}`}>Home</Link>
        <Link href="/#about" onClick={() => setIsMobileMenuOpen(false)} className={`transition-colors ${hoverColorClass}`}>About</Link>
        <Link href="/#services" onClick={() => setIsMobileMenuOpen(false)} className={`transition-colors ${hoverColorClass}`}>Service</Link>
        <Link href="/#leadership" onClick={() => setIsMobileMenuOpen(false)} className={`transition-colors ${hoverColorClass}`}>Leadership roles</Link>
        <Link href="/#advisory" onClick={() => setIsMobileMenuOpen(false)} className={`transition-colors ${hoverColorClass}`}>Speaking & advisory</Link>
        <Link href="/blog" onClick={() => setIsMobileMenuOpen(false)} className={`transition-colors ${hoverColorClass}`}>Blog</Link>
        <Link href="/theIdeoTheSuperconnectorPeinciples" onClick={() => setIsMobileMenuOpen(false)} className={`transition-colors ${hoverColorClass}`}>Method</Link>
        <Link href="/#connect" onClick={() => setIsMobileMenuOpen(false)} className={`transition-colors ${hoverColorClass}`}>Connect</Link>
      </div>
    </nav>
  );
}
