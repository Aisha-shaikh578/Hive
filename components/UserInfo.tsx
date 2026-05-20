'use client'

import React from 'react'
import Image from 'next/image'
import { signOut } from 'firebase/auth'
import { auth } from '@/firebase'
import { useDispatch, useSelector } from 'react-redux'
import { signOutUser } from '@/redux/slices/userSlice'
import { RootState } from '@reduxjs/toolkit/query'
import { closeLogInModal, closeSignModal } from '@/redux/slices/modalSlice'

const UserInfo = () => {
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.user)

  async function handleSignOut() {
    await signOut(auth);
    dispatch(signOutUser());
    dispatch(closeSignModal());
    dispatch(closeLogInModal());
  }
  return (
   <div 
    className='absolute bottom-3 cursor-pointer flex space-x-2 hover:bg-gray-500 hover:bg-opacity-10 transition xl:p-3 xl:pe-6 rounded-full w-fit xl:w-[240px] justify-start'
    onClick={() => handleSignOut()}>
      <Image 
      src={'/assets/user.png'}
      alt='profile picture'
      height={34}
      width={34}
      className='h-8 w-8'
      />

      <div className='hidden xl:flex flex-col text-sm max-w-40'>
        <span className='font-bold whitespace-nowrap text-ellipsis overflow-hidden'>{user.name}</span>
        <span className='text-gray-500 whitespace-nowrap text-ellipsis overflow-hidden'>@{user.username}</span>
      </div>
   </div>
  )
}

export default UserInfo
