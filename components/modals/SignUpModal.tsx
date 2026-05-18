'use client'
import React, { useState } from 'react'
import { Modal } from '@mui/material'

export default function SignUpModal() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => {
    setIsOpen(false)
  }

  const handleOpen = () => {
    setIsOpen(true);
  }
  return (
    <div>
      <button
       onClick={handleOpen}
       className='w-[88px] h-[40px] text-sm border-2 border-gray-100 rounded-full bg-white font-bold hover:bg-opacity-45 transition'>
        Sign Up
      </button>

      <Modal
      open={isOpen}
      onClose={handleClose}
      className='flex justify-center items-center'
      >
      <div className='w-[200px] h-[400px] bg-white'></div>
      </Modal>
    </div>
  )
}
