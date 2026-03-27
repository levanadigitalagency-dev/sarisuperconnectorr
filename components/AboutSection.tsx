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
  title = 'Who I Am',
  imageSrc,
  imageAlt = 'About image',
  imageWidth = 512,
  imageHeight = 512,
  paragraphs,
}) => {
  return (
    <section id="about" className="w-full font-sans bg-[#f3efe6]">
      {/* 1. TOP SECTION (Quote & Lady) */}
      <div className="w-full max-w-[1440px] mx-auto flex flex-col-reverse md:flex-row items-center justify-between md:h-[618px] relative overflow-hidden bg-[#f3efe6]">
        <div className="w-full md:w-[45%] flex justify-center md:items-end h-[400px] md:h-full relative mt-8 md:mt-0">
            {imageSrc && (
                <Image
                  src={imageSrc}
                  alt={imageAlt}
                  width={imageWidth}
                  height={imageHeight}
                  className="absolute bottom-0 left-[-20px] md:bottom-[-20px] md:left-[0px] h-[100%] w-auto object-contain object-bottom scale-[1.1] md:scale-[1.15] lg:scale-[1.25] origin-bottom-left"
                  priority
                />
            )}
        </div>
        <div className="w-full md:w-[55%] flex flex-col justify-center px-8 md:px-0 lg:pr-24 pt-16 md:pt-0">
            <p className="text-[#3b3631] text-[28px] md:text-[36px] leading-[1.3] md:leading-[46px] w-full max-w-[800px] font-light" style={{ fontFamily: "'Cormorant', serif" }}>
              Access, titles, and visibility don&apos;t define real<br className="hidden md:block" />
              influence or power. True leadership is built<br className="hidden md:block" />
              on trust, positioning, and meaningful<br className="hidden md:block" />
              relationships that create lasting impact.
            </p>
        </div>
      </div>

      {/* 2. MIDDLE SECTION (About Sari) */}
      <div className="w-full bg-[#e8decd]">
        <div className="w-full max-w-[1440px] mx-auto py-20 px-8 md:px-16 lg:px-[100px] text-[#333333]">
            <h2 className="text-[#a57a53] text-[28px] md:text-[32px] lg:text-[36px] mb-8 font-semibold" style={{ fontFamily: "'Cormorant', serif" }}>
              {title}
            </h2>
            <div className="space-y-4 lg:space-y-5 text-[15px] md:text-[16px] leading-[1.6] font-normal text-[#333333]" style={{ fontFamily: "'Poppins', sans-serif" }}>
              {paragraphs.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>
        </div>
      </div>

      {/* 3. BOTTOM SECTION (What I do) */}
      <div className="w-full bg-[#f3efe6]">
        <div className="w-full max-w-[1700px] mx-auto pt-16 pb-20 px-6 md:px-12 lg:px-[60px] text-[#333333]">
            <h2 className="text-[#a57a53] text-[28px] md:text-[32px] lg:text-[36px] mb-2 font-semibold" style={{ fontFamily: "'Cormorant', serif" }}>What I do</h2>
            
            <div className="flex flex-col md:flex-row justify-between items-start mb-10 gap-8">
                <p className="text-[16px] md:text-[18px] w-full md:w-1/2 font-medium leading-relaxed max-w-[500px]">
                    I operate at the intersection of corporate leadership, international diplomacy, and strategic communication.
                </p>
                <p className="text-[14px] md:text-[16px] md:text-right w-full md:w-1/2 text-[#333] font-semibold pt-8">
                    My work Focuses on three Areas :
                </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 text-[#333333]">
                {/* Card 1 */}
                <div className="bg-white px-5 py-4 lg:px-8 lg:py-6 border-t-[3px] border-[#a57a53] flex flex-col shadow-sm">
                    <h3 className="text-[#a57a53] text-[15px] lg:text-[16px] mb-3 leading-[1.4] font-semibold" style={{ fontFamily: "'Cormorant', serif" }}>
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