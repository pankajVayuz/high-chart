// userSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  scoreBoardData: [],
  loading: false,
  userCheck:false
};

const userSlice = createSlice({
  name: 'partyData',
  initialState,
  reducers: {
    setScoreBoardState: (state, action) => {
      state.scoreBoardData = action.payload;
    },
    setUserCheck: (state, action) => {
      state.userCheck = action.payload;
    },
    resetUserCheck: (state) => {
      state.userCheck =false;
    }
   
  },
});

export const { setScoreBoardState,setUserCheck,resetUserCheck } = userSlice.actions;

export default userSlice.reducer;
