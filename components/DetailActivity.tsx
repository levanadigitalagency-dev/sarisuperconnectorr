import React from 'react'
import Image from 'next/image'

const DetailActivity = () => {
    return (
        <div>
            <section className="bg-[#f5f5f5] py-16">
                <div className=" max-w-6xl px-8 md:px-[70px] text-left">
                    <h1 className="text-2xl md:text-[44px] text-[#B58D60]" style={{ fontFamily: 'Cormorant, serif' }}>
                        Global Network
                    </h1>
                    <p className="mt-5 text-[#2B2B2B] leading-relaxed max-w-3xl ">
                        My work connects leaders, institutions, and communities across industries and regions.
                        These roles and platforms reflect the ecosystems where collaboration and opportunity continue to grow.
                    </p>
                </div>
            </section>
            <section className="bg-[#F5EFE6] overflow-hidden">
                <div className="relative min-h-screen lg:min-h-[620px]">
                    <div className=" lg:absolute lg:inset-y-0 lg:right-0 lg:w-[557px] xl:w-[557px]">
                        <div className="w-full h-full overflow-hidden">
                            <Image
                                src="/img.png"
                                alt="Detail Activity"
                                width={577}
                                height={1067}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>

                    <div className="relative max-w-8xl px-8 sm:px-8 md:px-[70px] py-12 md:py-16 grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-12">
                        <div className="z-10 flex flex-col justify-center">
                            <h2 className="text-3xl sm:text-4xl md:text-[44px] font-bold text-[#212121]" style={{ fontFamily: 'Cormorant, serif' }}>
                                Archipelago International
                            </h2>
                            <p className="mt-6 md:mt-8 text-sm md:text-base text-[#2B2B2B] leading-relaxed max-w-2xl">
                                Lorem ipsum dolor sit amet consectetur. Nunc enim sit a sodales odio amet tempus id egestas. Diam risus eget eu in. In orci pretium eget nunc cras odio. Amet nunc vel in pellentesque enim nunc.
                            </p>
                            <p className="mt-4 md:mt-6 text-sm md:text-base text-[#2B2B2B] leading-relaxed max-w-2xl">
                                Lorem ipsum dolor sit amet consectetur. Nunc enim sit a sodales odio amet tempus id egestas. Diam risus eget eu in. In orci pretium eget nunc cras odio. Amet nunc vel in pellentesque enim nunc et platea turpis. Habitasse bibendum dictum nascetur viverra convallis tincidunt. Diam enim id.
                            </p>
                            <p className="mt-4 md:mt-6 text-sm md:text-base text-[#2B2B2B] leading-relaxed max-w-2xl">
                                Lorem ipsum dolor sit amet consectetur. Nunc enim sit a sodales odio amet tempus id egestas. Diam risus eget eu in. In orci pretium eget nunc cras odio. Amet nunc vel in pellentesque enim nunc.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default DetailActivity