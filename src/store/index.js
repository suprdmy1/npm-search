import { createStore, combineReducers } from 'redux';
import searchReducer from '../reducers/searchReducer';

const store = createStore(combineReducers({
    packages: searchReducer
}));

export default store;
