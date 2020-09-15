import {combineReducers} from 'redux'
import MainReducer from './MainReducer'

 const rootReducer =combineReducers({
   reducerData:MainReducer,
  
} )

export default rootReducer