//combine and update reducers and pass as one 

import authReducer from './authReducer'
import projectReducer from './projectReducer'
import {combineReducers} from 'redux'

const rootReducer = combineReducers({
    auth:authReducer,
    project:projectReducer
})

export default rootReducer