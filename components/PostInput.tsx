import { CalendarIcon, ChartBarIcon, FaceSmileIcon, MapPinIcon, PhotoIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import React from 'react'

const PostInput = () => {
  return (
    <div className='border-b border-gray-100'>
    <div className='flex space-x-5 p-3'>
      <Image alt='logo' src={'/assets/HiveLogo.jpg'} width={60} height={60} className='rounded-3xl h-9 w-12'/>

      <div className='w-full'>
        <textarea className='resize-none w-full outline-none min-h-[50px] text-xl'
        placeholder="What's happening?"
        />
      </div>
    </div>

      <div className='flex justify-between'>
        <div className='flex space-x-1.5'>
          <PhotoIcon className='w-[22px] h-[22px] text-[#f4af01]'/>
          <ChartBarIcon className='w-[22px] h-[22px] text-[#f4af01]'/>
          <FaceSmileIcon className='w-[22px] h-[22px] text-[#f4af01]'/>
          <CalendarIcon className='w-[22px] h-[22px] text-[#f4af01]'/>
          <MapPinIcon className='w-[22px] h-[22px] text-[#f4af01]'/>
        </div>

        <button className='
        bg-[#f4af01] text-white w-[80px] h-[36px] text-sm cursor-pointer rounded-full
        '>
          Bumble
        </button>
      </div>
    </div>
  )
}

export default PostInput