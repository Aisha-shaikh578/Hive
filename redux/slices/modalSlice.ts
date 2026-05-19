import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  signUpModalOpen: false,
  logInModalOpen: false
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
    },
    openLogInModal: (state) => {
      state.logInModalOpen = true;
    },
    closeLogInModal: (state) => {
      state.logInModalOpen = false;
    }
  },
})

export const { openSignUpModal, closeSignModal, openLogInModal, closeLogInModal} = modalSlice.actions

export default modalSlice.reducer