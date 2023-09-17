import { createSlice } from '@reduxjs/toolkit'

let initialValue = {}

export const userInfoSlice = createSlice({
  name: 'userInfoSlice',
  initialState: {
    user: initialValue,
  },
  //initialState,
  reducers: {
    displayInfo: (state, action) => {
      state.user = action.payload;
    },
  },
})

// Action creators are generated for each case reducer function
//export const { displayUsername, removeUsername } = usernameSlice.actions
export const { displayInfo } = userInfoSlice.actions

export default userInfoSlice.reducer