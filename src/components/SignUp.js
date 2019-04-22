import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import User from "../model/User";
import UserService from "../services/UserService";


class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            emptyField: false,
            failedPassword: false,
            usernameRepeated: false,
            fname:'',
            lname:'',
            username: '',
            password: '',
            verifyPassword: '',
            email:''
        }
        this.userService = new UserService();
    }

    checkAndSignUp = () => {
        let obj = new User(this.state.username, this.state.password, this.state.fname, this.state.lname,
            this.state.email);
        let t= this;
        let redirect = this.props.history;
        this.userService.registerUser(obj).then(
            function (user) {
                if(user.username === undefined){
                    t.setState(
                        {
                            usernameRepeated:true
                        }
                    )
                }
                else{
                    redirect.push("/loginSuccess/"+user.username);
                }
            }
        )
    }

    usernameModified = (event) => {
        this.setState(
            {
                username: event.target.value
            }
        )
    }

    passwordModified = (event) => {
        this.setState(
            {
                password: event.target.value
            }
        )
    }

    firstNameModified = (event) => {
        this.setState(
            {
                fname: event.target.value
            }
        )
    }

    lastNameModified = (event) => {
        this.setState(
            {
                lname: event.target.value
            }
        )
    }

    emailModified = (event) => {
        this.setState(
            {
                email: event.target.value
            }
        )
    }



    render() {
        return (
            <div className="container">
                <h1>Sign Up</h1>
                {
                    this.state.usernameRepeated === true && <div className="alert alert-danger" role="alert">
                        Username Not Available
                    </div>
                }
                <div className="form-group row">
                    <label onChange={this.firstNameModified} htmlFor="username" id="usernameFld" className="col-sm-2 col-form-label">
                        First Name </label>
                    <div className="col-sm-10">
                        <input className="form-control" placeholder="First Name"
                               id="username"/>
                    </div>
                </div>
                <div className="form-group row">
                    <label onChange={this.lastNameModified} htmlFor="username" id="usernameFld" className="col-sm-2 col-form-label">
                        Last Name </label>
                    <div className="col-sm-10">
                        <input className="form-control" placeholder="Last Name"
                               id="username"/>
                    </div>
                </div>
                <div className="form-group row">
                    <label onChange={this.emailModified} htmlFor="username" id="usernameFld" className="col-sm-2 col-form-label">
                        Email </label>
                    <div className="col-sm-10">
                        <input className="form-control" placeholder="Email"
                               id="username"/>
                    </div>
                </div>
                <div onChange={this.usernameModified} className="form-group row">
                    <label htmlFor="username" id="usernameFld" className="col-sm-2 col-form-label">
                        Username </label>
                    <div className="col-sm-10">
                        <input className="form-control" placeholder="Username"
                               id="username"/>
                    </div>
                </div>
                <div onChange={this.passwordModified} className="form-group row">
                    <label htmlFor="password" className="col-sm-2 col-form-label">
                        Password </label>
                    <div className="col-sm-10">
                        <input type="password" placeholder="Password" id="passwordFld"
                               className="form-control wbdv-password-fld" id="Password"/>
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="password" className="col-sm-2 col-form-label"></label>
                    <div className="col-sm-10">
                        <button onClick={this.checkAndSignUp} type="submit" id="registerBtn"
                                className="btn btn-primary btn-block">Sign Up
                        </button>
                        <div className="row">
                            <div className="col-6">
                                <Link to="/login">Login</Link>
                            </div>
                            <div className="col-6">
                                <Link to="/signUp" className="float-right">Cancel</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default SignUp;
