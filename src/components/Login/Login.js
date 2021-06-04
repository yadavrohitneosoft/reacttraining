import React, {Component} from "react";
import { Link } from "react-router-dom";

class Login extends React.PureComponent{

    constructor(props){
        super(props);
        console.log('props>>>>>>>>', props);
        // this.nameP = props.details.name
        // this.emailP = props.details.email
        //we can write this without any constructor as well
        this.state = { likes: 0, name: '', email: '', password: '' }
    }
    
    //like
    like = ()=>{
        this.setState({
            likes: this.state.likes+1
        })
    }
    //login fn
    doLogin = (event)=>{
        event.preventDefault()
        this.props.callme()
    }
    

    render(){
        console.log('rerender check>>>>>',this.state.likes)
        return(
            // <div height="100px">
            //     <label>{this.state.likes}</label>
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
                                    <div className="card-body   text-center">
                                        <form id="signupForm" >
                                            <div className=" pb-1">
                                                <h4 className="fw-bold mb-3">Login</h4>
                                                {/* <i className="fa fa-user fa-2x mb-1"></i> */}
                                                <div className="form-group mb-3">
                                                    <input type="email" id="email" className="form-control" placeholder="Username" required />
                                                    <span className="form-label" htmlFor="email"></span>
                                                </div>
                                                <div className="form-group mb-3">
                                                    <input type="password" id="password" className="form-control" placeholder="Password" required />
                                                    <span className="form-label" htmlFor="password"></span>
                                                </div>
                                                <button className="btn btn-primary btn-rounded gradient-custom px-3" onClick={this.doLogin} >Login</button>
                                            </div>
                                        </form>
                                        <div>
                                            <p className="mb-0">Don't have an account? <Link to="/signup" className="text-body fw-bold">Signup</Link></p>
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

export default Login