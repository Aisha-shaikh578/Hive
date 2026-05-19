'use client'
import { Modal } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '@reduxjs/toolkit/query'
import { AppDispatch } from '@/redux/store'
import { closeSignModal, openSignUpModal } from '@/redux/slices/modalSlice'

export default function SignUpModal() {
  // const [isOpen, setIsOpen] = useState(false);

  // const handleClose = () => {
  //   setIsOpen(false)
  // }

  // const handleOpen = () => {
  //   setIsOpen(true);
  // }

  const isOpen = useSelector(
    (state: RootState) =>  state.modals.signUpModalOpen
  )

  const dispatch: AppDispatch = useDispatch();
  console.log(isOpen)
  return (
    <div>
      <button
       onClick={() => dispatch(openSignUpModal())}
       className='w-[88px] h-[40px] text-sm border-2 border-gray-100 rounded-full bg-white font-bold hover:bg-opacity-45 transition'>
        Sign Up
      </button>

      <Modal
      open={isOpen}
      onClose={() => dispatch(closeSignModal())}
      className='flex justify-center items-center'
      >
      <div className='w-[200px] h-[400px] bg-white'></div>
      </Modal>
    </div>
  )
}
