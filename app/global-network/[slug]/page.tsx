import React from 'react';
import Head from 'next/head';
import Image from 'next/image';

import Footer from '../../../components/Footer';

// Use standard React component for Next.js App Router Page
export default function GlobalNetworkDetail({ params }: { params: { slug: string } }) {
  // Title capitalized from slug (just for demo purposes)
  const title = params.slug === 'kadin' ? 'KADIN Indonesia' :
    params.slug === 'thesmedia' ? 'thesmedia.id' :
      'Archipelago International';

  return (
    <div className="min-h-screen flex flex-col font-sans bg-[#FFFFFF]">
      <Head>
        <title>{title} - Global Network</title>
      </Head>



      {/* Header Section (Same as list view) */}
      <section className="bg-[#FFFFFF] pt-[60px] pb-[60px] px-[16px] md:px-[70px]">
        <h1 className="font-[family-name:var(--font-cormorant)] text-[40px] md:text-[48px] font-bold text-[#AA7D55] mb-4">
          Global Network
        </h1>
        <p className="font-[family-name:var(--font-poppins)] text-[16px] text-[#333333] max-w-3xl leading-relaxed">
          My work connects leaders, institutions, and communities across industries and regions.<br className="hidden md:block" />
          These roles and platforms reflect the ecosystems where collaboration and opportunity continue to grow.
        </p>
      </section>

      <section className="flex flex-col-reverse md:flex-row flex-grow w-full">

        {/* Left Side: Text Content */}
        <div className="flex-1 bg-[var(--soft-Beige,#F5EFE6)] pt-[60px] pb-[80px] px-[16px] md:pl-[70px] md:pr-[60px] flex flex-col justify-center">
          <div className="max-w-2xl ml-auto md:ml-0 md:mr-auto">
            <h2 className="font-[family-name:var(--font-poppins)] text-[32px] md:text-[40px] font-bold text-[#333333] mb-8 leading-tight">
              {title}
            </h2>

            <div className="flex flex-col gap-6 text-[#555555] font-[family-name:var(--font-poppins)] text-[15px] md:text-[16px] leading-[1.8]">
              <p>
                Lorem ipsum dolor sit amet consectetur. Nunc enim sit a sodales odio amet tempus id egestas.
                Diam risus eget eu in. In orci pretium eget nunc cras odio. Amet nunc vel in pellentesque enim nunc.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur. Nunc enim sit a sodales odio amet tempus id egestas.
                Diam risus eget eu in. In orci pretium eget nunc cras odio. Amet nunc vel in pellentesque
                enim nunc et platea turpis. Habitasse bibendum dictum nascetur viverra convallis tincidunt. Diam enim id.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur. Nunc enim sit a sodales odio amet tempus id egestas.
                Diam risus eget eu in. In orci pretium eget nunc cras odio. Amet nunc vel in pellentesque enim nunc.
              </p>
            </div>
          </div>
        </div>

        {/* Right Side: Header Image */}
        <div className="flex-1 relative min-h-[400px] md:min-h-full">
          <Image
            src="/images/placeholder.png"
            alt={title}
            fill
            className="object-cover"
          />
        </div>

      </section>

      <Footer />
    </div>
  );
}
