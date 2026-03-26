import React from 'react'
import Image from 'next/image'

const TheSuperconnectorMethodSection = () => {
    return (
        <section className="w-full font-sans overflow-hidden">
            {/* Top Section */}
            <div className="w-full bg-[#f3efe6] relative">
                <div className="w-full max-w-[1440px] mx-auto flex flex-col md:flex-row items-center justify-between min-h-[500px] md:h-[600px] relative z-10 px-8 md:px-16 lg:px-[100px]">
                    <div className="w-full md:w-1/2 py-20 md:py-0 relative z-20">
                        <h2 className="text-[#3b3631] text-[32px] md:text-[42px] lg:text-[48px] xl:text-[52px] font-normal leading-[1.1] mb-6 md:whitespace-nowrap" style={{ fontFamily: "'Cormorant', serif" }}>
                            The Superconnector Method
                        </h2>
                        <p className="text-[#555555] text-[16px] md:text-[18px] leading-[1.6] max-w-[500px] font-normal" style={{ fontFamily: "'Poppins', sans-serif" }}>
                            Sari Kusumaningrum speaks and advises on the intersection of leadership, reputation, and global connectivity.
                        </p>
                    </div>
                    {/* Image Desktop */}
                    <div className="w-full md:w-1/2 h-[400px] md:h-full relative z-10 hidden md:flex justify-end items-end">
                        <img 
                            src="/white-shirt-woman.png" 
                            alt="The Superconnector Method" 
                            className="absolute bottom-0 right-[-50px] lg:right-[-20px] h-[125%] w-auto object-contain object-bottom transform scale-110 origin-bottom"
                        />
                    </div>
                    {/* Image Mobile */}
                    <div className="w-full relative h-[400px] flex md:hidden justify-center items-end mt-[-50px]">
                        <img 
                            src="/white-shirt-woman.png" 
                            alt="The Superconnector Method" 
                            className="absolute bottom-0 h-[120%] w-auto object-contain object-bottom"
                        />
                    </div>
                </div>
            </div>

            {/* Bottom Section */}
            <div className="w-full bg-[#e8decd]">
                <div className="w-full max-w-[1440px] mx-auto py-20 px-8 md:px-16 lg:px-[100px]">
                    <h2 className="text-[#555] text-[32px] md:text-[40px] lg:text-[46px] font-normal mb-12" style={{ fontFamily: "'Cormorant', serif" }}>
                        The Core Priciples
                    </h2>
                    
                    {/* Cards Grid */}
                    <div className="flex flex-col gap-6">
                        {/* Top Row: 2 Cards */}
                        <div className="flex flex-col md:flex-row gap-6">
                            {/* Card 1 */}
                            <div className="bg-[#fcfcfc] rounded-xl p-8 w-full md:w-1/2 shadow-sm border border-gray-100 flex flex-col justify-start">
                                <div className="text-[#333] mb-5">
                                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line></svg>
                                </div>
                                <h3 className="text-[#222] font-bold text-[18px] mb-3 leading-snug">Access</h3>
                                <p className="text-[#666] text-[15px] leading-relaxed">Lorem ipsum dolor sit amet consectetur. Porta egestas vitae blandit accumsan pharetra risus ultricies cras. Sagittis nulla hac netus suscipit turpis volutpat pellentesque quam.</p>
                            </div>
                            {/* Card 2 */}
                            <div className="bg-[#fcfcfc] rounded-xl p-8 w-full md:w-1/2 shadow-sm border border-gray-100 flex flex-col justify-start">
                                <div className="text-[#333] mb-5">
                                    <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-3z"/><path fill="#fcfcfc" d="M10 16l-4-4 1.41-1.41L10 13.17l6.59-6.59L18 8z"/></svg>
                                </div>
                                <h3 className="text-[#222] font-bold text-[18px] mb-3 leading-snug">Trust</h3>
                                <p className="text-[#666] text-[15px] leading-relaxed">Lorem ipsum dolor sit amet consectetur. Porta egestas vitae blandit accumsan pharetra risus ultricies cras. Sagittis nulla hac netus suscipit turpis volutpat pellentesque quam.</p>
                            </div>
                        </div>

                        {/* Bottom Row: 3 Cards */}
                        <div className="flex flex-col md:flex-row gap-6">
                            {/* Card 3 */}
                            <div className="bg-[#fcfcfc] rounded-xl p-8 w-full md:w-1/3 shadow-sm border border-gray-100 flex flex-col justify-start">
                                <div className="text-[#333] mb-5">
                                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 11V7H3M17 3l4 4-4 4"/><path d="M7 13v4h14M7 21l-4-4 4-4"/></svg>
                                </div>
                                <h3 className="text-[#222] font-bold text-[18px] mb-3 leading-snug">Alignment</h3>
                                <p className="text-[#666] text-[15px] leading-relaxed">Lorem ipsum dolor sit amet consectetur. Porta egestas vitae blandit accumsan pharetra risus ultricies cras. Sagittis nulla hac netus suscipit turpis volutpat pellentesque quam.</p>
                            </div>
                            {/* Card 4 */}
                            <div className="bg-[#fcfcfc] rounded-xl p-8 w-full md:w-1/3 shadow-sm border border-gray-100 flex flex-col justify-start">
                                <div className="text-[#333] mb-5">
                                    <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor"><path d="M9 21c0 .5.4 1 1 1h4c.6 0 1-.5 1-1v-1H9v1zm3-19C8.1 2 5 5.1 5 9c0 2.4 1.2 4.5 3 5.7V17c0 .5.4 1 1 1h6c.6 0 1-.5 1-1v-2.3c1.8-1.3 3-3.4 3-5.7 0-3.9-3.1-7-7-7z"/></svg>
                                </div>
                                <h3 className="text-[#222] font-bold text-[18px] mb-3 leading-snug">Opportunity</h3>
                                <p className="text-[#666] text-[15px] leading-relaxed">Lorem ipsum dolor sit amet consectetur. Porta egestas vitae blandit accumsan pharetra risus ultricies cras. Sagittis nulla hac netus suscipit turpis volutpat pellentesque quam.</p>
                            </div>
                            {/* Card 5 */}
                            <div className="bg-[#fcfcfc] rounded-xl p-8 w-full md:w-1/3 shadow-sm border border-gray-100 flex flex-col justify-start">
                                <div className="text-[#333] mb-5">
                                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>
                                </div>
                                <h3 className="text-[#222] font-bold text-[18px] mb-3 leading-snug">Ecosystem</h3>
                                <p className="text-[#666] text-[15px] leading-relaxed">Lorem ipsum dolor sit amet consectetur. Porta egestas vitae blandit accumsan pharetra risus ultricies cras. Sagittis nulla hac netus suscipit turpis volutpat pellentesque quam.</p>
                            </div>
                        </div>
                    </div>

                    {/* Footer Area */}
                    <div className="flex flex-col md:flex-row items-center justify-between mt-12 gap-8">
                        <button className="bg-[#b38562] hover:bg-[#a57a53] text-white px-8 py-3 rounded text-[15px] font-bold transition-colors duration-300 w-full md:w-[150px] shadow-sm">
                            Learn more
                        </button>
                        <p className="text-[#444] text-[15px] md:text-[16px] md:text-right max-w-[700px] leading-relaxed font-medium">
                            Because the most influential leaders are not those who know the most people.<br className="hidden md:block" />
                            They are those who know how to connect people with purpose.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TheSuperconnectorMethodSection
