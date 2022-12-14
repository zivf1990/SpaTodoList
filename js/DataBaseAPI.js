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

    static createNewUser(obj) {
        if(obj.username === '' || obj.password === ''){
            console.log('one of the user/password fields is empty');
            return false;
        }
        let users = this.parsedUsers();
        for (const key in users) {
            if(users[key].username === obj.username){
                return false;
            }
        }
        
        let id = users.length + 1;
        let ToBeInserted = {
            'id': id,
            'username': obj.username,
            'password': obj.password,
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
        let deletedUser = users.filter(user => user.username !==  username);
        this.refreshLocalStorage(deletedUser);
        return deletedUser.length === users.length ? false : true;
    }
}

