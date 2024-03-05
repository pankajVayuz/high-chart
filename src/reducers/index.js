// reducers/index.js
import { combineReducers } from 'redux';

import userReducer from '../reducers/slices/userSlice';


const rootReducer = combineReducers({

  user:userReducer,
  // Add other reducers if any
});

export default rootReducer;
