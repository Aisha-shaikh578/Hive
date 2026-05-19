import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  signUpModalOpen: false
}

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openSignUpModal: (state) => {
      state.signUpModalOpen = true;
    },
    closeSignModal: (state) => {
      state.signUpModalOpen = false;
    }
  },
})

export const { openSignUpModal, closeSignModal} = modalSlice.actions

export default modalSlice.reducer