import {combineReducers} from 'redux'
import auth from './auth'
import requestCollection from './requestCollection'
import associateBag from './associateBag'
import profile from './profile'
export default combineReducers({
    auth,
    requestCollection,
    associateBag,
    profile,
})