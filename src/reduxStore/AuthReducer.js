function AuthReducer(state={ //initial state 
     token: localStorage.token, //initially setting token from localstorage, whenever page reload it will set
     isLoggedIn: localStorage.token?true:false, //or !!localStorage.token whenever page will be reload isLoggedIn will be check from here
     username: localStorage.token ? JSON.parse(localStorage.userData).name : undefined,
     isLoading: false,
     response_message: ''
}, action){
    switch(action.type){
        case "LOADING_STARTED":{
            state = {...state}
            state['isLoading'] = true
            return state
        }
        case "LOGIN_SUCCESS":{
            state = {...state}
            state['token']      = action.payload?.token // here ? means whenever there will be somethnig in action.payload - then only token will be read 
            state['username']   = action.payload?.username
            state['isLoading']  = false
            state['isLoggedIn'] = true //we can also write this way state.isLoggedIn = true
            return state;
        } 
        case "LOGIN_FAILURE":{
            state = {...state}
            state['response_message'] = action.payload?.res_message
            state['isLoading'] = false
            return state
        }
        case "LOGOUT":{
            state = {...state}
            localStorage.clear()
            state["username"] = undefined
            state.isLoggedIn = false
            return state;
        }
        default: return state
    }
}

export default AuthReducer