class DataBaseAPI {
    static resetLocalStorage(){
        localStorage.clear();
        localStorage.setItem('USERS:', '[]')
    }

    static parsedUsers(){
        return JSON.parse(localStorage.getItem('USERS:'));
    }

    static refreshLocalStorage(users){
        localStorage.setItem('USERS:', JSON.stringify(users))
    }

    static createNewUser(username, password) {
        if(username === '' || password === ''){
            console.log('one of the user/password fields is empty');
            return false;
        }
        let users = this.parsedUsers();
        let id = users.length + 1;
        let ToBeInserted = {
            'id': id,
            'username': username,
            'password': password,
            'todosArr': []
        }
        users.push(ToBeInserted);
        this.refreshLocalStorage(users);
        return true;
    }

    static pushList(username, toPush) {
        let users = this.parsedUsers();
        let selectedUser = users.find((users) => users.username === username);
        // return selectedUser === undefined ? false : selectedUser.todosArr.push(toPush); 
        if (selectedUser) {
            selectedUser.todosArr.push(toPush);
            this.refreshLocalStorage(users);
            return true;
        }
        return false;
    }

    static getUserObj(username) {
        let users = this.parsedUsers();
        let selectedUser = users.find((users) => users.username === username);
        return selectedUser === undefined ? false : selectedUser;
    }

    static deleteUser(username) {
        let users = this.parsedUsers();
        console.log(users)
        let deletedUser = users.filter(user => user.username !==    username);
        this.refreshLocalStorage(deletedUser);
        return deletedUser.length === users.length ? false : true;
    }
}

let obj1 = {
    'username': 'blahblah',
    'password': '12564334',
    'todoList': ['clean', 'def', 'take trash']
}


console.log(DataBaseAPI.pushList('a', 'dsff'));