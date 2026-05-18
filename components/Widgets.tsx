import { EllipsisHorizontalIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import React from 'react'

const Widgets = () => {
  return (
    <div className='p-3 hidden lg:flex flex-col space-y-3 w-[400px]'>
      <div className='flex bg-[#eff3f4] text-[#899590] h-[44px] items-center space-x-3 rounded-full pl-5'>
        <MagnifyingGlassIcon className='w-[20px] h-20px]'/>
        <input type="text" placeholder='Search' className='bg-transparent outline-none'/>
      </div>

      <div className='bg-[#eff3f4] rounded-xl p-3'>
        <h1 className='text-xl font-bold'>What's Happening?</h1>

        <div className='flex flex-col py-3'>
          <div className='flex justify-between text-[#536471] text-[13px]'>
            <span>Trending Now</span>
            <EllipsisHorizontalIcon className='w-[20px]'/>
          </div>

          <span className='font-bold'>#ReactJS</span>

          <span className='text-[#536471] text-[12px]'>240k Bumbles</span>
        </div>

        <div className='flex flex-col py-3'>
          <div className='flex justify-between text-[#536471] text-[13px]'>
            <span>Trending in Australia</span>
            <EllipsisHorizontalIcon className='w-[20px]'/>
          </div>

          <span className='font-bold'>#Angular</span>

          <span className='text-[#536471] text-[12px]'>240k Bumbles</span>
        </div>

        <div className='flex flex-col py-3'>
          <div className='flex justify-between text-[#536471] text-[13px]'>
            <span>Trending in India</span>
            <EllipsisHorizontalIcon className='w-[20px]'/>
          </div>

          <span className='font-bold'>#JavaScript</span>

          <span className='text-[#536471] text-[12px]'>40k Bumbles</span>
        </div>

        <div className='flex flex-col py-3'>
          <div className='flex justify-between text-[#536471] text-[13px]'>
            <span>Trending in Australia</span>
            <EllipsisHorizontalIcon className='w-[20px]'/>
          </div>

          <span className='font-bold'>#Hive</span>

          <span className='text-[#536471] text-[12px]'>100k Bumbles</span>
        </div>
      </div>

      <div className='bg-[#eff3f4] rounded-xl p-3'>
        <h1 className='text-xl font-bold'>Who to Follow</h1>

        <div className='flex justify-between items-center py-3'>
         <div className='flex space-x-3 items-center'>
          <Image src='/assets/user.png' alt='Profile pic' width={50} height={50} className='h-12 w-12 rounded-full'/>

          <div className='flex flex-col text-sm'>
            <span className='font-bold'>Aisha Shaikh</span>
            <span>@aisha.dev</span>
          </div>
         </div>

          <button className='bg-[#0f1419] text-white w-[72px] h-[40px] text-sm rounded-full'>Follow</button>
        </div>

        <div className='flex justify-between items-center py-3'>
         <div className='flex space-x-3 items-center'>
          <Image src='/assets/user.png' alt='Profile pic' width={50} height={50} className='h-12 w-12 rounded-full'/>

          <div className='flex flex-col text-sm'>
            <span className='font-bold'>XYZ</span>
            <span>@xyz</span>
          </div>
         </div>

          <button className='bg-[#0f1419] text-white w-[72px] h-[40px] text-sm rounded-full'>Follow</button>
        </div>
      </div>
    </div>
  )
}

export default Widgets
