import {combineReducers} from 'redux';
import listReducer from './List/list.reducer';
import ListReducer from './List/list.reducer'

const rootReducer=combineReducers({
    lists:listReducer,
})

export default rootReducer