import { createStore, combineReducers, applyMiddleware  } from "redux";
import AuthReducer from "./AuthReducer";
import CartReducer from './CartReducer';
import thunk from 'redux-thunk';
import createSaga from 'redux-saga';
import RootSaga from './Sagas'

let middle = store => next => action => {
    let currDate = new Date() //date 
    console.log(JSON.stringify(action.type) , 'Action dispatched At: ', currDate)
    next(action) //action will be passed here
}
var rootReducers = combineReducers({AuthReducer, CartReducer}) //combining the multiple reducers
let Store = createStore(rootReducers, applyMiddleware(middle, thunk)); //createStore is inbuilt fn

export default Store;

//alert(JSON.stringify(Store.getState()))
 