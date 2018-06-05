import React, { Component } from 'react';
import { Router, Route} from 'react-router';

import {Link, hashHistory} from 'react-router'
import Logo from "./Logo";
import Galery from "./Galery";


class Signin extends Component {
    constructor() {
        super(...arguments);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.state = {
            email:'',
            password:''
        };
    }

    handleEmailChange(e){
        this.setState({email: e.target.value})
    }
    handlePasswordChange(e){
        this.setState({password: e.target.value})
    }

    signIn(){
        let email = localStorage.getItem("email");
        let password = localStorage.getItem("password");
        if(this.state.email===email && this.state.password===password){
            // do some login logic here, and if successful:
            hashHistory.push(`/record`)
        }
        else {
            alert('No correct email or password');
        }


    }
    render() {
        return (
            <div>
                <div className="banner">
                    <div className="container">
                        <Logo/>
                        <div className="appointment">
                            <h2>Please sign in</h2>
                            <form>
                                <label for="inputEmail" className="sr-only">Email address</label>
                                <input type="email" onChange={this.handleEmailChange} id="inputEmail" className="form-control" placeholder="Email address" required autofocus />
                                <label for="inputPassword" className="sr-only">Password</label>
                                <input type="password" onChange={this.handlePasswordChange} id="inputPassword" className="form-control" placeholder="Password" required />
                                <input type="submit" onClick={this.signIn.bind(this)} value="Sign in"/>
                        </form>
                            <div>
                                <Link to="/signup">{'Signup'}</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <Galery/>
            </div>
        )
    }
}
export default Signin;