import axios from "axios";
import { useEffect, useState } from 'react';
import { connect } from "react-redux";
import { Link, withRouter } from 'react-router-dom'; 

let Header = (props)=> { //props are readonly- we can't modify  them 
    var [isLoggedOut,setUserLogout] = useState(false);
    let searchString = "";
    // var username = "";
    // var isUserName = false;
    // if(localStorage.token){ 
    //     var getData = localStorage.getItem('userData')
    //     var userInfo = JSON.parse(getData); 
    //     if(getData){
    //         isUserName = true;
    //         username = userInfo.name;  
    //     }
    // }
    //props.details.name = null //props are readonly- we can't modify them
    let getSearchString = (event)=>{
        event.preventDefault() 
        if(searchString !='' && searchString!=undefined){
            const url = '/search?q='+searchString;
            props.history.push(url);
        } 
        //console.log('we are searching the value for: ', searchString)
    }
    //get search value
    let getConsoleSearch = function(event){
        searchString = event.target.value 
    } 
    //logout
    let logout = ()=>{ 
        props.dispatch({
            type: "LOGOUT",
            payload:{
                token: localStorage.token
            }
        }) 
        props.history.push('/');
    }
    //only to get cart details everywhere
    
    useEffect(() => {
        if (localStorage.getItem('token')) {
            axios({
                url: process.env.REACT_APP_API_BASE_URL + '/cakecart',
                method: 'post'
            }).then(res => {
                const cartDataList = res.data.data
                props.dispatch({
                    type: "SHOW_CART_DETAILS",
                    payload: {
                        data: cartDataList
                    }
                })
            }, err => {
            })
        }
    }, [])
 

    return (
        <nav className="navbar sticky-top navbar-expand-sm navbar-light bgBlack flex-sm-nowrap flex-wrap">
            <div className="container-fluid">
                <button className="navbar-toggler flex-grow-sm-1 flex-grow-0 me-2" type="button" data-toggle="collapse" data-target="#navbar5">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <Link to="/" ><span className="navbar-brand flex-grow-1 logo">Cake Shop</span></Link>
                <div className="navbar-collapse collapse flex-grow-1 justify-content-center" id="navbar5">
                    {/* <ul className="navbar-nav mx-auto">
                        <li className="nav-item"> 
                            <Link to="/" className="nav-link" href="javascript:void()">Home </Link>
                        </li>
                         
                    </ul> */}
                   
                    <form className="form-inline my-2 my-lg-0">
                        <input onChange={getConsoleSearch} className="form-control fs12 mr-sm-2 lh17 " type="search" placeholder="Search" aria-label="Search" />
                        {/* {searchString} */}
                        <button className="btn btn-success my-2 my-sm-0 mr-sm-2 fs12 lh17 searchbtn" onClick={getSearchString} type="submit">Search</button>
                        {/* {!props.isLoggedin && <Link to="/login"><button className="btn fs12 btn-primary my-2 my-sm-0 lgbtn lh17">Login</button></Link> }
                        {props.isLoggedin && <button className="btn fs12 btn-danger my-2 my-sm-0 lh17" onClick={logout} >Logout</button> } */}
                        
                    </form>
                </div>
                <div className="ml10">
                    <ul className="navbar-nav mx-auto">
                        {props.isLoggedIn && <li><Link to="/cart" id="cart" style={{marginRight: '10px'}}><i className="fa fa-shopping-cart"></i>
                        <span className="crt">{props.totalItems}</span>
                        </Link></li> }
                        <li className="nav-item log"> 
                        {!props.isLoggedIn && <span className="valign">Hello, Guest!</span>}
                        {props.isLoggedIn && <span className="valign">Hello, {props.username}!</span>}
                        </li>
                        {props.isLoggedIn && 
                            <li className="nav-item dropdown log">
                                <button className="dropdown-toggle btn fs12 btn-success searchbtn my-2 my-sm-0 lh17" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                My Account
                                </button>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <Link to="/admin/dashboard" className="dropdown-item"  >My Dashboard</Link> 
                                     <Link to="/my-orders" className="dropdown-item"  >My Orders</Link>
                                </div>
                            </li>
                        }
                        <li className="nav-item log ">
                            {!props.isLoggedIn && <Link to="/login"><button className="btn fs12 btn-primary my-2 my-sm-0 lgbtn lh17">Login</button></Link>  }
                            {/* {props.isLoggedIn && 
                                <Link to="/my-orders"><button className="btn fs12 btn-success searchbtn my-2 my-sm-0 lh17">My Orders</button></Link>
                            } */}
                            {props.isLoggedIn && <button className="btn fs12 btn-danger my-2 my-sm-0 lh17" onClick={logout} >Logout</button> }
                        </li>
                    </ul>
                </div>
            </div>  
        </nav> 
    );
}
 
//here I passed Login to withRouter and it return with some additional things(with props) and then I exported modified Login below
//method 1
    // function mapStateToProps(state, props){
    //     return{
    //         ...props,
    //         username: state['username'],
    //         isLoggedIn: state['isLoggedIn']
    //     }
    // }
//export default connect(mapStateToProps)(Header) //connect calls two times, later we will see
                                //connect adds a prop to login component  named as dispatch()
 
export default connect((state, props) => { // connect((state, props) props pass kia h to props change honge to ye baar baar update hoga 
    return {
        username: state.AuthReducer.username,
        isLoggedIn: state.AuthReducer.isLoggedIn,
        totalItems: state.CartReducer.totalItems
    }
}) (withRouter(Header));