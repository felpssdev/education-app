'use client'
import React, { FunctionComponent } from 'react'
import { Home, BarChart2, CalendarDays, Settings } from 'lucide-react'
import { usePathname } from 'next/navigation'

interface NavProps {

}

const Nav: FunctionComponent<NavProps> = () => {
  const pathname = usePathname()

  return (
    <div className='fixed flex items-center justify-center bottom-0 w-full h-24 border-t-2 gap-8 bg-main-white'>
      <div className={`p-3 mb-2 ${pathname === '/' ? 'bg-main-black text-main-white hover:bg-main-black' : ''} cursor-pointer hover:bg-main-black/10 rounded-full duration-200 ease-in-out`}>
        <Home />
      </div>
      <div className={`p-3 mb-2 ${pathname === '/stats' ? 'bg-main-black text-main-white hover:bg-main-black' : ''} cursor-pointer hover:bg-main-black/10 rounded-full duration-200 ease-in-out`}>
        <BarChart2 />
      </div>
      <div className={`p-3 mb-2 ${pathname === '/calendar' ? 'bg-main-black text-main-white hover:bg-main-black' : ''} cursor-pointer hover:bg-main-black/10 rounded-full duration-200 ease-in-out`}>
        <CalendarDays />
      </div>
      <div className={`p-3 mb-2 ${pathname === '/settings' ? 'bg-main-black text-main-white hover:bg-main-black' : ''} cursor-pointer hover:bg-main-black/10 rounded-full duration-200 ease-in-out`}>
        <Settings />
      </div>
    </div>
  )
}

export default Nav