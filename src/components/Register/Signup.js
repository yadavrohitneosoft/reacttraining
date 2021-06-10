import React, {Component, useEffect, useState} from "react";
import { Link } from "react-router-dom";
import ReactFormInputValidation from "react-form-input-validation";
import axios from 'axios';
import  { Redirect } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
class Signup extends React.PureComponent{

    constructor(props){
        super(props);
        //console.log('props>>', props); 
        //we can write this without any constructor as well
        //this.state = { likes: 0, name: '', email: '', password: '' }
        this.state = {    
            firstname: "", lastname: "", email: "", password: "", cpassword: "", formErrors: {}    
        }; 
        this.initialState = this.state; //initial state
        this.isResponseMsg = false //initially set to false;
        this.responseMsg = ''
    }

    handleFormValidation() {    
        const {  firstname, lastname, email, password, cpassword } = this.state; //constant set    
        let formErrors = {}; //formerror set blank initially 
        let formIsValid = true; //form is valid true initially
        //First name     
        if(!firstname) {    
            formIsValid = false;    
            formErrors["firstnameErr"] = "First Name is required.";    
        } 
        //Last name
        if(!lastname) {    
            formIsValid = false;    
            formErrors["lastnameErr"] = "Last Name is required.";    
        }    
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
        //Confirm Password
        if(!cpassword) {    
            formIsValid = false;    
            formErrors["cPasswordErr"] = "Confirm Password is required.";    
        }else if(password !== cpassword){
            formIsValid = false;    
            formErrors["cPasswordErr"] = "Password should be matched.";
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
            console.log('You have been successfully registered.') 
            //console.log('>>>>>>>>>>>>>>>>>>>>>>>>>', this.state)     
            this.setState(this.initialState)
            //storing required info into userInfo var to send by api
            var apiurl = process.env.REACT_APP_BASE_URL+'/register'; //we can access static variables by process.env 
            var userInfo = {
                name: this.state.firstname + this.state.lastname,
                email: this.state.email,
                password: this.state.password
            }
            axios({
                    method:"post",
                    url:apiurl,
                    data: userInfo
                }).then((response)=>{ 
                    if(response.status==200){ 
                        this.isResponseMsg = true //set to true after getting response
                        this.responseMsg = response.data.message //show response message
                        this.props.history.push('/') //redirecting to home
                        console.log('response>>>>> ', this.isResponseMsg) 
                        //toast.success(response.data.message)
                    } 
                }, (error)=>{ 
                    console.log('list not found error:', error)
                }) 
        }else{
            console.log('Something went wrong') 
            return false;
        }  
    } 
    //like
    like = ()=>{
        this.setState({
            //likes: this.state.likes+1
        })
    }

    //register fn
    // doRegister = (event)=>{
    //     event.preventDefault()
    //     //this.props.callme()
    // }
    

    render(){
        //console.log('rerender check>>>>>',this.state.likes)
        const { firstnameErr, lastnameErr, emailErr, PasswordErr, cPasswordErr } = this.state.formErrors;
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
                                        <form id="signupForm" onSubmit={this.handleSubmit} >
                                            <div className=" pb-1">
                                                <h4 className="fw-bold mb-1">Create Account</h4>
                                                {this.isResponseMsg && <span>{this.responseMsg}</span>}
                                                {/* <i className="fa fa-user fa-2x mb-1"></i> */}
                                                <div className="form-group mb-2">
                                                    <input type="text" name="firstname" id="fname" 
                                                    className={firstnameErr ? 'form-control showError' : 'form-control'} 
                                                    placeholder="Enter First Name"     
                                                    onChange={this.handleChange}
                                                    value={this.state.firstname} />
                                                    <span className="error" htmlFor="fname">{firstnameErr ? firstnameErr : ""}</span>
                                                </div>
                                                <div className="form-group mb-2">
                                                    <input type="text"  name="lastname" id="lname" 
                                                    className={lastnameErr ? 'form-control showError' : 'form-control'} 
                                                    placeholder="Enter Last Name"  
                                                    onChange={this.handleChange}
                                                    value={this.state.lastname}
                                                    />
                                                    <span className="error" htmlFor="lname">{lastnameErr ? lastnameErr : ""}</span>
                                                </div>
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
                                                <div className="form-group mb-2">
                                                    <input type="password" name="cpassword" id="cpassword" 
                                                    className={cPasswordErr ? 'form-control showError' : 'form-control'}
                                                    placeholder="Enter Confirm Password"
                                                    onChange={this.handleChange}
                                                    value={this.state.cpassword}
                                                    />
                                                    <span className="error" htmlFor="cpassword">{cPasswordErr ? cPasswordErr : ""}</span>
                                                </div>
                                                <button className="btn btn-primary btn-rounded gradient-custom px-3" type="submit" >Register</button>
                                            </div>
                                        </form>
                                        <div>
                                            <p className="mb-0">Already have an account? <Link to="/login" className="text-body fw-bold">Signin</Link></p>
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