// import logo from './logo.svg';
// import './App.css';

import { getAllByPlaceholderText } from "@testing-library/dom";



let Header = (props)=> { //props are readonly- we can't modify them
    let projectName = "My shop"
    let userName = "Rohit!"
    let searchString = "Default string"
    //props.details.name = null //props are readonly- we can't modify them
    let getAlert = (event)=>{
        event.preventDefault()
        console.log('we are searching the value for: ', searchString)
    }
    let getSearch = function(event){
        searchString = event.target.value
        console.log('>>>>>> ', event.target.value);
    }
  return (

    <nav className="navbar navbar-expand-sm navbar-light bg-light flex-sm-nowrap flex-wrap">
    <div className="container-fluid">
        <button className="navbar-toggler flex-grow-sm-1 flex-grow-0 me-2" type="button" data-bs-toggle="collapse" data-bs-target="#navbar5">
            <span className="navbar-toggler-icon"></span>
        </button>
        <span className="navbar-brand flex-grow-1"> <img src="./assets/images/neosoft.svg" height="35" className="d-inline-block align-top" alt="" />Cake Shop</span>
        <div className="navbar-collapse collapse flex-grow-1 justify-content-center" id="navbar5">
            <ul className="navbar-nav mx-auto">
                <li className="nav-item">
                    {/* <a className="nav-link" href="#">Home {props.details.name}</a> */}
                    {/* <a className="nav-link" href="#">Home {props.children} </a> */}
                    <a className="nav-link" href="#">Home </a>
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
                <input onChange={getSearch} className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                {/* {searchString} */}
                <button className="btn btn-outline-success my-2 my-sm-0" onClick={getAlert} type="submit">Search</button>
            </form>
        </div>
        <div className="flex-grow-1">
            Hi {userName}
        </div>
    </div>
</nav>
    
  );
}

export default Header;
