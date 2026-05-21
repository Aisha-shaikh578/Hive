'use client'

import { db } from '@/firebase'
import { CalendarIcon, ChartBarIcon, FaceSmileIcon, MapPinIcon, PhotoIcon } from '@heroicons/react/24/outline'
import { RootState } from '@reduxjs/toolkit/query'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import Image from 'next/image'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'

interface PostInputProps{
  insideModal?: boolean
}

const PostInput = ({insideModal}: PostInputProps) => {
  const [text, setText] = useState('');
  const user = useSelector((state: RootState) => state.user)

  async function sendPost() {
    await addDoc(collection(db, "posts"), {
      text: text,
      name: user.name,
      username: user.username,
      timestamp: serverTimestamp(),
      likes: [],
      comments: []
    });

    setText('');
  }

  return (
    <div className='border-b border-gray-100'>
    <div className='flex space-x-5 p-3'>
      <Image alt='logo' src={insideModal? '/assets/user.png' : '/assets/HiveLogo.jpg'} width={60} height={60} className='rounded-3xl h-9 w-12'/>

      <div className='w-full'>
        <textarea className='resize-none w-full outline-none min-h-[50px] text-xl'
        placeholder={insideModal ? 'Send your reply' : "What's happening?"}
        onChange={(e) => setText(e.target.value)}
        value={text}
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
        bg-[#f4af01] text-white w-[80px] h-[36px] text-sm cursor-pointer rounded-full disabled:bg-opacity-60'
        disabled={!text}
        onClick={() => sendPost()}>
          Bumble
        </button>
      </div>
    </div>
  )
}

export default PostInput