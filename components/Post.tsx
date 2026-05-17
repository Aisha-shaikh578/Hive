import Image from 'next/image'
import React from 'react'

export function Post() {
  return (
    <div>
      <PostHeader />
    </div>
  )
}


export function PostHeader() {
  return (
    <div className='flex p-3 space-x-5'>
      <Image src='/assets/user.png' alt='Profile pic' width={44} height={44} className='h-8 w-8'/>



    <div className='text-[15px] flex flex-col space-y-1.5'>
      <div className='flex space-x-1.5 text-[#707e89]'>
        <span className='font-bold text-[#0f1419]'>Guest</span>
        <span>@guest1234</span>
        <span>•</span>
        <span>a day ago</span>
      </div>
      
      <span>hsuajidkwokdwls</span>
    </div>
    </div>
  )
}
