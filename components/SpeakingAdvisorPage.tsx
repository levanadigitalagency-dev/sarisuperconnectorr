import React from 'react'
import Image from 'next/image'
import iconCard1 from '../public/icon-card1.png'
import iconCard2 from '../public/icon-card2.png'
import iconCard3 from '../public/icon-card3.png'
import iconCard4 from '../public/icon-card4.png'
import iconCard5 from '../public/icon-card5.png'

import fs from 'fs'
import path from 'path'

type CardData = {
    id: string
    title: string
    description: string
}

type SpeakingAdvisorData = {
    heroTitle: string
    heroSubtitle: string
    heroBackground: string
    cardBackground: string
    cardTextColor: string
    cardTitleColor?: string
    cards: CardData[]
    ctaText: string
    ctaButton: string
}

const SpeakingAdvisorPage = () => {
    const contentPath = path.join(process.cwd(), 'content', 'speaking-advisory.md')
    const rawContent = fs.readFileSync(contentPath, 'utf8')
    let data: SpeakingAdvisorData = {
        heroTitle: 'Speaking & Advisory',
        heroSubtitle: 'Sari Kusumaningrum speaks and advises on the intersection of leadership, reputation, and global connectivity.',
        heroBackground: '#F5F5F5',
        cardBackground: '#F2E1D3',
        cardTextColor: '#333333',
        cardTitleColor: '#333333',
        cards: [],
        ctaText: 'For board advisory, institutional strategy sessions, or global forums:',
        ctaButton: 'Connect',
    }

    try {
        const jsonStart = rawContent.indexOf('{')
        const jsonEnd = rawContent.lastIndexOf('}')
        if (jsonStart >= 0 && jsonEnd >= 0) {
            const jsonRaw = rawContent.slice(jsonStart, jsonEnd + 1)
            const parsed = JSON.parse(jsonRaw) as Partial<SpeakingAdvisorData>
            data = { ...data, ...parsed }
        }
    } catch (error) {
        console.error('Failed to parse content/speaking-advisory.md', error)
    }

    const icons = [iconCard1, iconCard2, iconCard3, iconCard4, iconCard5]

    return (
        <div className="min-h-screen pt-[80px]" style={{ backgroundColor: '#F5EFE6' }}>
            {/* Hero Section */}
            <section className="px-8 md:px-[70px] py-12 md:py-16 lg:py-20 " style={{ backgroundColor: data.heroBackground }}>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-[500] mb-4 md:mb-6" style={{ fontFamily: 'poppins, sans-serif' }}>
                    {data.heroTitle}
                </h1>
                <p className="text-base md:text-[26px] text-gray-700 leading-relaxed" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    {data.heroSubtitle}
                </p>
                <div className="py-4">
                    <h2 className="text-[18px] text-black mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
                        {data.ctaText}
                    </h2>
                    <button className="rounded-lg bg-[#FE5001] px-6 py-3 text-white font-semibold hover:bg-[#956745] transition" style={{ fontFamily: 'Poppins, sans-serif' }}>
                        {data.ctaButton}
                    </button>
                </div>
            </section>

            <div className="py-12 px-8 md:px-[70px] pb-16">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    {data.cards.slice(0, 2).map((card, index) => (
                        <div key={card.id} className="rounded-xl p-6" style={{ backgroundColor: data.cardBackground }}>
                            <Image src={icons[index]} alt={`icon ${index + 1}`} className="mb-4 w-6 h-6" />
                            <h3 className="text-[30px] font-semibold mb-2" style={{ color: data.cardTitleColor, fontFamily: 'Cormorant, serif' }}>
                                {card.title}
                            </h3>
                        </div>
                    ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {data.cards.slice(2, 5).map((card, index) => (
                        <div key={card.id} className="rounded-xl p-6" style={{ backgroundColor: data.cardBackground }}>
                            <Image src={icons[index + 2]} alt={`icon ${index + 3}`} className="mb-4 w-6 h-6" />
                            <h3 className="text-[30px] font-semibold mb-2" style={{ color: data.cardTitleColor, fontFamily: 'Cormorant, serif' }}>
                                {card.title}
                            </h3>
                        </div>
                    ))}
                </div>
            </div>
            <div className='py-12 bg-[#F5F5F5] px-8 md:px-[70px] '>
                
            </div>
        </div>
    )
}

export default SpeakingAdvisorPage