'use client'
import { Modal } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '@reduxjs/toolkit/query'
import { AppDispatch } from '@/redux/store'
import { closeSignModal, openSignUpModal } from '@/redux/slices/modalSlice'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { createUserWithEmailAndPassword, onAuthStateChanged, updateProfile } from 'firebase/auth'
import { auth } from '@/firebase'
import { useEffect, useState } from 'react'
import { signInUser } from '@/redux/slices/userSlice'

export default function SignUpModal() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const isOpen = useSelector(
    (state: RootState) =>  state.modals.signUpModalOpen
  )

  const dispatch: AppDispatch = useDispatch();

  async function handleSignUp() {
  const userCredentials = await createUserWithEmailAndPassword(
    auth,
    email,
    password
  );

  await updateProfile(userCredentials.user, {
    displayName: name
  });

  dispatch(signInUser({
    name: userCredentials.user.displayName,
    username: userCredentials.user.email!.split('@')[0],
    email: userCredentials.user.email,
    uid: userCredentials.user.uid,
  }));
  }

  useEffect(() => {
   const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
    if(!currentUser) return;

    dispatch(signInUser(
      {
        name: currentUser.displayName,
        username: currentUser.email!.split('@')[0],
        email: currentUser.email,
        uid: currentUser.uid,
      }
    ))
   });
   return unsubscribe;
  }, [])
  
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
      <div className='w-full h-full sm:w-[600px] sm:h-fit sm:rounded-xl bg-white'>
       <XMarkIcon 
       className='w-7 mt-5 ms-5 cursor-pointer'
       onClick={() => dispatch(closeSignModal())}/>
        <div className='pt-10 pb-20 px-4 sm:px-20'>
           <h1 className='text-3xl font-bold mb-10'>Create your account</h1>

           <div className='w-full space-y-5 mb-10'>
            <input
             type="text"
             placeholder='Name'
             className='w-full h-[54x] border border-gray-200 outline-none ps-3 rounded-[4px] py-2 focus:border-[#f4af01] transition'
             onChange={(e) => setName(e.target.value)}
             value={name}
            />
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
            onClick={() => handleSignUp()}>
             Sign Up
           </button>
           <span className='mb-5 text-sm text-center block'>Or</span>
           <button 
           className='bg-[#f4af01] text-white h-[48px] rounded-full shadow-md w-full cursor-pointer'
           >
            Log In as Guest
           </button>
        </div>
      </div>
      </Modal>
    </div>
  )
}
