import {call, takeEvery, put, all} from 'redux-saga/effects';
import axios from 'axios';

function addCake(){
    console.log('axios hit will go from here')
}

//generator function
function *addCakeGenerator(action, props){
    //var result = yield(call(addCake, action)) //call()
    const result =  yield axios({
                        method: 'post',
                        url: process.env.REACT_APP_BASE_URL+"/addcake",
                        data: action.payload || {}
                    })
    if(result.data){
        yield put({type:'ADD_CAKE_SUCCESS', payload: result.data})
    }else{
        yield put({type:'ADD_CAKE_FAILURE'})
    } 
}

//add cake saga
function *addCakeSaga(action, props){
    yield takeEvery('ADD_CAKE', addCakeGenerator)
}

//generator function
function *loginGenerator(action, props){ 
    // const result =  yield axios({
    //                     method: 'post',
    //                     url: process.env.REACT_APP_BASE_URL+"/addcake",
    //                     data: action.payload || {}
    //                 })
    // if(result.data){
    //     yield put({type:'LOGIN_SUCCESS', payload: result.data})
    // }else{
    //     yield put({type:'LOGIN_FAILURE'})
    // } 
}
//login saga
export function *loginSaga(action, props){
    yield takeEvery('LOGIN', loginGenerator)
}

//root saga
export default function *RootSaga(action, props){
    yield all([addCakeGenerator, loginGenerator])
}