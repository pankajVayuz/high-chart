// reducers/index.js
import { combineReducers } from 'redux';

import userReducer from '../reducers/slices/userSlice';
import partyData from '../reducers/slices/scoreBoardSlice';


const rootReducer = combineReducers({

  user:userReducer,
  partyData:partyData
  // Add other reducers if any
});

export default rootReducer;
