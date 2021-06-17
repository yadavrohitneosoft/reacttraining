function CartReducer(state={ //initial state 
    cart: [],
    totalPrice: 0,
    totalItems: 0,
    success: false,
    isRemoved: false
}, action){
   switch(action.type){
       case "ADDTOCART" : {
           state = {...state} //copy all previous state in state
           state.cart.push(action.payload?.data) 
           //state["totalItems"] += state.cart.length 
           state["success"] = true
           state["isRemoved"] = true
           return state;
       } 
       case "SHOW_CART_DETAILS" : {
            state = {...state}
            state["cart"] = action.payload?.data
            state["totalItems"] = action.payload?.data.length
            state["success"] = false
            state["removed"] = false
            return state
        }
       case "REMOVE_ITEM_FROM_CART" : {
           state = {...state}
           state["isRemoved"] = true
           return state
       }
    //    case "EMPTY_CART":{
    //         state = {...state} //copy all previous state in state 
    //         state.cart = [] //emptying the cart
    //         return state
    //    } 
       
       default: return state
   }
}

export default CartReducer