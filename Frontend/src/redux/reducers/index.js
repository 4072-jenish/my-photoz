import { combineReducers } from 'redux'
import authReducer from './authReduser'

const rootReducer = combineReducers({
  auth: authReducer
})

export default rootReducer
