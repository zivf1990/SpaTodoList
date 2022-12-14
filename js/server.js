class Server {
    constructor(obj) {
        this.obj = obj;
        //user sets the post details as an object (username and password or array of lis)
        this.userAddsData = obj.userAddsData
        this.username = obj.username;
        this.response = obj.response;

    }
    renderObj(method) {
        if(this.userPostData !== ''){
            
        }
        switch (method, dbUrl) {
            case method === 'GET':
                return dbUrl.getUserObj(this.username);
            case method === 'SET':
                dbUrl.createNewUser(this.PostData);
        }
    }
}

console.log()

let xhttp = {
    method: 'GET',
    onload: function () { },
    response: '123'
}