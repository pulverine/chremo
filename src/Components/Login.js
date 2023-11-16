import React, { useState, useEffect } from 'react';
import Logo from "../Assets/Logo.jpg";
import Chremo_SS from "../Assets/Chremo_SS.png";
// import { Link } from 'react-router-dom';
import axios from 'axios';


class Add extends React.Component{
    constructor(){
        super();
        this.state={
            username:'',
            email:'',
            password:'',
        }
        this.changeHandler=this.changeHandler.bind(this);
        this.submitForm=this.submitForm.bind(this);
    }

    //Input Change Handler
    changeHandler(event){
        this.setState({
            [event.target.name]:event.target.value
        });
    }

    //Submit Form
    submitForm(){
        fetch('https://deepsolutions.pythonanywhere.com/register/',{
            method:'POST',
            body:JSON.stringify(this.state),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
    }

    render(){
        return (
            <div className="side-logo">
                <div className='logo-section'>
                    <img className = "logo" src={Logo} alt="company-logo"/>
                </div>
        
                <div className="login-section">
                    <img className="chremo_ss" src={Chremo_SS} alt="company-name"/>
        
                    <form className="login-form" >
                    
                    <div className="form-item">
                        <label htmlFor="username">Username</label>
                        <input type="text" id="username" name="username" onChange={this.changeHandler} required />
                    </div>
        
                    <div className="form-item">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" onChange={this.changeHandler} required />
                    </div>
                    
                    <div className="form-item">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" name="password" onChange={this.changeHandler} required />
                    </div>
        
                    <button className="btn-login" type="submit" onClick={this.submitForm} >Register</button>
                    
                    </form>
                    
                </div>
            </div>
        );
    }
};

export default Add;