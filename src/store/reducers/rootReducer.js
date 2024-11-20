// Root Reducer

import { combineReducers } from 'redux';
import testReducer from './testReducer';
import vehicleReducer from "./vehicleReducer";
import vehiclePassesReducer from './vehiclePassesReducer';
import vehicleHistoryReducer from "./vehicleHistoryReducer";

export let rootReducer = combineReducers({
  test: testReducer,
  c: vehicleReducer,
  vehicleHistory: vehicleHistoryReducer,
  vehiclePasses: vehiclePassesReducer,
  
});

export default rootReducer;
