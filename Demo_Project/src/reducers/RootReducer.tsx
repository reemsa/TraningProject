import { combineReducers } from 'redux'
import logInReducer from './LogInReducer'
import ErrorReducer from './ErrorReducer'
export default combineReducers({
    logInReducer,ErrorReducer
})