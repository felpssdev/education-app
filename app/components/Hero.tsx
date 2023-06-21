import Image from 'next/image'
import React from 'react'
import GuestUser from '../../public/guest-user.webp'

const Hero = () => {
  return (
    <div className="flex justify-between p-10 items-center">
      <div className='relative'>
        <Image
          className="border-4 border-main-black rounded-full box-border"
          src={GuestUser}
          width={60}
          height={60}
          alt='User Image'
        />
        <div className='absolute bg-main-black text-main-white font-bold rounded-full flex items-center w-6 h-6 top-1 right-[-5px] justify-center'>0</div>
      </div>
      <div>
        <p className="px-4 py-3 bg-main-black text-main-white font-bold rounded-full cursor-pointer">Connect to class</p>
      </div>
    </div>
  )
}

export default Hero