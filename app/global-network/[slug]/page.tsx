import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import { networkItems } from '../../../data/networkContent';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const item = networkItems.find((entry) => entry.id === slug);

  return {
    title: item ? `${item.title} - Global Network` : 'Global Network',
  };
}

export default async function GlobalNetworkDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = networkItems.find((i) => i.id === slug);

  if (!item) {
    return <div>Not Found</div>;
  }

  return (
    <div className="min-h-screen flex flex-col bg-white pt-[80px]">
      <Navbar />

      <section className="px-[16px] md:px-[70px] pt-[36px] md:pt-[44px] pb-[24px] md:pb-[30px] bg-white">
        <h1 className="font-[family-name:var(--font-poppins)] text-[36px] md:text-[44px] lg:text-[48px] font-semibold text-[#222222] leading-[1.1] mb-2 md:mb-4">
          Global Network
        </h1>
        <p className="max-w-none font-[family-name:var(--font-poppins)] text-[18px] md:text-[20px] lg:text-[22px] leading-[1.55] text-[#2b2b2b] tracking-[-0.01em] mb-8">
          My work connects <span className="font-semibold">leaders, institutions,</span> and <span className="font-semibold">communities</span> across industries and regions.<br className="hidden lg:block" />
          These roles and platforms <span className="font-semibold text-[#fe5a00] font-[family-name:var(--font-cormorant)] text-[22px] md:text-[28px] lg:text-[28px]">reflect the ecosystems</span> where <span className="font-semibold text-[#fe5a00] font-[family-name:var(--font-cormorant)] text-[22px] md:text-[24px] lg:text-[28px]">collaboration</span> and <span className="font-semibold text-[#fe5a00] font-[family-name:var(--font-cormorant)] text-[22px] md:text-[24px] lg:text-[28px]">opportunity</span><br className="hidden lg:block" />
          continue to <span className="font-semibold text-[#fe5a00] font-[family-name:var(--font-cormorant)] text-[22px] md:text-[24px] lg:text-[28px]">grow.</span>
        </p>
      </section>

      <section className="flex flex-col md:flex-row flex-grow w-full overflow-hidden bg-[#f2ede7] px-[16px] md:px-[70px] pt-[30px] md:pt-[34px] pb-[68px]">
        <div className="md:w-1/2 md:pr-12">
          <Link 
            href="/global-network" 
            className="inline-flex items-center gap-2 text-[#fe5a00] font-[family-name:var(--font-poppins)] font-medium text-[16px] mb-4 md:mb-5 hover:opacity-80 transition-opacity"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Back
          </Link>

          <h2 className="font-[family-name:var(--font-poppins)] text-[28px] md:text-[32px] lg:text-[36px] font-semibold text-[#2a2a2a] leading-[1.1] mb-5 md:mb-6">
            {item.title}
          </h2>

          <div className="flex flex-col gap-5 text-[#444444] font-[family-name:var(--font-poppins)] text-[15px] md:text-[16px] leading-[1.65] font-normal tracking-[0.01em]">
            {item.content.map((p, idx) => (
              <p key={idx}>{p}</p>
            ))}

            {item.isSmedia && item.platforms && (
              <ul className="flex flex-col gap-6 mt-2">
                {item.platforms.map((platform, idx) => (
                  <li key={idx} className="flex flex-col items-start gap-2">
                    <div className="flex items-start gap-2">
                      <span className="text-[15px] leading-none mt-1.5">•</span>
                      <p className="text-[#444444] text-[15px] md:text-[16px] leading-[1.65]">
                        <span className="font-bold text-[#222222]">{platform.name}:</span> {platform.description}
                      </p>
                    </div>
                    <Link 
                      href={platform.url} 
                      target="_blank"
                      className="ml-5 md:ml-[22px] inline-flex items-center bg-[#fe5a00] text-white px-4 py-2 rounded-[6px] font-[family-name:var(--font-poppins)] font-medium text-[14px] leading-none hover:bg-[#df4b00] transition-colors mt-1"
                    >
                      Learn more
                    </Link>
                  </li>
                ))}
              </ul>
            )}

            {item.footer && (
              <p className="mt-2 text-[15px] md:text-[16px] leading-[1.65] text-[#444444]">
                {item.footer}
              </p>
            )}

            {!item.isSmedia && item.learnMoreUrl && (
              <div className="mt-6">
                <Link 
                  href={item.learnMoreUrl} 
                  target="_blank"
                  className="inline-flex items-center bg-[#fe5a00] text-white px-6 py-3 rounded-[6px] font-[family-name:var(--font-poppins)] font-medium text-[15px] leading-none hover:bg-[#df4b00] transition-colors"
                >
                  Learn more
                </Link>
              </div>
            )}
          </div>
        </div>

        <div className="md:w-1/2 flex justify-end items-start mt-10 md:mt-0">
          <div className="relative w-full aspect-[16/10] md:max-w-[557px] rounded-[16px] overflow-hidden">
            <Image
              src={item.detailImage || item.image}
              alt={item.title}
              fill
              unoptimized
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}