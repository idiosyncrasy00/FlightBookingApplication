import { createSlice } from '@reduxjs/toolkit'

let initialValue = ''

export const usernameSlice = createSlice({
  name: 'usernameSlice',
  initialState: {
    user: initialValue,
  },
  //initialState,
  reducers: {
    // addTask: (state, action) => {
    //   let newTasks = state.items2
    //   newTasks.push(action.payload.task)
    //   state.items2 = newTasks;
    // },
    // removeTask: (state, action) => {
    //   let newTasks = state.items2;
    //   newTasks.splice(action.payload.index, 1);
    //   state.items2 = newTasks;
    // }
    displayUsername: (state, action) => {
      state.user = action.payload;
    },
    removeUsername: (state, action) => {
      state.user = '';
    },
  },
})

// Action creators are generated for each case reducer function
export const { displayUsername, removeUsername } = usernameSlice.actions

export default usernameSlice.reducer