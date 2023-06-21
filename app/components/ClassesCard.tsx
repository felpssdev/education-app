import { LucideIcon } from 'lucide-react';
import Image, { StaticImageData } from 'next/image';
import React from 'react'

interface ClassesCardProps {
  info: {
    id: string;
    title: string;
    icon?: LucideIcon;
    status: string;
    picture: StaticImageData;
    author: string;
    color: string;
  }
}


const ClassesCard = ({ info: { title, icon, status, picture, author, color } }: ClassesCardProps) => {
  return (
    <div className={`bg-${color} w-[95%] h-[20%] rounded-lg p-4 flex flex-col`}>
      <div>
        <p className='font-bold text-lg'>{title}</p>
      </div>
      <div className='flex mt-4 gap-2 text-gray-500 font-semibold'>
        <span>{status}</span>
        <span><Image src={picture} width={20} height={20} alt={author} /></span>
        <span>{author}</span>
      </div>
    </div>
  )
}

export default ClassesCard