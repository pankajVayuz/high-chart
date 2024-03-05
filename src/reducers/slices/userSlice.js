// userSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userList: [],
  loading: false,
  userCheck:false
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserListState: (state, action) => {
      state.userList = action.payload;
    },
    setUserCheck: (state, action) => {
      state.userCheck = action.payload;
    },
    resetUserCheck: (state) => {
      state.userCheck =false;
    }
   
  },
});

export const { setUserListState,setUserCheck,resetUserCheck } = userSlice.actions;

export default userSlice.reducer;
