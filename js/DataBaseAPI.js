class DataBaseAPI {
  static resetLocalStorage() {
    localStorage.clear();
    localStorage.setItem("USERS:", "[]");
  }

  static parsedUsers() {
    return JSON.parse(localStorage.getItem("USERS:"));
  }

  static refreshLocalStorage(users) {
    localStorage.setItem("USERS:", JSON.stringify(users));
  }

  static createNewUser(obj) {
    if (obj.username === "" || obj.password === "") {
      console.log("one of the user/password fields is empty");
      return false;
    }
    let users = this.parsedUsers();
    for (const key in users) {
      if (users[key].username === obj.username) {
        return false;
      }
    }
    if (!users) {
      this.resetLocalStorage();
      console.log("abc");
      users = this.parsedUsers();
    }
    let id = users.length + 1;
    let toBeInserted = {
      id: id,
      username: obj.username,
      password: obj.password,
      todosArr: [],
    };
    users.push(toBeInserted);
    this.refreshLocalStorage(users);
    return id;
  }

  static pushList(id, toPush) {
    let users = this.parsedUsers();
    let selectedUser;
    for (const user in users) {
      if (users[user].id === id) {
        selectedUser = users[user];
      }
    }
    if (selectedUser) {
      selectedUser.todosArr.push(toPush);

      this.refreshLocalStorage(users);
      return true;
    }
    return false;
  }

  // ziv changes
  static getUserObj(id) {
    let users = this.parsedUsers();

    if (users) {
      let selectedUser = users.find((user) => user.id === id);
      return selectedUser ? selectedUser : false;
    }

    return false;
  }

  static getUserObjByUserName(username) {
    let users = this.parsedUsers();

    if (users) {
      let selectedUser = users.find((user) => user.username === username);
      return selectedUser ? selectedUser : false;
    }

    return false;
  }

  static deleteUser(id) {
    let users = this.parsedUsers();
    let deletedUser = users.filter((user) => user.id !== id);
    this.refreshLocalStorage(deletedUser);
    return deletedUser.length === users.length ? false : true;
  }
}
