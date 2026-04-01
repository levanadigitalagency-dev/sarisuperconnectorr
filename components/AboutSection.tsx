import React from 'react'
import Image from 'next/image'

interface AboutSectionProps {
  title?: string
  imageSrc?: string
  imageAlt?: string
  imageWidth?: number
  imageHeight?: number
  paragraphs: string[]
}

const AboutSection: React.FC<AboutSectionProps> = ({
  title = 'About Sari',
  imageSrc,
  imageAlt = 'About image',
  imageWidth = 512,
  imageHeight = 512,
  paragraphs,
}) => {
  return (
    <section id="about" className="w-full font-sans bg-[#f3efe6]">
      {/* 1. TOP SECTION (Quote & Lady) */}
      <div className="w-full flex flex-col-reverse md:flex-row items-center justify-between min-h-[680px] bg-[#f3efe6] overflow-visible">

        {/* LEFT TEXT */}
        <div className="w-full md:w-[55%] flex items-center justify-center md:justify-start px-6 md:px-16 lg:px-24 py-16 md:py-0">
          <p
            className="text-[#3b3631] text-[22px] md:text-[34px] lg:text-[42px] leading-[1.4] max-w-[560px] font-light"
            style={{ fontFamily: "'Cormorant', serif" }}
          >
            Access, titles, and visibility don’t define real influence of power.
            <br /><br />
            True <span className="text-[#e0561f] italic">leadership</span> is built on{" "}
            <span className="text-[#e0561f] italic">trust, positioning,</span> and{" "}
            <span className="text-[#e0561f] italic">meaningful relationships</span> that create{" "}
            <span className="text-[#e0561f] italic">lasting impact.</span>
          </p>
        </div>

        {/* RIGHT IMAGE */}
        <div className="w-full md:w-[45%] relative h-[420px] md:h-[680px]">
          {imageSrc && (
            <Image
              src={imageSrc}
              alt={imageAlt}
              width={imageWidth}
              height={imageHeight}
              className="absolute bottom-0 right-0 h-full w-auto object-contain object-bottom translate-y-[45%] md:translate-y-[36%] scale-[1.05] md:scale-[1.1]"
              priority
            />
          )}
        </div>

      </div>

      {/* 2. MIDDLE SECTION (About Sari) */}
      <div className="w-full bg-[#e8decd]">
        <div className="w-full py-20 px-8 md:px-16 lg:px-[70px] text-[#333333]">
          <h2 className="text-black text-[28px] md:text-[32px] lg:text-[36px] mb-8 font-semibold" style={{ fontFamily: "'poppins', sans-serif" }}>
            {title}
          </h2>
          <div className="space-y-4 lg:space-y-5 text-[15px] md:text-[24px] leading-[1.6] font-normal text-[#333333]" style={{ fontFamily: "'Poppins', sans-serif" }}>
            {paragraphs.map((p, idx) => (
              <p key={idx}>{p}</p>
            ))}
          </div>
        </div>
      </div>

      {/* 3. BOTTOM SECTION (What I do) */}
      <div className="w-full bg-[#f3efe6]">
        <div className="w-full pt-16 pb-20 px-6 md:px-12 lg:px-[60px] text-[#333333]">
          <h2 className="text-[28px] md:text-[32px] lg:text-[36px] mb-2 font-semibold" style={{ fontFamily: "'poppins', sans-serif" }}>What I do</h2>

          <div className="flex flex-col justify-between items-start mb-10 gap-8">
            <p className="text-[16px] md:text-[28px] w-full leading-relaxed max-w-[1000px] ">
              I operate at the intersection of corporate leadership, international diplomacy, and strategic communication.
            </p>
            <p className="text-[14px] md:text-[28px] md:text-left w-full md:w-1/3 text-[#333] ">
              My work Focuses on three Areas :
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 text-[#333333]">
            {/* Card 1 */}
            <div className="bg-white px-5 py-4 lg:px-8 lg:py-6 border-t-[3px] border-[#a57a53] flex flex-col shadow-sm">
              <h3 className="text-[#FE5001] text-[32px] lg:text-[28px] mb-3 leading-[1.4] font-semibold" style={{ fontFamily: "'Cormorant', serif" }}>
                Corporate Reputation & Strategic<br />Communications
              </h3>
              <p className="text-[#555] text-[15px] lg:text-[16px] leading-[1.8] font-normal" style={{ fontFamily: "'Poppins', sans-serif" }}>
                Organizations today operate in an environment where reputation moves faster than strategy. I help leaders and institutions build strong reputations, manage crises, and shape strategic communication—because reputation is built with intention, not by chance.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white px-5 py-4 lg:px-8 lg:py-6 border-t-[3px] border-[#a57a53] flex flex-col shadow-sm">
              <h3 className="text-[#a57a53] text-[15px] lg:text-[16px] mb-3 leading-[1.4] font-semibold" style={{ fontFamily: "'Cormorant', serif" }}>
                Cross-Border Strategic Facilitation
              </h3>
              <p className="text-[#555] text-[15px] lg:text-[16px] leading-[1.8] font-normal" style={{ fontFamily: "'Poppins', sans-serif" }}>
                Global opportunities require context, trust, and alignment. I work with leaders and organizations to connect Indonesia and Latin America, enabling partnerships that drive sustainable economic and institutional growth.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white px-5 py-4 lg:px-8 lg:py-6 border-t-[3px] border-[#a57a53] flex flex-col shadow-sm">
              <h3 className="text-[#a57a53] text-[15px] lg:text-[16px] mb-3 leading-[1.4] font-semibold" style={{ fontFamily: "'Cormorant', serif" }}>
                Hospitality Leadership
              </h3>
              <p className="text-[#555] text-[15px] lg:text-[16px] leading-[1.8] font-normal" style={{ fontFamily: "'Poppins', sans-serif" }}>
                Hospitality is more than an industry—it is a platform for culture, diplomacy, and economic growth. As Senior Director of Corporate Communications & PR at Archipelago International, I lead regional communication strategies across Southeast Asia&apos;s largest privately owned hotel management company.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
