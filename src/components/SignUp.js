import React, {Component} from 'react'
import {Link} from 'react-router-dom'


class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            emptyField: false,
            failedPassword: false,
            usernameRepeated: false,
            username: '',
            password: '',
            verifyPassword: ''
        }
    }

    checkAndSignUp = () => {
        /*if(this.state.username === "" || this.state.password === ""){
            this.setState(
                {
                    emptyField:true,
                    failedPassword:false,
                    usernameRepeated:false
                }
            )
        }
        else {
                let queried = this.userService.registerUser(obj);
                console.log(queried)
                let redirect = this.props.history;
                let uService = this.userService;
                let stateLocal = this
                queried.then(function (res) {
                    console.log(res)
                    if (res.username !== null) {
                        uService.currentUser().then(
                            function (v) {
                            }
                        )
                        redirect.push("/table");
                    } else {
                        stateLocal.setState(
                            {
                                failedPassword: false,
                                usernameRepeated: true,
                                emptyField:false
                            }
                        )
                    }
                })
            }
        }*/
    }



    render() {
        return (
            <div className="container">
                <h1>Sign Up</h1>
                {
                    this.state.failedPassword === true && <div className="alert alert-danger" role="alert">
                        Passwords Don't Match
                    </div>
                }
                {
                    this.state.emptyField === true && <div className="alert alert-danger" role="alert">
                        Enter Both Username And Password. Cannot Sign Up Empty.
                    </div>
                }
                {
                    this.state.usernameRepeated === true && <div className="alert alert-danger" role="alert">
                        Username Not Available
                    </div>
                }
                <div className="form-group row">
                    <label htmlFor="username" id="usernameFld" className="col-sm-2 col-form-label">
                        First Name </label>
                    <div className="col-sm-10">
                        <input className="form-control" placeholder="Username"
                               id="username"/>
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="username" id="usernameFld" className="col-sm-2 col-form-label">
                        Last Name </label>
                    <div className="col-sm-10">
                        <input className="form-control" placeholder="Username"
                               id="username"/>
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="username" id="usernameFld" className="col-sm-2 col-form-label">
                        Email </label>
                    <div className="col-sm-10">
                        <input className="form-control" placeholder="Username"
                               id="username"/>
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="username" id="usernameFld" className="col-sm-2 col-form-label">
                        Username </label>
                    <div className="col-sm-10">
                        <input className="form-control" placeholder="Username"
                               id="username"/>
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="password" className="col-sm-2 col-form-label">
                        Password </label>
                    <div className="col-sm-10">
                        <input type="password" placeholder="Password" id="passwordFld"
                               className="form-control wbdv-password-fld" id="password"/>
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="password" className="col-sm-2 col-form-label">
                        Verify Password </label>
                    <div className="col-sm-10">
                        <input type="password" placeholder="Verify Password"
                               id="verifyPasswordFld"
                               id="verifyPasswordFld" className="form-control wbdv-password-fld"/>
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
                                <Link to="/" className="float-right">Cancel</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default SignUp;
