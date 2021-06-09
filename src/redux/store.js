import { combineReducers, createStore} from 'redux';
import articleReducer from "./article-reduser";
import { reducer as form } from "redux-form";

let reducers = combineReducers({
    articleReducer,
    form
});

let store = createStore(reducers);

export default store;