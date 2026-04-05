import React from 'react';

import Image from 'next/image';
import Link from 'next/link';

const Hero = () => {
  return (
    <main className="min-h-[100dvh] md:h-screen w-full flex flex-col-reverse md:flex-row pt-[80px] md:pt-0">

      {/* Left Content Box */}
      <div className="flex-1 bg-[#6C0608] px-[16px] md:px-[70px] py-[40px] flex flex-col justify-center">
        <div className="max-w-xl">
          <div className="mb-[25px] mt-[20px] md:mt-0">
            <div className="text-[#F5F5F5] font-[family-name:var(--font-poppins)] font-bold text-[40px] md:text-[51px] leading-[1.1] md:leading-[70px]">
              Global Strategic
            </div>
            <div className="text-[#FE5001] font-[family-name:var(--font-cormorant)] font-bold text-[50px] md:text-[100px] leading-[1.1] md:leading-[74px]">
              Connector
            </div>
          </div>

          <p className="text-[#F5F5F5] font-[family-name:var(--font-poppins)] font-normal text-[15px] md:text-[28px] leading-[28px] md:leading-[33px] mb-[25px]">
            Connecting <span className="text-[#FE5001] font-[family-name:var(--font-cormorant)] font-bold text-[20px] md:text-[43px]">brands, governments, and global opportunities</span> through strategic communication, diplomacy, and hospitality leadership. </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/the-superconnector-method">
                <button
                  className="text-[#6C0608] bg-white font-[family-name:var(--font-poppins)] font-semibold text-[16px] leading-[20px] pt-[10px] pb-[10px] pr-[16px] pl-[16px] flex items-center justify-center rounded-[6px] hover:opacity-90 transition-opacity gap-[12px]"
                >
                  The Superconnector Method
                </button>
              </Link>
              <Link href="/speaking-advisory">
                <button
                  className="text-white border border-white font-[family-name:var(--font-poppins)] font-semibold text-[16px] leading-[20px] pt-[10px] pb-[10px] pr-[16px] pl-[16px] flex items-center justify-center rounded-[6px] hover:bg-white hover:text-[#6C0608] transition-colors gap-[12px]"
                >
                  Speaking & Advisory
                </button>
              </Link>
            </div>
        </div>
      </div>

      {/* Right Image Box */}
      {/* Perbaikan: Karena parent sudah h-screen di desktop, flex-1 cukup. Di mobile beri tinggi tetap. */}
      <div className="w-full h-[60vh] md:h-auto md:flex-1 relative bg-[#e8e8e6]">
        <Image
          src="/images/HeroImage.svg"
          alt="Sari Portrait"
          fill
          unoptimized
          className="object-cover object-top"
        />
      </div>
    </main>
  );
};

export default Hero;
