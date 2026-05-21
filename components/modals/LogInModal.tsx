'use client'
import { Modal } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '@/redux/store'
import { closeLogInModal, openLogInModal } from '@/redux/slices/modalSlice'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '@/firebase'
import { useState } from 'react'

export default function LogInModal() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const isOpen = useSelector(
    (state: RootState) =>  state.modals.logInModalOpen
  )

  const dispatch: AppDispatch = useDispatch();

  async function handleLogIn() {
    await signInWithEmailAndPassword(auth, email, password);
  }

  async function handleGuestLogIn() {
    await signInWithEmailAndPassword(auth, 'guest@gmail.com', '12345678')
  }
  
  return (
    <div>
      <button 
      onClick={() => dispatch(openLogInModal())}
      className='w-[88px] h-[40px] text-sm border-2 border-gray-100 rounded-full text-white font-bold hover:bg-white hover:bg-opacity-25 transition'>
        Log In
      </button>

      <Modal
      open={isOpen}
      onClose={() => dispatch(closeLogInModal())}
      className='flex justify-center items-center'
      >
      <div className='w-full h-full sm:w-[600px] sm:h-fit sm:rounded-xl bg-white'>
       <XMarkIcon 
       className='w-7 mt-5 ms-5 cursor-pointer'
       onClick={() => dispatch(closeLogInModal())}/>
        <div className='pt-10 pb-20 px-4 sm:px-20'>
           <h1 className='text-3xl font-bold mb-10'>Log in to Hive</h1>

           <div className='w-full space-y-5 mb-10'>
            <input
             type="email"
             placeholder='Email'
             className='w-full h-[54x] border border-gray-200 outline-none ps-3 rounded-[4px] py-2 focus:border-[#f4af01] transition'
             onChange={(e) => setEmail(e.target.value)}
             value={email}
            />
            <input
             type="password"
             placeholder='Password'
             className='w-full h-[54x] border border-gray-200 outline-none ps-3 rounded-[4px] py-2 focus:border-[#f4af01] transition'
             onChange={(e) => setPassword(e.target.value)}
             value={password}
            />
           </div>
           <button
            className='bg-[#f4af01] text-white h-[48px] rounded-full shadow-md mb-5 w-full cursor-pointer'
            onClick={() => handleLogIn()}>
            Log In
            </button>
           <span className='mb-5 text-sm text-center block'>Or</span>
           <button 
           className='bg-[#f4af01] text-white h-[48px] rounded-full shadow-md w-full cursor-pointer'
           onClick={() => handleGuestLogIn()}>
            Log In as Guest
            </button>
        </div>
      </div>
      </Modal>
    </div>
  )
}
