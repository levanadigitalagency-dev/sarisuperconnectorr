import React from 'react';

const Hero = () => {
  return (
    <main className="min-h-[100dvh] md:h-screen w-full flex flex-col-reverse md:flex-row">

      {/* Left Content Box */}
      <div className="flex-1 bg-[#A44A3F] px-[16px] md:px-[70px] py-[40px] flex flex-col justify-center">
        <div className="max-w-xl">
          <div className="mb-[25px] mt-[20px] md:mt-0">
            <div className="text-[#F5F5F5] font-[family-name:var(--font-cormorant)] font-bold text-[40px] md:text-[60px] leading-[1.1] md:leading-[74px]">
              Global Strategic
            </div>
            <div className="text-[#F5F5F5] font-[family-name:var(--font-cormorant)] font-bold text-[50px] md:text-[90px] leading-[1.1] md:leading-[74px]">
              Connector
            </div>
          </div>

          <p className="text-[#F5F5F5] font-[family-name:var(--font-poppins)] font-normal text-[15px] md:text-[18px] leading-relaxed md:leading-[27px] mb-[25px]">
            Connecting brands, governments, and global opportunities through strategic communication, diplomacy, and hospitality leadership.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              className="text-[#F5F5F5] bg-[#AA7D55] font-[family-name:var(--font-poppins)] font-semibold text-[16px] leading-[20px] pt-[10px] pb-[10px] pr-[16px] pl-[16px] flex items-center justify-center rounded-[6px] hover:opacity-90 transition-opacity gap-[12px]"
            >
              The Superconnector Method
            </button>
            <button
              className="text-white border border-white font-[family-name:var(--font-poppins)] font-semibold text-[16px] leading-[20px] pt-[10px] pb-[10px] pr-[16px] pl-[16px] flex items-center justify-center rounded-[6px] hover:bg-white hover:text-[#A44A3F] transition-colors gap-[12px]"
            >
              Speaking & Advisory
            </button>
          </div>
        </div>
      </div>

      {/* Right Image Box */}
      {/* Perbaikan: Karena parent sudah h-screen di desktop, flex-1 cukup. Di mobile beri tinggi tetap. */}
      <div className="w-full h-[40vh] md:h-auto md:flex-1 relative bg-[#e8e8e6]">
        <img
          src="/images/sari.png"
          alt="Sari Portrait"
          className="absolute inset-0 w-full h-full object-cover object-top"
        />
      </div>
    </main>
  );
};

export default Hero;
