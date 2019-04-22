class UserService{
    constructor(){
        this.registerLink = '';
    }
    registerUser = (user) => {
        return fetch(this.registerLink, {
            method: 'post',
            body: JSON.stringify(user),
            headers: {
                'content-type': 'application/json'
            }
        }).then(function (value) {
            return value.json();
        })
    }

    loginUser = (user) => {
        return fetch(this.loginLink, {
            method: 'post',
            body: JSON.stringify(user),
            headers: {
                'content-type': 'application/json'
            }
        }).then(function (value) {
            return value.json();
        })
    }
}

export default UserService;
