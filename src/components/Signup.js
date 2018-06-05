import React, {Component} from 'react';
import {Router, Route} from 'react-router';
import {Link, hashHistory} from 'react-router'
import Logo from "./Logo";
import Galery from "./Galery";


class Signup extends Component {
    constructor() {
        super(...arguments);
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.state = {
            name: '',
            email: '',
            password: ''
        };
    }

    handleNameChange(e){
        this.setState({name:e.target.value})
    }
    handleEmailChange(e){
        this.setState({email:e.target.value})
    }
    handlePasswordChange(e){
        this.setState({password:e.target.value})
    }

    signUp(){
        let records = [];
        localStorage.setItem("username", this.state.name);
        localStorage.setItem("email", this.state.email);
        localStorage.setItem("password",this.state.password);
        localStorage.setItem("records", JSON.stringify(records));
        hashHistory.push(`/record`)
    }

    render() {
        return (
            <div>
                <div className="banner">
                    <div className="container">
                        <Logo/>
                        <div className="appointment">
                            <h2>Please sign up</h2>
                            <form >
                                <label for="inputName" className="sr-only">Name</label>
                                <input type="name" onChange={this.handleNameChange} id="inputName" className="form-control" placeholder="Name" required autofocus />
                                <label for="inputEmail" className="sr-only">Email address</label>
                                <input type="email" onChange={this.handleEmailChange} id="inputEmail" className="form-control" placeholder="Email address" required autofocus />
                                <label for="inputPassword" className="sr-only">Password</label>
                                <input type="password" onChange={this.handlePasswordChange} id="inputPassword" className="form-control" placeholder="Password" required />
                                <input type="submit" onClick={this.signUp.bind(this)} value="Sign up"/>
                            </form>
                            <div>
                                <Link to="/">{'Signin'}</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <Galery/>
            </div>
        );
    }
}
export default Signup;