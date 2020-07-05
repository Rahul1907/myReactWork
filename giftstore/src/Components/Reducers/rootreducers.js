import {combineReducers} from 'redux'
import bagReducers from './bagreducer'

const rootreducers=combineReducers({
  gifts:bagReducers
})

export default rootreducers