import {Link, withRouter} from "react-router-dom"; 
import {connect} from "react-redux"; 
import { removeItemFromCartMiddleware } from "../../reduxStore/Middlewares";

let CartList = (props) => {

    // const addOneCakeToCart = (cakeId) => {
    //     props.dispatch(addCartMiddleware(cakeId))
    // }

    // const removeOneCakeFromCart = (cakeId) => {
    //     props.dispatch(removeOneCakeFromCartMiddleware(cakeId))
    // }

    //removeItemFromCart function
    const removeItemFromCart = (cakeId) => {
        props.dispatch(removeItemFromCartMiddleware(cakeId))
    }

    return (
        <div className="row mb-4" >
            <div className="col-md-12 col-lg-12 col-xl-12">
                <div className="d-flex justify-content-between ddd">
                <Link to={'/cakeDetails/'+props.data.cakeid}><img className="img-fluid cimage"
                    src={props.data.image} alt={props.data.name} /> </Link>
                    <p className="mb-0" style={{lineHeight: '48px'}}><span><strong id="summary">Rs. {props.data.price} /-</strong></span></p>
                    { props.page === 'cart' &&
                    <button onClick={() => removeItemFromCart(props.data.cakeid)} className="card-link-secondary small text-uppercase mr-3" style={{    lineHeight: '48px'}}><i className="fa fa-trash mr-1"></i> Remove Item </button> }
                </div>
            </div>
        </div> 
    )
}

CartList = connect(function (state, props){
    console.log("cartlist>>state", state.CartReducer) 
    if (state.CartReducer.isRemoved) {
        state.CartReducer.isRemoved = false 
        window.location.reload()
    }else{
        return {}
    }
})(CartList)
export default withRouter(CartList)