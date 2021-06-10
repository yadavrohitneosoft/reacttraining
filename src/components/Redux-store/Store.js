


let middle = store=>next=>action=>{ //here we can take any argument name instead of store,next,action
    alert('reducer pe jane se pahle yahan rishwat do' + JSON.stringify(store.getState()))
    next(action)
}

var reducers = combineReducers({AuthReducers, CartReducer})

let store = CreateStore(reducers, applyMiddleware(middle))

export default Store