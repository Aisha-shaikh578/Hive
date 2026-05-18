import React from 'react'
import SignUpModal from './modals/SignUpModal'

export default function SignUpPrompt() {
  return (
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
      <button className='w-[88px] h-[40px] text-sm border-2 border-gray-100 rounded-full text-white font-bold hover:bg-white hover:bg-opacity-25 transition'>
        Log In
      </button>
      <SignUpModal />
     </div>
    </div>
  )
}
