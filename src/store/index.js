import { createStore, combineReducers } from 'redux';
import { cashReducer } from './reducers/cashReducer';

const rootReducer = combineReducers({
    cash: cashReducer,
})

export const store = createStore(rootReducer);