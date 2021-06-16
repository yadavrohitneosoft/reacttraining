import axios from 'axios';

export const loginMiddleware = (data) => {
    return function (dispatch){ 
        //loading starts until response come
        dispatch({
            type: "LOADING_STARTED", 
        })     
        axios({
            method:"post",
            url: process.env.REACT_APP_API_BASE_URL+'/login',
            data: {email: data.email, password: data.password}
        }).then(res=>{   
            if(res.data.email){ 
                localStorage.setItem('token', res.data.token);
                localStorage.setItem('userData', JSON.stringify(res.data));
                dispatch({
                    type: "LOGIN_SUCCESS",
                    payload:{
                        token: res.data.token,
                        username: res.data.name
                    }
                }) 
            }else{
                dispatch({
                    type: "LOGIN_FAILURE",
                    payload:{
                        res_message: res.data.message, 
                    }
                })
            }
        }, err =>{ 
            dispatch({
                type: "LOGIN_FAILURE",
                payload:{
                    res_message: 'Something went wrong!', 
                }
            })
        }) 
    } 
}
// add to cart 
export const addToCartMiddleware = (data) => {
    return function(dispatch){
        //loading starts until response come
        dispatch({
            type: "LOADING_STARTED", 
        }) 
        axios({
            method: 'post',
            url: process.env.REACT_APP_API_BASE_URL+'/addcaketocart',
            data: {
                    cakeid: data.cakeid, 
                    name: data.name, 
                    price: data.price,
                    image: data.image, 
                    weight: data.weight
                }
        }).then(res => {
            dispatch({
                type: "ADDTOCART",
                payload: {
                    data: res.data.data
                }
            })
        }, err => {})
    }
}
//remove one item from cart
export const removeItemFromCartMiddleware = (cakeId) => {
    return function(dispatch){
        //loading starts until response come
        dispatch({
            type: "LOADING_STARTED", 
        }) 
        axios({
            method: 'post',
            url: process.env.REACT_APP_API_BASE_URL+'/removecakefromcart',
            data: {cakeid: cakeId}
        }).then(res => {
            dispatch({
                type: 'REMOVE_ITEM_FROM_CART',
                payload:{
                    data: res.data
                }
            })
        }, err => {})
    }
}
//checkout middleware
export const checkoutMiddleware = (data) => {
    return function(dispatch){
        //loading starts until response come
        dispatch({
            type: "LOADING_STARTED", 
        })
        // axios({
        //     method: 'post',
        //     url: process.env.REACT_APP_API_BASE_URL+'/removecakefromcart',
        //     data: {cakeid: cakeId}
        // }).then(res => {
        //     dispatch({
        //         type: 'REMOVE_ITEM_FROM_CART',
        //         payload:{
        //             data: res.data
        //         }
        //     })
        // }, err => {})
    }
} 
