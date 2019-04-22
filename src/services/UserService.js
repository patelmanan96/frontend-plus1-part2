class UserService{
    constructor(){
        this.registerLink = 'https://restbcken-plus1part2-diversity.herokuapp.com';
    }
    registerUser = (user) => {
        return fetch(this.registerLink+'/api/register', {
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
        return fetch(this.registerLink + '/api/login', {
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
