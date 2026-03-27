import React from 'react'
import Image from 'next/image'

interface AdvisorySectionProps {
  title?: string
  subtitle?: string
  bulletPoints?: string[]
  paragraphs?: string[]
  signature?: string
  buttonText?: string
  buttonLink?: string
  imageSrc?: string
  imageAlt?: string
  imageWidth?: number
  imageHeight?: number
}

const AdvisorySection: React.FC<AdvisorySectionProps> = ({
  title = 'Advisory Section',
  subtitle,
  bulletPoints = [],
  paragraphs = [],
  signature,
  buttonText,
  buttonLink,
  imageSrc,
  imageAlt = 'Leadership image',
  imageWidth = 600,
  imageHeight = 400,
}) => {
  return (
    <div className="flex flex-col-reverse md:flex-row" id="advisory">
      <div
        className={`w-full ${imageSrc ? 'md:w-[55%]' : ''} px-[20px] py-12 md:pl-[80px] md:pr-[60px] text-[#1d1d1d] flex flex-col justify-center`}
        id="advisory-text"
      >
        <h1 className="text-3xl md:text-4xl font-bold mb-4">{title}</h1>
        {subtitle && <p className="text-base md:text-lg font-semibold mb-6">{subtitle}</p>}

        {bulletPoints.length > 0 && (
          <ul className="list-disc list-inside space-y-2 mb-6">
            {bulletPoints.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        )}

        {paragraphs.length > 0 && (
          <div className="space-y-3 mb-6">
            {paragraphs.map((p, idx) => (
              <p key={idx}>{p}</p>
            ))}
          </div>
        )}

        {signature && (
          <div className="mt-4 flex justify-center">
            <p className="text-4xl md:text-5xl font-signature text-center">{signature}</p>
          </div>
        )}

        {buttonText && (
          <div className="flex justify-center">
            <a
              href={buttonLink || '#'}
              className="inline-flex items-center justify-center mt-6 w-[119px] h-[51px] border border-black text-black font-medium hover:bg-black hover:text-white transition"
            >
              {buttonText}
            </a>
          </div>
        )}
      </div>
      {imageSrc && (
        <div className="w-full md:w-[45%] flex items-center justify-end" id="leadership-image">
          <Image
            src={imageSrc}
            alt={imageAlt}
            width={imageWidth}
            height={imageHeight}
            className="object-cover w-full h-[300px] md:h-full"
            unoptimized
          />
        </div>
      )}
    </div>
  )
}

export default AdvisorySection