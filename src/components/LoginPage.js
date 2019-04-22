import React from 'react';
import {Link} from 'react-router-dom'

class LoginPage extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            username: '',
            password: '',
            failed :  false
        }
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

    checkAndLogin = () => {

    }

    signUp = () => {
        this.props.history.push("/signUp");
    }


    render() {
        return(
            <div className="container">
                <h1>Sign In</h1>
                <div>
                    {
                        this.state.failed === true && <div className="alert alert-danger" role="alert">
                            Incorrect Credentials
                        </div>
                    }
                    <div className="form-group row">
                        <label htmlFor="username" className="col-sm-2 col-form-label">
                            Username </label>
                        <div className="col-sm-10">
                            <input onChange={this.usernameModified} className="form-control"
                                   id="username"
                                   placeholder="Alice"/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="password" className="col-sm-2 col-form-label">
                            Password </label>
                        <div className="col-sm-10">
                            <input onChange={this.passwordModified} type="password"
                                   className="form-control wbdv-password-fld"
                                   id="password" placeholder="123qwe#$%"/>
                        </div>
                    </div>

                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label"></label>
                        <div className="col-sm-10">
                            <button onClick={this.checkAndLogin} className="btn btn-primary btn-block">Sign In</button>
                        </div>
                    </div>

                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label"></label>
                        <div className="col-sm-10">
                            <button className="btn btn-primary btn-block" formAction="../index.html">Cancel</button>
                            <div className="row">
                                <div className="col-6">
                                    <a href="#">Forgot Password?</a>
                                </div>
                                <div className="col-6">
                                    <Link to="/signUp" className="checkbox float-right">Sign up</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default LoginPage;
