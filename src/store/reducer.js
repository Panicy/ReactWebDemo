import { combineReducers } from 'redux-immutable';
import {  reducer as HeaderReducer } from '../common/store';
import { reducer as PagesReducer } from '../pages/store';

const Reducer= combineReducers({
    Header:HeaderReducer,
    Pages:PagesReducer
})

export default Reducer;