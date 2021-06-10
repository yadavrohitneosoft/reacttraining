import React, {Component} from "react";
import { Link } from "react-router-dom";
import ReactFormInputValidation from "react-form-input-validation";
import axios from 'axios';
import  { Redirect } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {withRouter} from 'react-router-dom';

class Login extends React.PureComponent{
    emailError
    passwordError
    apiurl
    constructor(props){
        super(props);
        this.emailError = this.passwordError = "";
        console.log('login props>>', props); 
        //we can write this without any constructor as well
        //this.state = { likes: 0, name: '', email: '', password: '' }
        this.state = {    
            email: "", password: "", formErrors: {}    
        }; 
        this.initialState = this.state; //initial state
        this.isResponseMsg = false //initially set to false;
        this.responseMsg = '';
        //email event
        // changeEmail = (event)=>{
        //     this.setState({
        //         email: event.target.value
        //     })
        // }
        //password event
        // changePassword = (event)=>{
        //     this.setState({
        //         password: event.target.value
        //     })
        // }
    }
     
    //login fn
    // doLogin = (event)=>{
    //     event.preventDefault()
    //     this.props.callme()
    // }
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
            //console.log('>>>>>>>>>>>>>>>>>>>>>>>>>', this.state)     
            //storing required info into userInfo var to send by api
            var apiurl = process.env.REACT_APP_BASE_URL+'/login'; //we can access static variables by process.env 
            var userInfo = { 
                email: this.state.email,
                password: this.state.password
            }
            axios({
                    method:"post",
                    url:apiurl,
                    data: userInfo
                }).then(res=>{ 
                    if((res.data.email)){ 
                        this.isResponseMsg = true //set to true after getting response
                        this.responseMsg = res.data.message //show response message
                        //this.props.history.push('/') //redirecting to home 
                        localStorage.setItem('token', res.data.token);
                        localStorage.setItem('userData', JSON.stringify(res.data));
                        console.log('response>>>>> ', res.data) 
                        //this.setState(this.initialState) //reset fields after successfull login
                        toast(this.responseMsg, { 
                            position: "top-right",
                            autoClose: 5000,
                            hideProgressBar: true,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: 0
                        });
                    } 
                }, err =>{ 
                    console.log('list not found error:', err)
                }) 
        }else{
            console.log('Something went wrong') 
            return false;
        }  
    } 
    

    render(){ 
        const { emailErr, PasswordErr } = this.state.formErrors;
        return( 
            <section className="intro">
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
                                                {/* {this.isResponseMsg && <span>{this.responseMsg}</span>} */}
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
                                                <button className="btn btn-primary btn-rounded gradient-custom px-3" type="submit" >Login</button>
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

Login = withRouter(Login) 
//here I passed Login to withRouter and it return with some additional things(with props)
//and then I exported modified Login below
export default Login