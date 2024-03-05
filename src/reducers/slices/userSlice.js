// userSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userList: [],
  loading: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserListState: (state, action) => {
      state.userList = action.payload;
    }
    
  },
});

export const { setUserListState, setLoading, deleteUser, loadMoreUsers, addUsers } = userSlice.actions;

export default userSlice.reducer;
