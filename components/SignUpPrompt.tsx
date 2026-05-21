'use client'

import React from 'react'
import SignUpModal from './modals/SignUpModal'
import LogInModal from './modals/LogInModal'
import { useSelector } from 'react-redux'
import { RootState } from '@/redux/store'

export default function SignUpPrompt() {
  const name = useSelector(
    (state: RootState) => state.user.name
  )

  return (
    !name 
      &&
    <div className='fixed w-full h-[80px] bg-[#f4af01] bottom-0 flex justify-center lg:justify-between lg:px-20 xl:px-40 2xl:px-80 items-center space-x-5'>
     <div className='md:flex flex-col text-white hidden'>
       <span className='text-xl'>
         Don't miss out the buzz
       </span>
       <span>
        People on Hive are always the first to know
       </span>
     </div>

     <div className='flex space-x-2'>
      <LogInModal />
      <SignUpModal />
     </div>
    </div>
  )
}
