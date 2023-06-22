import React from 'react'
import 'animate.css'
import { useTheme } from 'next-themes';

type CardProps = {
  info: {
    id?: string;
    title: string;
    days: string;
    streak: string;
    color: string;
  }
}

const Card = ({ info: { title, days, streak, color } }: CardProps) => {
  const { theme } = useTheme()

  return (
    <div className={`h-[50%] mt-2 rounded-[20px] p-2 w-[40%] ${theme === 'dark' ? `bg-darkmode-${color}` : `bg-main-${color}`} flex flex-col justify-between animate__animated animate__fadeInLeft`}>
      <h2 className='pt-4 ml-2 font-bold text-main-black text-sm h-10'>{title}</h2>
      <div>
        <h1 className='pt-4 ml-2 font-bold text-main-black text-[40px]'>{days}</h1>
        <p className='ml-2 rounded-full w-fit bg-main-black/10 text-gray-500 dark:text-darkmode-black font-semibold text-sm px-2 xxs:text-xs xs:text-xs'>{streak}</p>
      </div>
    </div>
  )
}

export default Card