import { combineReducers, createStore } from 'redux';
import articleReducer from "./article-reduser";


let redusers = combineReducers({
    articleReducer
});

let store = createStore(redusers);

export default store;