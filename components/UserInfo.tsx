'use client'

import React from 'react'
import Image from 'next/image'
import { signOut } from 'firebase/auth'
import { auth } from '@/firebase'
import { useDispatch } from 'react-redux'
import { signOutUser } from '@/redux/slices/userSlice'

const UserInfo = () => {
  const dispatch = useDispatch();

  async function handleSignOut() {
    await signOut(auth);
    dispatch(signOutUser());
  }
  return (
   <div 
    className='absolute bottom-3 cursor-pointer flex space-x-2 hover:bg-gray-500 hover:bg-opacity-10 transition xl:p-3 xl:pe-6 rounded-full'
    onClick={() => handleSignOut()}>
      <Image 
      src={'/assets/user.png'}
      alt='profile picture'
      height={34}
      width={34}
      className='h-8 w-8'
      />

      <div className='hidden xl:flex flex-col text-sm'>
        <span className='font-bold'>Guest</span>
        <span className='text-gray-500'>@test123</span>
      </div>
   </div>
  )
}

export default UserInfo
