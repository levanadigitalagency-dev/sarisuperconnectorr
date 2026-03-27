import React from 'react'
import Image from 'next/image'

interface PhilosopySectionProps {
  title?: string
  subtitle?: string
  headline?: string
  body?: string[]
  imageSrc?: string
  imageAlt?: string
}

const PhilosopySection: React.FC<PhilosopySectionProps> = ({
  title = 'Philosophy',
  subtitle,
  headline,
  body = [],
  imageSrc,
  imageAlt = 'Background',
}) => {
  return (
    <section className="relative overflow-hidden z-0">
      {imageSrc && (
        <div className="absolute inset-0 z-0">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className="object-cover"
            priority
            unoptimized
          />
          <div className="absolute inset-0 bg-white/50" />
        </div>
      )}

      <div className="relative z-10 mx-auto flex min-h-[300px] max-w-4xl flex-col items-center justify-center px-[20px] py-16 md:px-[80px] text-center text-[#1d1d1d]">
        <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-[#1d1d1d]">{title}</h1>
        {subtitle && <p className="mt-2 text-sm md:text-base font-semibold text-[#1d1d1d]">{subtitle}</p>}
        {headline && <h2 className="mt-5 text-[28px] md:text-[44px] font-bold text-white drop-shadow-md">{headline}</h2>}
        {body.length > 0 && (
          <div className="mt-4 space-y-2 sm:text-base font-normal text-[#1d1d1d]">
            {body.map((line, idx) => (
              <p key={idx}>{line}</p>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

export default PhilosopySection
