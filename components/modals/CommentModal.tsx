'use client'

import { closeCommentModal } from '@/redux/slices/modalSlice'
import { RootState } from '@/redux/store'
import { Modal } from '@mui/material'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { PostHeader } from '../Post'
import PostInput from '../PostInput'
import { XMarkIcon } from '@heroicons/react/24/outline'

export default function CommentModal() {
  const open = useSelector((state: RootState) => state.modals.commentModalOpen)
  const dispatch = useDispatch()

  return (
    <>
      <Modal
      open={open}
      onClose={() => dispatch(closeCommentModal())}
      className='flex justify-center items-center'>
        <div className='w-full h-full sm:h-fit sm:w-[600px] sm:rounded-lg outline-none bg-white'>
          <XMarkIcon 
            className='w-7 mt-5 ms-5 cursor-pointer'
            onClick={() => dispatch(closeCommentModal())}/>
          <div className='pt-5 pb-10 px-0 sm:px-5 flex flex-col'>
             <PostHeader 
             name='guest'
             username='guest123'
             text='Hello'
             replyTo='aishaShaikh'
             />
             <div className='mt-4'> 
              <PostInput insideModal={true}/>
             </div>
          </div>
        </div>
      </Modal>
    </>
  )
}
