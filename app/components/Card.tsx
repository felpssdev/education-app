import React from 'react'

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
  return (
    <div className={`h-44 mt-2 rounded-[20px] p-2 w-40 bg-${color}`}>
      <h2 className='pt-4 ml-2 font-bold text-main-black text-sm'>{title}</h2>
      <h1 className='pt-4 ml-2 font-bold text-main-black text-[40px]'>{days}</h1>
      <p className='p-2 ml-2 rounded-full w-fit bg-main-black/10 text-gray-500 font-semibold text-sm'>{streak}</p>
    </div>
  )
}

export default Card