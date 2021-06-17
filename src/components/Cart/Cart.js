import { connect } from "react-redux"
import { Redirect, withRouter, Link } from "react-router-dom"
import axios from 'axios'
import {useEffect, useState} from 'react'
import {removeItemFromCartMiddleware, checkoutMiddleware} from '../../reduxStore/Middlewares';
import { css } from "@emotion/react";
import HashLoader from "react-spinners/HashLoader";
import CartList from './CartList'
import Loader from '../../includes/Loader';

let Cart = (props)=>{
    const [getCartData, setCartData] = useState([])
    const [totalItems, setTotalItems] = useState(0)
    const [loading, setLoading] = useState(true)
    let totalPrice = 0 
   
    useEffect( ()=> {
        axios({
            method: 'post',
            url: process.env.REACT_APP_API_BASE_URL+'/cakecart'
        }).then(res => {
            if(res.data != 'SESSION_EXPIRED'){
                const getCart = res.data.data
                setTotalItems(getCart.length) //set cart item length
                setCartData(getCart) //store cart data 
                props.dispatch({
                    type: "SHOW_CART_DETAILS",
                    payload:{
                        data: getCart
                    }
                })
                setLoading(false)
            }else{
                props.history.push('/login')
            }
        }, err => {
            console.log('cart error: ', err)
        })
    }, [])
 
    //go to checkout
    const checkoutItems = (data) => {
        props.dispatch(checkoutMiddleware(data))
    }

    // if(props.name!=='rohit') //condition based redirecting
    //     return (
    //         <Redirect to="/" ></Redirect>
    //     )
    // else 
       
    return (
        <> 
         {loading ? <Loader></Loader> :
            <section>
                <div className="row"> 
                    <div className="col-lg-8"> 
                        <div className="mb-3">
                            <div className="pt-4 wish-list">
                            <h5 className="mb-4">Cart (<span>{totalItems}</span> items)</h5> 
                            {/* repeater start */}
                                { 
                                    getCartData.map((each, index) => {
                                        totalPrice += each.price //adding the price of each item
                                        return (
                                            <CartList data={each} key={index} page="cart"/>
                                        )
                                    }) 
                                }
                            {/* repeater end */}
                        </div>
                    </div> 
                </div> 
                <div className="col-lg-4"> 
                    <div className="mb-3">
                        <div className="pt-4">

                        <h5 className="mb-3">Cart Summary</h5>

                        <ul className="list-group list-group-flush">
                            <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                            Temporary amount
                            <span>Rs. {totalPrice} /-</span>
                            </li>
                            <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                            Shipping
                            <span>FREE</span>
                            </li>
                            <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                            <div>
                                <strong>Total Amount</strong> 
                            </div>
                            <span><strong>Rs. {totalPrice} /-</strong></span>
                            </li>
                        </ul>
                        
                        <Link to={'/checkout'} ><button type="button" className="btn btn-primary btn-block" >Checkout</button></Link>
                        {/* <button type="button" className="btn btn-primary btn-block" onClick={ () => checkoutItems(getCartData)} >Checkout</button> */}
                        {/* <button type="button" className="btn btn-primary btn-block" onClick={ () => checkoutItems(getCartData)} >Please wait... <img src="./assets/images/spinner.gif" height="30" /></button> */}
                        </div>
                    </div>  
                    </div> 
                </div> 
            </section> 
        }
    </> 
    )
}

export default connect()(withRouter(Cart))