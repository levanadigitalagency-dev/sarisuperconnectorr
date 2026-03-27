import React from 'react'
import Image from 'next/image'

interface Role {
  title: string
  organization: string
}

interface LeadershipRolesProps {
  title?: string
  description?: string
  roles: Role[]
  imageSrc?: string
  imageAlt?: string
  imageWidth?: number
  imageHeight?: number
}

const LeadershipRoles: React.FC<LeadershipRolesProps> = ({
  title = 'Leadership Roles',
  description,
  roles,
  imageSrc,
  imageAlt = 'Leadership image',
  imageWidth = 600,
  imageHeight = 400,
}) => {
  return (
    <div className="flex flex-col md:flex-row" id="leadership">
      {imageSrc && (
        <div className="w-full md:w-1/2" id="leadership-image">
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
      <div
        className={`w-full ${imageSrc ? 'md:w-1/2' : ''} px-[20px] py-12 md:pr-[80px] md:pl-[60px] text-[#1d1d1d] flex flex-col justify-center`}
        id="leadership-text"
      >
        <h1 className="text-3xl md:text-4xl font-bold mb-4">{title}</h1>
        {description && <p className="mb-6">{description}</p>}
        <ul className="list-disc list-inside space-y-2">
          {roles.map((role, idx) => (
            <li key={idx}>
              <strong>{role.title}</strong><br />
              {role.organization}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default LeadershipRoles