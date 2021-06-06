import { combineReducers, createStore} from 'redux';
import articleReducer from "./article-reduser";

let reducers = combineReducers({
    articleReducer
});

let store = createStore(reducers);

export default store;