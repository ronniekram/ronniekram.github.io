import { combineReducers } from 'redux';
import islandReducer from './IslandReducer';
import villagerReducer from './VillagerReducer';

const rootReducer = combineReducers({
  islandReducer,
  villagerReducer
})

export default rootReducer;