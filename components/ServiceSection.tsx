import React from 'react'
import Image from 'next/image'

interface ServiceSection {
  heading: string
  description: string
  items?: string[]
}

interface ServiceSectionProps {
  title?: string
  imageSrc?: string
  imageAlt?: string
  imageWidth?: number
  imageHeight?: number
  sections: ServiceSection[]
}

const ServiceSection: React.FC<ServiceSectionProps> = ({
  title = 'What I do',
  imageSrc,
  imageAlt = 'Services',
  imageWidth = 600,
  imageHeight = 512,
  sections,
}) => {
  return (
    <div className='flex flex-col-reverse md:flex-row' id='services'>
        <div className={`w-full ${imageSrc ? 'md:w-[55%]' : ''} px-[20px] py-12 md:pl-[80px] md:pr-[60px] text-[#1d1d1d] flex flex-col justify-center`} id='servicestext'>
            <h1 className='text-3xl md:text-4xl font-bold mb-8'>{title}</h1>
            <div className='space-y-8'>
                {sections?.map((section, idx) => (
                  <div key={idx} className={idx === 1 ? '' : ''}>
                    <h2 className='text-xl font-bold mb-2'>{section.heading}</h2>
                    <p className='mb-3'>{section.description}</p>
                    {section.items && section.items.length > 0 && (
                      <ul className='list-disc list-inside space-y-1'>
                        {section.items.map((item, itemIdx) => (
                          <li key={itemIdx}>{item}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
            </div>
        </div>
        {imageSrc && (
          <div className='w-full md:w-[45%] flex items-center justify-end' id='servicesimage'>
            <Image
              src={imageSrc}
              alt={imageAlt}
              width={imageWidth}
              height={imageHeight}
              className='object-cover w-full h-[300px] md:h-full'
              unoptimized
            />
          </div>
        )}
    </div>
  )
}

export default ServiceSection