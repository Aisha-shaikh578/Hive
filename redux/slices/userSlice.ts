import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  name: '',
  username: '',
  email: '',
  uid: '',
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    signInUser: (state, action) => {
      state.name = action.payload.name
      state.username = action.payload.username
      state.email = action.payload.email
      state.uid = action.payload.uid
    },
    signOutUser: (state) => {
      state.name = ''
      state.username = ''
      state.email = ''
      state.uid = ''
    }
  },
})

// Action creators are generated for each case reducer function
export const { signInUser, signOutUser } = userSlice.actions

export default userSlice.reducer