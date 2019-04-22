import React from 'react';

class LoginSuccess extends React.Component{
    constructor(props){
        super(props);
        this.username = this.props.match.params.username;
    }
    render() {
        return(
            <h1>Welcome {this.username} </h1>
        )
    }
}
export default LoginSuccess;
