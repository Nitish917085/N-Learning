import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user:{},
  courseDetails:{},
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUsers: (state, action) => {
      state.user = action.payload;
    },     
    setCourseDetails:(state,action)=>{
      state.courseDetails = action.payload
    }
  },
});

export const { setUsers,setCourseDetails} = userSlice.actions;

export default userSlice.reducer;
