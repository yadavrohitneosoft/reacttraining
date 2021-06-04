// import logo from './logo.svg';
// import './App.css';
import { getAllByPlaceholderText } from "@testing-library/dom";
import { useState } from 'react';
import { Link } from 'react-router-dom';

let Header = (props)=> { //props are readonly- we can't modify them
    let projectName = "My shop"
    let userName = "Rohit!"
    let searchString = "Default string"
    //props.details.name = null //props are readonly- we can't modify them
    let getAlert = (event)=>{
        event.preventDefault()
        console.log('we are searching the value for: ', searchString)
    }
    //get search value
    let getSearch = function(event){
        searchString = event.target.value
        console.log('>>>>>> ', event.target.value);
    }
    //login property check
    console.log('after logged in value of login>>>>', props.isLoggedin)
    //var [str, setString] = useState('login'); //str is var, setString is a function
    
    //logout
    let logout = ()=>{
        
    }

    return (

        <nav className="navbar sticky-top navbar-expand-sm navbar-light bgBlack flex-sm-nowrap flex-wrap">
            <div className="container-fluid">
                <button className="navbar-toggler flex-grow-sm-1 flex-grow-0 me-2" type="button" data-toggle="collapse" data-target="#navbar5">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <span className="navbar-brand flex-grow-1 logo"> <img src="./assets/images/neosoft.svg" height="35" className="d-inline-block align-top" alt="" />Cake Shop</span>
                <div className="navbar-collapse collapse flex-grow-1 justify-content-center" id="navbar5">
                    <ul className="navbar-nav mx-auto">
                        <li className="nav-item">
                            {/* <a className="nav-link" href="#">Home {props.details.name}</a> */}
                            {/* <a className="nav-link" href="#">Home {props.children} </a> */}
                            <Link to="/" className="nav-link" href="javascript:void()">Home </Link>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">About Us</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Contact Us</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Others
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <a className="dropdown-item" href="#">Action</a> 
                            </div>
                        </li>
                    </ul>
                    <form className="form-inline my-2 my-lg-0">
                        <input onChange={getSearch} className="form-control fs12 mr-sm-2 lh17 " type="search" placeholder="Search" aria-label="Search" />
                        {/* {searchString} */}
                        <button className="btn btn-success my-2 my-sm-0 mr-sm-2 fs12 lh17 searchbtn" onClick={getAlert} type="submit">Search</button>
                        {!props.isLoggedin && <Link to="/login"><button className="btn fs12 btn-primary my-2 my-sm-0 lgbtn lh17">Login</button></Link> }
                        {props.isLoggedin && <button className="btn fs12 btn-danger my-2 my-sm-0 lh17" onClick={logout} >Logout</button> }
                    </form>
                </div>
                {/* <div className="flex-grow-1">
                    <ul className="navbar-nav mx-auto">
                        <li className="nav-item log"> 
                        Explanation: !props.isLoggedin &&  --> if props.isLoggedin will not be true then && will execute and button will show 
                            {!props.isLoggedin && <Link to="/login"><button className="btn btn-primary my-2 my-sm-0 lgbtn lh17">Login</button></Link> }
                            {props.isLoggedin && <button className="btn btn-danger my-2 my-sm-0 lh17" onClick={logout} >Logout</button> }
                        </li>
                    </ul>
                </div> */}
            </div>
        </nav> 
    );
}

export default Header;
