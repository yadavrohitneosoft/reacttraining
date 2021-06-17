import {useEffect, useState} from "react"; 
import axios from "axios";
import {connect} from "react-redux";
import CartList from "../Cart/CartList";
import {withRouter} from "react-router-dom";
import Loader from '../../includes/Loader';

const Summary = (props) => {
    const [disableAddressLink, setDisableAddressLink] = useState(true)
    const [cakes, getCakes] = useState([]);
    const [loading, setLoading] = useState(true)

    let totalPrice = 0

    const activeNextUrl = () => {
        props.history.push('/checkout/address')
        setDisableAddressLink(false)
        props.onChange(disableAddressLink)
    }

    useEffect(() => {
        axios({
            url: process.env.REACT_APP_API_BASE_URL +'/cakecart',
            method: 'post'
        }).then(res => {
            if (res.data !== 'Session Expired') {
                const cakeList = res.data.data
                getCakes(cakeList);
                props.dispatch({
                    type: "SHOW_CART",
                    payload: {
                        data: cakeList
                    }
                })
            } else {
                props.history.push('/login')
            }
            setLoading(false) //true after response
        }, err => {
            console.log('error')
        })
    }, [])

    return (
        <>
        {loading ? <Loader></Loader> :
            <div className="container">
                <div className="row">
                        {
                            cakes.map((each, index) => {
                                totalPrice += each.price
                                return (
                                    <CartList data={each} key={index} page="cart_summary"/>
                                )
                            })
                        }
                </div>
                <div>
                    <span style={{float: "left"}}>Total Price: Rs. {totalPrice} /-</span>
                    <button className="btn btn-primary" style={{float: "right"}} onClick={activeNextUrl}>
                    <span>
                        Next
                    </span>
                    </button>
                </div> 
            </div>
        }
    </>
    )
}

export default connect() (withRouter(Summary))