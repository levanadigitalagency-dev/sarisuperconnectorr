import Image from "next/image";
import React from "react";

interface Principle {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface TheSuperconnectorMethodSectionProps {
  title?: React.ReactNode;
  description?: React.ReactNode;
  imageSrc?: string;
  principlesTitle?: string;
  topRowPrinciples?: Principle[];
  bottomRowPrinciples?: Principle[];
  buttonText?: string;
  onButtonClick?: () => void;
  footerQuoteLines?: string[];
}

const defaultTopRow: Principle[] = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
      </svg>
    ),
    title: "Access",
    description:
      "Understanding who needs to be in the room.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-3z" />
        <path fill="#f4f4f4" d="M10 16l-4-4 1.41-1.41L10 13.17l6.59-6.59L18 8z" />
      </svg>
    ),
    title: "Trust",
    description:
      "Building credibility that allows relationships to grow.",
  },
];

const defaultBottomRow: Principle[] = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 11V7H3M17 3l4 4-4 4" />
        <path d="M7 13v4h14M7 21l-4-4 4-4" />
      </svg>
    ),
    title: "Alignment",
    description:
      "Ensuring shared interests and long-term value.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
        <path d="M9 21c0 .5.4 1 1 1h4c.6 0 1-.5 1-1v-1H9v1zm3-19C8.1 2 5 5.1 5 9c0 2.4 1.2 4.5 3 5.7V17c0 .5.4 1 1 1h6c.6 0 1-.5 1-1v-2.3c1.8-1.3 3-3.4 3-5.7 0-3.9-3.1-7-7-7z" />
      </svg>
    ),
    title: "Opportunity",
    description:
      "Identifying and creating value-driven connections.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="9"></circle>
        <path d="M3 12h18"></path>
        <path d="M12 3c2.8 2.6 4 5.7 4 9s-1.2 6.4-4 9c-2.8-2.6-4-5.7-4-9s1.2-6.4 4-9z"></path>
      </svg>
    ),
    title: "Ecosystem",
    description:
      "Creating networks that sustain impact beyond individuals.",
  },
];

const cardClass =
  "w-full bg-white border border-[#e4d9ca] rounded-[10px] px-4 py-5 md:px-5 md:py-5 lg:px-6 lg:py-6 smb-8 hadow-sm";

const TheSuperconnectorMethodSection = ({
  title = (
    <>
      <span style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 600 }} className="text-4xl md:text-6xl text-[#333333]">The </span>
      <span className="text-[44px] md:text-[80px] text-[#FE5001]" style={{ fontFamily: "'Cormorant', serif", fontWeight: 700 }}>Superconnector</span><br />
      <span style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 600 }} className="text-4xl md:text-6xl text-[#333333]">Method™</span>
    </>
  ),
  description = (
    <>
      Sari Kusumaningrum speaks and advises on the intersection of <span className="text-[20px] md:text-[40px] text-[#FE5001]" style={{ fontFamily: "'Cormorant', serif", fontWeight: 700 }}>leadership, reputation,</span> and <span className="text-[20px] md:text-[40px] text-[#FE5001]" style={{ fontFamily: "'Cormorant', serif", fontWeight: 700 }}>global connectivity.</span>
    </>
  ),
  imageSrc = "/white-shirt-woman.png",
  principlesTitle = "The Core Principles",
  topRowPrinciples = defaultTopRow,
  bottomRowPrinciples = defaultBottomRow,
  buttonText = "Learn more",
  onButtonClick,
  footerQuoteLines = [
    "Because the most influential leaders are not those who know the most people.",
    "They are those who know how to connect people with purpose."
  ],
}: TheSuperconnectorMethodSectionProps) => {
  return (
    <section className="w-full overflow-hidden">
      <div className="w-full bg-[#f3eee7]">
        <div className="w-full flex flex-col-reverse md:flex-row px-6 md:px-12 lg:px-[72px] pt-8 md:pt-10 pb-0 min-h-[730px] md:h-[618px] relative overflow-visible">
          <div className="order-2 md:order-1 w-full md:w-[55%] flex flex-col justify-center pb-12 md:py-0 z-10 text-center md:text-left">
            <h2
              className="text-[40px] sm:text-[46px] md:text-[56px] lg:text-[64px] leading-[1.1] mb-2 md:mb-4 pt-4 md:pt-0"
            >
              {title}
            </h2>
            <p
              className="text-[#333333] text-[16px] sm:text-[18px] md:text-[28px] leading-[1.5] max-w-[680px] mx-auto md:mx-0"
              style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 400 }}
            >
              {description}
            </p>
          </div>

          {/* Image pinned to bottom-right of the section */}
          <div className="order-1 md:order-2 w-full md:w-[45%] relative h-[420px] md:h-[815px] md:mb-0">
            {imageSrc && (
              <Image
                src={imageSrc}
                alt="sari"
                width={700}
                height={700}
                className="absolute bottom-0 right-0 h-full w-auto object-contain object-bottom translate-y-[-5%] scale-[1.1] md:scale-[0.8]"
              />
            )}
          </div>
        </div>
      </div>

      <div className="w-full bg-[#EDE3D2] relative z-10">
        <div className="w-full px-6 md:px-12 lg:px-[70px] pt-8 md:pt-10 pb-8 md:pb-10">
          <h3
            className="text-[#333333] text-[40px] md:text-[44px] font-semibold leading-[1.1] mb-6 md:mb-7"
            style={{ fontFamily: "'poppins', serif" }}
          >
            {principlesTitle}
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
            {topRowPrinciples.map((item) => (
              <div key={item.title} className={cardClass}>
                <div className="text-[#2f2d2d] mb-2">{item.icon}</div>
                <h4 className="text-[#FE5001] text-[28px] md:text-[36px] italic leading-none mb-2" style={{ fontFamily: "'Cormorant', sans-serif", fontWeight: 700 }}>
                  {item.title}
                </h4>
                <p className="text-[#5a5a5a] text-[14px] md:text-[16px] leading-[1.55]" style={{ fontFamily: "'Poppins', sans-serif" }}>
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4 mt-3 md:mt-4">
            {bottomRowPrinciples.map((item) => (
              <div key={item.title} className={cardClass}>
                <div className="text-[#2f2d2d] mb-2">{item.icon}</div>
                <h4 className="text-[#FE5001] text-[28px] md:text-[32px]  leading-none mb-2" style={{ fontFamily: "'Cormorant', sans-serif", fontWeight: 700 }}>
                  {item.title}
                </h4>
                <p className="text-[#5a5a5a] text-[14px] md:text-[16px] leading-[1.55]" style={{ fontFamily: "'Poppins', sans-serif" }}>
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          <div className="flex flex-col items-start md:items-center justify-between gap-5 mt-5">

            <p
              className="text-[#FE5001] text-[20px] md:text-[30px] leading-tight md:text-center max-w-prose"
              style={{ fontFamily: "'Cormorant', sans-serif", fontWeight: 500 }}
            >
              {footerQuoteLines.map((line, i) => (
                <React.Fragment key={i}>
                  {line}
                  {i < footerQuoteLines.length - 1 && <br />}
                </React.Fragment>
              ))}
            </p>
            <button
              onClick={onButtonClick}
              className="bg-[#FE5001] text-white px-5 py-2 rounded-[6px] text-[17px] md:text-[20px]"
              style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 600 }}
            >
              {buttonText}
            </button>
          </div>
        </div>
      </div>

      {/* Programs Section */}
      <div className="w-full bg-[#EDE3D2] relative z-10 pb-16 md:pb-24">
        <div className="w-full px-6 md:px-12 lg:px-[70px]">
          <h2 className="text-[#333333] text-[36px] md:text-[44px] font-bold mb-8 md:mb-12" style={{ fontFamily: "'Poppins', sans-serif" }}>
            Programs
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">

            {/* Offline Column */}
            <div>
              <h3 className="text-[#FE5001] text-[28px] md:text-[36px] font-bold mb-6" style={{ fontFamily: "'Poppins', sans-serif" }}>
                Offline
              </h3>
              <div className="space-y-6 md:space-y-8">
                <div>
                  <div className="w-full h-[250px] md:h-[400px] relative rounded-[12px] overflow-hidden mb-3 md:mb-4">
                    <Image src="/images/program-1.jpg" alt="Sumatera Flood Emergency Relief Fund" fill className="object-cover" />
                  </div>
                  <h4 className="text-[#333333] text-[18px] md:text-[22px] font-semibold leading-snug" style={{ fontFamily: "'Poppins', sans-serif" }}>
                    Sumatera Flood Emergency Relief Fund
                  </h4>
                </div>
                <div>
                  <div className="w-full h-[250px] md:h-[400px] relative rounded-[12px] overflow-hidden mb-3 md:mb-4">
                    <Image src="/images/program-3.png" alt="National Day of the Republic of Cyprus" fill className="object-cover" />
                  </div>
                  <h4 className="text-[#333333] text-[18px] md:text-[22px] font-semibold leading-snug" style={{ fontFamily: "'Poppins', sans-serif" }}>
                    National Day of the Republic of Cyprus
                  </h4>
                </div>
                <div>
                  <div className="w-full h-[250px] md:h-[400px] relative rounded-[12px] overflow-hidden mb-3 md:mb-4">
                    <Image src="/images/program-5.png" alt="KADIN Iftar Gathering" fill className="object-cover" />
                  </div>
                  <h4 className="text-[#333333] text-[18px] md:text-[22px] font-semibold leading-snug" style={{ fontFamily: "'Poppins', sans-serif" }}>
                    KADIN Iftar Gathering
                  </h4>
                </div>
              </div>
            </div>

            {/* Online Column */}
            <div>
              <h3 className="text-[#FE5001] text-[28px] md:text-[36px] font-bold mb-6" style={{ fontFamily: "'Poppins', sans-serif" }}>
                Online
              </h3>
              <div className="space-y-6 md:space-y-8">
                <div>
                  <div className="w-full h-[250px] md:h-[400px] relative rounded-[12px] overflow-hidden mb-3 md:mb-4">
                    <Image src="/images/program-2.png" alt="Online Business Meeting with the Indonesian Ambassador to Peru" fill className="object-cover" />
                  </div>
                  <h4 className="text-[#333333] text-[18px] md:text-[22px] font-semibold leading-snug" style={{ fontFamily: "'Poppins', sans-serif" }}>
                    Online Business Meeting with the Indonesian Ambassador to Peru
                  </h4>
                </div>
                <div>
                  <div className="w-full h-[250px] md:h-[400px] relative rounded-[12px] overflow-hidden mb-3 md:mb-4">
                    <Image src="/images/program-4.png" alt="Cyber Security Hybrid Workshop" fill className="object-cover" />
                  </div>
                  <h4 className="text-[#333333] text-[18px] md:text-[22px] font-semibold leading-snug" style={{ fontFamily: "'Poppins', sans-serif" }}>
                    Cyber Security Hybrid Workshop
                  </h4>
                </div>
                <div>
                  <div className="w-full h-[250px] md:h-[400px] relative rounded-[12px] overflow-hidden mb-3 md:mb-4">
                    <Image src="/images/program-6.png" alt="State Visit of President of Brazil" fill className="object-cover" />
                  </div>
                  <h4 className="text-[#333333] text-[18px] md:text-[22px] font-semibold leading-snug" style={{ fontFamily: "'Poppins', sans-serif" }}>
                    State Visit of President of Brazil
                  </h4>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default TheSuperconnectorMethodSection;
