import React, {Component} from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {withRouter} from 'react-router-dom';
import { css } from "@emotion/react";
import HashLoader from "react-spinners/HashLoader";
import { connect } from "react-redux";
import {loginMiddleware} from '../../reduxStore/Middlewares'

class Login extends React.PureComponent{
    isLoading = false;
    isResponseMsg = false;
    isSubmit = false;
    responseMsg = '';
    constructor(props){
        super(props); 
        //console.log('login props>>', props); 
        //we can write this without any constructor as well
        //this.state = { likes: 0, name: '', email: '', password: '' }
        this.state = {    
            email: "", password: "", formErrors: {}    
        }; 
        this.initialState = this.state; //initial state
    }
    
    handleFormValidation() {    
        const { email, password } = this.state; //constant set    
        let formErrors = {}; //formerror set blank initially 
        let formIsValid = true; //form is valid true initially  
        //Email    
        if(!email) {    
            formIsValid = false;    
            formErrors["emailErr"] = "Email ID is required.";        
        }else if(!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))) {    
            formIsValid = false;    
            formErrors["emailErr"] = "Invalid email ID.";    
        }
        //Password
        if(!password) {    
            formIsValid = false;    
            formErrors["PasswordErr"] = "Password is required.";    
        }   
    
        this.setState({ formErrors: formErrors });    
        return formIsValid;    
    } 
    //getting inputs
    handleChange = (e) => {    
        const { name, value } = e.target;    
        this.setState({ [name]: value });    
    } 
    //form submission here
    handleSubmit = (e) => {    
        e.preventDefault();    
        if (this.handleFormValidation()) {  
            //here sending data to middleware
            this.props.dispatch(loginMiddleware(this.state)) 
        }else{
            console.log('Something went wrong') 
            return false;
        }  
    } 
    

    render(){ 
        const { emailErr, PasswordErr } = this.state.formErrors;
        return( 
            <section className="intro">
                <HashLoader loading={this.isLoading} color="#FEBD69" css={css`display: block;margin: 0 auto;`} size={40} />
                <ToastContainer position="top-center" autoClose={5000} hideProgressBar newestOnTop closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
                <div className="mask d-flex align-items-center h-100" style={{ }}>
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                                <img src="./assets/images/users.png" className="img-responsive signUpImg" height="328" />
                            </div>
                            <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                                <div className="card" style={{borderradius: "1rem"}}>
                                    <div className="card-body   text-center">
                                        <form id="signupForm" onSubmit={this.handleSubmit} >
                                            <div className=" pb-1">
                                                <h4 className="fw-bold mb-1">Login</h4>
                                                {!this.props.isLoggedIn && <span className="resmsg">{this.props.response_message}</span>}
                                                {/* <i className="fa fa-user fa-2x mb-1"></i> */}
                                                <div className="form-group mb-2">
                                                    <input type="text" name="email" id="email" 
                                                    className={emailErr ? 'form-control showError' : 'form-control'}
                                                    placeholder="Enter Email ID" 
                                                    onChange={this.handleChange}
                                                    value={this.state.email}
                                                    />
                                                    <span className="error" htmlFor="email">{emailErr ? emailErr : ""}</span>
                                                </div>
                                                <div className="form-group mb-2">
                                                    <input type="password" name="password" id="password" 
                                                    className={PasswordErr ? 'form-control showError' : 'form-control'}
                                                    placeholder="Enter Password" 
                                                    onChange={this.handleChange}
                                                    value={this.state.password}
                                                    />
                                                    <span className="error" htmlFor="password">{PasswordErr ? PasswordErr : ""}</span>
                                                </div>
                                            { !this.props.isLoading && 
                                                <button className="btn btn-primary btn-rounded gradient-custom px-3" type="submit" >Login</button> 
                                            } 
                                            { this.props.isLoading && <button className="btn btn-primary btn-rounded gradient-custom px-3" type="button" >Processing...</button>
                                            }
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
//connect adds a prop to component named as dispatch()
Login = connect(function (state, props){
    if (state.AuthReducer?.isLoggedIn) { 
        props.history.push('/')
    }else{
        return{
            isLoading: state.AuthReducer?.isLoading,
            response_message: state.AuthReducer.response_message
        }
    }
})(Login)
//here I passed Login to withRouter and it return with some additional things(with props)
export default withRouter(Login) 