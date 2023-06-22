'use client'
import { useEffect, useState } from 'react'
import Hero from './components/Hero'
import Card from './components/Card'
import TodayClasses from './components/TodayClasses'

type Info = {
  id: string;
  title: string;
  days: string;
  streak: string;
  color: string;
}

export default function Home() {
  const [infos, setInfos] = useState<Info[]>([])

  useEffect(() => {
    setInfos([
      {
        id: '10001',
        title: 'Days in tranning',
        days: '0',
        streak: '0 days in a row',
        color: 'yellow'
      },
      {
        id: '10002',
        title: 'Completed meals',
        days: '0',
        streak: '0 in this month',
        color: 'green'
      }
    ])
  }, [])

  return (
    <main className="w-full h-full bg-main-white flex flex-col pb-36 dark:bg-darkmode-black">
      <Hero />
      <h1 className='font-bold text-main-black text-[36px] w-[80%] px-10 xxs:w-[100%] dark:text-darkmode-white'>Nice streak, User!</h1>
      <div className='flex gap-[2%] justify-center'>
        {infos && infos.map((info) => <Card key={info.id} info={info} />)}
      </div>
      {infos.length > 0 && <TodayClasses />}
    </main>
  )
}
