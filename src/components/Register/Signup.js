import React, {Component} from "react";
import { Link } from "react-router-dom";

class Signup extends React.PureComponent{

    constructor(props){
        super(props);
        console.log('props>>>>>>>>', props);
        // this.nameP = props.details.name
        // this.emailP = props.details.email
        //we can write this without any constructor as well
        this.state = { likes: 0, name: '', email: '', password: '' }
        //defining regex
        const regExp = RegExp(
            /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/
        )
    }
    
    
    //like
    like = ()=>{
        this.setState({
            likes: this.state.likes+1
        })
    }
    //login fn
    doRegister = (event)=>{
        event.preventDefault()
        //this.props.callme()
    }
    

    render(){
        console.log('rerender check>>>>>',this.state.likes)
        return(
            // <div height="100px">
            //     <label>{this.state.likes}</span>
            //     <button onClick={this.like}>Click me</button>
            // </div> 
            <section className="intro">
                <div className="mask d-flex align-items-center h-100" style={{ }}>
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                                <img src="./assets/images/users.png" className="img-responsive signUpImg" height="328" />
                            </div>
                            <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                                <div className="card" style={{borderradius: "1rem"}}>
                                    <div className="card-body  text-center">
                                        <form id="signupForm" >
                                            <div className=" pb-1">
                                                <h4 className="fw-bold mb-3">Create Account</h4>
                                                {/* <i className="fa fa-user fa-2x mb-1"></i> */}
                                                <div className="form-group mb-3">
                                                    <input type="text" id="fname" className="form-control" placeholder="First Name" required />
                                                    <span className="form-label" htmlFor="fname"></span>
                                                </div>
                                                <div className="form-group mb-3">
                                                    <input type="text" id="lname" className="form-control" placeholder="Last Name" required />
                                                    <span className="form-label" htmlFor="lname"></span>
                                                </div>
                                                <div className="form-group mb-3">
                                                    <input type="email" id="email" className="form-control" placeholder="Username" required />
                                                    <span className="form-label" htmlFor="email"></span>
                                                </div>
                                                <div className="form-group mb-3">
                                                    <input type="password" id="password" className="form-control" placeholder="Password" required />
                                                    <span className="form-label" htmlFor="password"></span>
                                                </div>
                                                <div className="form-group mb-3">
                                                    <input type="password" id="cpassword" className="form-control" placeholder="Confirm Password" required />
                                                    <span className="form-label" htmlFor="cpassword"></span>
                                                </div>
                                                <button className="btn btn-primary btn-rounded gradient-custom px-3" onClick={this.doRegister} >Register</button>
                                            </div>
                                        </form>
                                        <div>
                                            <p className="mb-0">Have an account? <Link to="/login" className="text-body fw-bold">Signin</Link></p>
                                        </div>
                                    </div>
                                </div>
                            </div> 
                        </div>
                    </div>
                </div>
            </section> 
        )
    }

}

export default Signup