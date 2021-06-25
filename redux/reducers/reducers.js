import {combineReducers} from 'redux'
import auth from './auth'
import requestCollection from './requestCollection'
import associateBag from './associateBag'

export default combineReducers({
    auth,
    requestCollection,
    associateBag
})