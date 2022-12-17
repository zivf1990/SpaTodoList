//Client-Side RestAPI

class RestAPI {
  static createTodo(data) {
    console.log("RestAPI.createTodo");
    const myXhttpRequest1 = new MyXhttpRequest();
    myXhttpRequest1.open("POST", "Home/myListAdd");

    myXhttpRequest1.send(data);
    return myXhttpRequest1.response;
  }

  static createNewUser(user) {
    console.log("RestAPI.createNewUser");
    const myXhttpRequest1 = new MyXhttpRequest();
    myXhttpRequest1.open("POST", "signup");

    myXhttpRequest1.send(user);
    return myXhttpRequest1.response;
  }

  static validateUser(user) {
    console.log("RestAPI.validateUser");

    const myXhttpRequest1 = new MyXhttpRequest();
    myXhttpRequest1.open("POST", "signin");

    myXhttpRequest1.send(user);

    return myXhttpRequest1.response;
  }

  static getUser(id) {
    const myXhttpRequest1 = new MyXhttpRequest();
    myXhttpRequest1.open("GET", "users/user" + id);

    myXhttpRequest1.send(id);

    return myXhttpRequest1.response;
  }
}
