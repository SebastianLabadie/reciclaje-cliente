import {combineReducers} from 'redux'
import auth from './auth'
import requestCollection from './requestCollection'
export default combineReducers({
    auth,
    requestCollection,
})