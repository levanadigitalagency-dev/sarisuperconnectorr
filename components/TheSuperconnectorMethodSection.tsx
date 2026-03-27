import React from "react";

type Principle = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

const topRow: Principle[] = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
      </svg>
    ),
    title: "Access",
    description:
      "Lorem ipsum dolor sit amet consectetur. Porta egestas vitae blandit accumsan pharetra risus ultricies cras. Sagittis nulla hac netus suscipit turpis volutpat pellentesque quam.",
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
      "Lorem ipsum dolor sit amet consectetur. Porta egestas vitae blandit accumsan pharetra risus ultricies cras. Sagittis nulla hac netus suscipit turpis volutpat pellentesque quam.",
  },
];

const bottomRow: Principle[] = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 11V7H3M17 3l4 4-4 4" />
        <path d="M7 13v4h14M7 21l-4-4 4-4" />
      </svg>
    ),
    title: "Alignment",
    description:
      "Lorem ipsum dolor sit amet consectetur. Porta egestas vitae blandit accumsan pharetra risus ultricies cras. Sagittis nulla hac netus suscipit turpis volutpat pellentesque quam.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
        <path d="M9 21c0 .5.4 1 1 1h4c.6 0 1-.5 1-1v-1H9v1zm3-19C8.1 2 5 5.1 5 9c0 2.4 1.2 4.5 3 5.7V17c0 .5.4 1 1 1h6c.6 0 1-.5 1-1v-2.3c1.8-1.3 3-3.4 3-5.7 0-3.9-3.1-7-7-7z" />
      </svg>
    ),
    title: "Opportunity",
    description:
      "Lorem ipsum dolor sit amet consectetur. Porta egestas vitae blandit accumsan pharetra risus ultricies cras. Sagittis nulla hac netus suscipit turpis volutpat pellentesque quam.",
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
      "Lorem ipsum dolor sit amet consectetur. Porta egestas vitae blandit accumsan pharetra risus ultricies cras. Sagittis nulla hac netus suscipit turpis volutpat pellentesque quam.",
  },
];

const cardClass =
  "bg-[#f4f4f4] rounded-[10px] px-4 py-4 md:px-5 md:py-4 lg:px-6 lg:py-5";

const TheSuperconnectorMethodSection = () => {
  return (
    <section className="w-full overflow-hidden">
      <div className="w-full bg-[#f3eee7]">
        <div className="w-full max-w-[1440px] mx-auto flex flex-col md:flex-row items-center px-6 md:px-12 lg:px-[72px] min-h-[430px] md:min-h-[600px]">
          <div className="w-full md:w-[60%] pt-14 pb-10 md:pt-0 md:pb-0 z-10">
            <h2
              className="text-[#2f2d2d] text-[36px] md:text-[52px] lg:text-[68px] leading-[1] mb-6 whitespace-nowrap"
              style={{ fontFamily: "'Cormorant', serif", fontWeight: 400 }}
            >
              The Superconnector Method
            </h2>
            <p
              className="text-[#3b3b3b] text-[15px] md:text-[17px] lg:text-[20px] leading-[1.5] max-w-[580px]"
              style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 400 }}
            >
              Sari Kusumaningrum speaks and advises on the intersection of leadership, reputation, and global connectivity.
            </p>
          </div>

          <div className="w-full md:w-[40%] relative h-[420px] md:h-[600px] flex justify-end items-end">
            <img
              src="/white-shirt-woman.png"
              alt="The Superconnector Method"
              className="h-full w-auto max-w-none object-contain object-bottom md:translate-x-24 lg:translate-x-32 scale-110 origin-bottom"
            />
          </div>
        </div>
      </div>

      <div className="w-full bg-[#e8e0d0]">
        <div className="w-full max-w-[1440px] mx-auto px-6 md:px-12 lg:px-[72px] pt-8 md:pt-10 pb-8 md:pb-10">
          <h3
            className="text-[#2f2d2d] text-[40px] md:text-[52px] lg:text-[56px] leading-[1.1] mb-6 md:mb-7"
            style={{ fontFamily: "'Cormorant', serif" }}
          >
            The Core Principles
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
            {topRow.map((item) => (
              <div key={item.title} className={cardClass}>
                <div className="text-[#2f2d2d] mb-2">{item.icon}</div>
                <h4 className="text-[#2f2d2d] text-[16px] md:text-[18px] leading-none mb-2" style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700 }}>
                  {item.title}
                </h4>
                <p className="text-[#5a5a5a] text-[14px] md:text-[16px] leading-[1.55]" style={{ fontFamily: "'Poppins', sans-serif" }}>
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4 mt-3 md:mt-4">
            {bottomRow.map((item) => (
              <div key={item.title} className={cardClass}>
                <div className="text-[#2f2d2d] mb-2">{item.icon}</div>
                <h4 className="text-[#2f2d2d] text-[16px] md:text-[18px] leading-none mb-2" style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700 }}>
                  {item.title}
                </h4>
                <p className="text-[#5a5a5a] text-[14px] md:text-[16px] leading-[1.55]" style={{ fontFamily: "'Poppins', sans-serif" }}>
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-5 mt-5">
            <button
              className="bg-[#b07b4d] text-white px-5 py-2 rounded-[6px] text-[17px] md:text-[20px]"
              style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 600 }}
            >
              Learn more
            </button>
            <p
              className="text-[#2f2d2d] text-[14px] md:text-[16px] leading-[1.45] md:text-right max-w-[720px]"
              style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 500 }}
            >
              Because the most influential leaders are not those who know the most people.
              <br />
              They are those who know how to connect people with purpose.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TheSuperconnectorMethodSection;
