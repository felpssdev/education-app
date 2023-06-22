'use client'
import React, { FunctionComponent } from 'react'
import { Home, BarChart2, CalendarDays, Settings } from 'lucide-react'
import { usePathname, useRouter } from 'next/navigation'

interface NavProps {

}

const Nav: FunctionComponent<NavProps> = () => {
  const router = useRouter()
  const pathname = usePathname()

  return (
    <div className='fixed flex items-center justify-center bottom-0 w-full h-24 border-t-2 gap-8 bg-main-white dark:bg-darkmode-black dark:border-darkmode-white'>
      <div onClick={() => router.push('/')} className={`p-3 mb-2 ${pathname === '/' ? 'bg-main-black dark:bg-darkmode-white dark:text-darkmode-black  text-main-white hover:bg-main-black' : ''} cursor-pointer hover:bg-main-black/10 rounded-full duration-200 ease-in-out text-main-black dark:text-darkmode-white dark:hover:bg-darkmode-white dark:hover:text-darkmode-black`}>
        <Home />
      </div>
      <div className={`p-3 mb-2 ${pathname === '/stats' ? 'bg-main-black dark:bg-darkmode-white dark:text-darkmode-black  text-main-white hover:bg-main-black' : ''} cursor-pointer hover:bg-main-black/10 rounded-full duration-200 ease-in-out text-main-black dark:text-darkmode-white dark:hover:bg-darkmode-white dark:hover:text-darkmode-black`}>
        <BarChart2 />
      </div>
      <div className={`p-3 mb-2 ${pathname === '/calendar' ? 'bg-main-black dark:bg-darkmode-white dark:text-darkmode-black  text-main-white hover:bg-main-black' : ''} cursor-pointer hover:bg-main-black/10 rounded-full duration-200 ease-in-out text-main-black dark:text-darkmode-white dark:hover:bg-darkmode-white dark:hover:text-darkmode-black`}>
        <CalendarDays />
      </div>
      <div onClick={() => router.push('/settings')} className={`p-3 mb-2 ${pathname === '/settings' ? 'bg-main-black dark:bg-darkmode-white dark:text-darkmode-black  text-main-white hover:bg-main-black' : ''} cursor-pointer hover:bg-main-black/10 rounded-full duration-200 ease-in-out text-main-black dark:text-darkmode-white dark:hover:bg-darkmode-white dark:hover:text-darkmode-black`}>
        <Settings />
      </div>
    </div>
  )
}

export default Nav