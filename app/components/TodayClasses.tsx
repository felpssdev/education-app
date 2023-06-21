'use client'
import React, { useEffect, useState } from 'react'
import { MoveRight, Figma, LucideIcon, Chrome } from 'lucide-react'
import GuestUser from '../../public/guest-user.webp'
import { StaticImageData } from 'next/image'
import ClassesCard from './ClassesCard'

type Classes = {
  id: string;
  title: string;
  icon: LucideIcon;
  status: string;
  picture: StaticImageData;
  author: string;
  color: string;
}

const TodayClasses = () => {
  const [classes, setClasses] = useState<Classes[]>([])

  useEffect(() => {
    setClasses([
      {
        id: '1001',
        title: 'Design system in Figma',
        icon: Figma,
        status: 'Ongoing',
        picture: GuestUser,
        author: 'User',
        color: 'main-green'
      },
      {
        id: '1002',
        title: 'Animation in Protopie',
        icon: Chrome,
        status: '2:00 PM',
        picture: GuestUser,
        author: 'User',
        color: 'main-purple'
      }
    ])
  }, [])

  return (
    <div className='self-center w-[80%] p-4 mt-6 rounded-[20px] h-[300px] bg-gray-400/10'>
      <div className='flex justify-between items-center p-2'>
        <h1 className='font-bold text-lg text-main-black'>Today classes</h1>
        <MoveRight className='bg-main-white p-2 flex items-center rounded-full w-10 h-10' />
      </div>
      <div className='flex flex-col items-center gap-4'>
        {classes && classes.map((classInfo) => <ClassesCard key={classInfo.id} info={classInfo} />)}
      </div>
    </div>
  )
}

export default TodayClasses